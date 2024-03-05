import { StateUserMember } from "@prisma/client";
import { IsEmail, IsNotEmpty, IsUUID, MaxLength, } from "class-validator";

export class INewMemberDTO{
    @IsNotEmpty()
    @IsEmail()
    emailUser:string;

    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    @IsUUID()
    courseId:string;

    @IsNotEmpty()
    @MaxLength(15)
    idendidty:string;

    typeUser:StateUserMember;
};
