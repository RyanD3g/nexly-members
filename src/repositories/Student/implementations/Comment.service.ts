import { Injectable } from "@nestjs/common";
import { ACommentInLesson } from "../IComment.student";
import { Comments_movies, Courses_Student, Movies_Modules } from "@prisma/client";
import { ICommentDTO } from "../../../useCases/students/CommentInACourse/Comment.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class CommentInLessonImplementation implements ACommentInLesson{
    constructor(
        private prisma:PrismaService,
    ){};
    async isMycourse(data: ICommentDTO): Promise<Courses_Student> {
        const ismyCourse = await this.prisma.courses_Student.findFirst({
            where:{ studentCoursesId:data.studentId },
        });

        return ismyCourse;
    };
    async comment(data: ICommentDTO): Promise<Movies_Modules> {
        const findbyStudent = await this.prisma.student.findUnique({
            where:{ id:data.studentId },
        });

        const comment = await this.prisma.movies_Modules.update({
            where:{ id:data.lessonId },

            data:{
                Comments_movies:{
                    create:{
                        nameStudent:findbyStudent.name,
                        comment:data.commentContent,
                    },
                },
            },
        });
        await this.prisma.$disconnect();
        return comment;
    };
};
