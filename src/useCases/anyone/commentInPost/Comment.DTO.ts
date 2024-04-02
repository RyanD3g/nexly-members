import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
class PostsDto {
    @ApiProperty({ type:String })
    id: string;

    @ApiProperty({ type:String })
    contentPost: string | null;

    @ApiProperty({ type:String })
    momentPost: string | null;

    @ApiProperty({ type:String })
    urlPhotoPost: string | null;

    @ApiProperty({ type:String })
    share: number | null;

    @ApiProperty({ type:String })
    producerId: string | null;

    @ApiProperty({ type:String })
    studentId: string | null;

    @ApiProperty({ type:Date })
    createdAt: Date;

    @ApiProperty({ type:Date })
    updatedAt: Date;
};
export class ICommentInPostDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ type:String, required:true })
    contentComment:string;

    @ApiProperty({ type:String, required:false })
    nameUserComment:string;

    @ApiProperty({ type:String, required:false })
    idUserComment:string;

    @ApiProperty({ type:String, required:false })
    postId:string;
};

export class CommentinPostResponseDto {
    @ApiProperty({ type:String })
    id: string;

    @ApiProperty({ type:String })
    nameUserComment: string;

    @ApiProperty({ type:String })
    contentComment: string;

    @ApiProperty({ type:String })
    userId: string;

    @ApiProperty({ type:String })
    userUrlPhoto: string;

    @ApiProperty({ type:String })
    commentPostId: string;

    @ApiProperty({ type:Date })
    createdAt: Date;

    @ApiProperty({ type:Date })
    updatedAt: Date;

    @ApiProperty({ type:PostsDto })
    posts:PostsDto
};

export class ParamDtoComments {
    @ApiProperty({ type:String, required:true })
    postId:string;
};
