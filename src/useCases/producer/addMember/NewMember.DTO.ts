import { ApiProperty } from "@nestjs/swagger";
import { StateUserMember } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty, IsString, IsUUID, MaxLength, } from "class-validator";

export class INewMemberDTO{
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ type:String, required:true })
    emailUser:string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ type:String, required:true })
    name:string;

    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({ type:String, required:true })
    courseId:string;

    @IsNotEmpty()
    @MaxLength(15)
    @ApiProperty({ type:String, required:true })
    idendidty:string;

    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({ type:String, required:true })
    idUser:string;

    @IsNotEmpty()
    @IsEnum(StateUserMember)
    @ApiProperty({ required:true, enum:StateUserMember, description:"Os valores são enums: BLOQUEADO, ATIVO e COLABORADOR" })
    typeUser:StateUserMember;
};

