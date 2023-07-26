import { IsNotEmpty } from "class-validator";

export class IToShareDTO {
    @IsNotEmpty()
    postId:string;

    userId:string;
};
