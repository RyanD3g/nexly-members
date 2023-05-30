import { Comments_movies, Courses_Student, Movies_Modules } from "@prisma/client";
import { ICommentDTO } from "src/useCases/students/CommentInACourse/Comment.DTO";

export abstract class ACommentInLesson {
    abstract isMycourse(data:ICommentDTO): Promise<boolean | Courses_Student>;
    abstract comment(data:ICommentDTO): Promise<Comments_movies | Movies_Modules>;
};
