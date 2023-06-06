import { Injectable } from "@nestjs/common";
import { ACommentInLesson } from "../../IComment.student";
import { ICommentDTO } from "../../../../useCases/students/CommentInACourse/Comment.DTO";
import { Comments_movies, Courses_Student } from "@prisma/client";

@Injectable()
export class CommentInMemory implements ACommentInLesson {
    private CourseModel_InMemory: Courses_Student[] =[{
        id:'123',
        completed:false,
        lastSeen:'12:00:00',
        studentCoursesId:'456',
        coursesId:'432',
        createdAt:new Date(),
        updatedAt:new Date(),
    }];
    private CommentModel__InMemory: Comments_movies[] = [];
    async isMycourse(data: ICommentDTO): Promise<boolean> {
        const verifyIsStudent = this.CourseModel_InMemory.some(e => e.coursesId === data.courseId);
        return verifyIsStudent;
    };
    async comment(data: ICommentDTO): Promise<Comments_movies> {
        const createComment = this.CommentModel__InMemory.push({
            id:'231',
            likes:null,
            comment:data.commentContent,
            movieId:data.lessonId,
            nameStudent:data.studentId,
            createdAt:new Date(),
            updatedAt:new Date(),
        });

        return this.CommentModel__InMemory[0];
    };
};
