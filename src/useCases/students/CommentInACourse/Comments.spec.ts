import { Test } from "@nestjs/testing";
import { CommentInLessonController } from "./Comment.controller";
import { PrismaService } from "../../../database";
import { CommentInLessonImplementation } from "../../../repositories/Student/implementations/Comment.service";
import { CommentInLessonService } from "./Comment.service";
import { CommentInMemory } from "../../../repositories/Student/implementations/in-memory-database/comment.memory";
import { IsDeleteCourseImplementation } from "../../../repositories/anyone/implementations/IsDeleteCourse.service";

describe('Criando testes para comentar em alguma aula', ()=>{
    let commentController:CommentInLessonController;
    beforeAll(async ()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [CommentInLessonController],
            providers: [
                PrismaService,
                CommentInLessonImplementation,
                CommentInLessonService,
                CommentInMemory,
                IsDeleteCourseImplementation,
            ],
        }).compile();

        commentController = moduleRef.get<CommentInLessonController>(CommentInLessonController);
    });

    describe('Testando comentários', ()=>{
        it('Deveria criar um comentário normalmente', async ()=>{
            const testingComment = await commentController.handle_comment({
                courseId:'432',
                lessonId:'987',
                commentContent:'testedeComentário',
                studentId:'456',
            }, true);
            expect(testingComment.comment).toBeDefined();
        });
        it('Deveria impedir porque o curso não é dele', async()=>{
            const testingComment = await commentController.handle_comment({
                courseId:'2332',
                lessonId:'987',
                commentContent:'testeDeErroDeComentário',
                studentId:'564',
            }, true);
            expect(testingComment).toThrow;
        });
    });
});
