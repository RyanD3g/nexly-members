import { IsNotEmpty } from "class-validator";

export class ParamReturnAllMembersDTO {
    @IsNotEmpty()
    courseId:string;
};
