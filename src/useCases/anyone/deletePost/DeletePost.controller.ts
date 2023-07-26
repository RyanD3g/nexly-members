import { Body, Controller, Delete, Param } from "@nestjs/common";
import { DeletePostService } from "./DeletePost.service";
import { IDeletePostDTO } from "./DeletePost.DTO";

@Controller('delete')
export class DeletePostController {
    constructor(
        private service:DeletePostService,
    ){};

    @Delete('post/:postId')
    async handle_deletePost(
        @Body() body?:IDeletePostDTO,
        isTest:boolean = false,
        @Param('postId') postId?:string,
    ){
        try {
          const deleted = await this.service.deletePost({
            postId:postId || body?.postId,
          }, isTest);  

          return deleted;
        } catch (error) {
            return error;
        };
    };
};
