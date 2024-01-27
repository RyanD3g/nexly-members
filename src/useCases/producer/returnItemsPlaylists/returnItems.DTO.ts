import { IsNotEmpty } from "class-validator";

export class IReturnItemsPlaylist {
    @IsNotEmpty()
    courseYtId:string;
};
