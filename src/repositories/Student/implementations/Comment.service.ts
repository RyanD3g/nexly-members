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
    async isMycourse(data: ICommentDTO): Promise<boolean> {
        const ismyCourse2 = await this.prisma.student.findUnique({
            where:{ id:data.studentId },
            include:{ courses:true },
        });
        const verify = ismyCourse2.courses.some(e => e.coursesId === data.courseId);
        await this.prisma.$disconnect();
        return verify;
    };
    async comment(data: ICommentDTO): Promise<Movies_Modules> {
        const findbyStudent = await this.prisma.student.findUnique({
            where:{ id:data.studentId },
        });

        const comment = await this.prisma.movies_Modules.update({
            where:{ id:data.lessonId },
            include:{ Comments_movies:true },

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
