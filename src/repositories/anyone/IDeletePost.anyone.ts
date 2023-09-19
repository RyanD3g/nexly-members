import { IDeletePostDTO } from "src/useCases/anyone/deletePost/DeletePost.DTO";

export abstract class ADeletePost {
    abstract delete(data:IDeletePostDTO): Promise<Object> | Object;
};
