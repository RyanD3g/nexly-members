import { Body, Controller, Put, Request } from "@nestjs/common";
import { ChangeTagsService } from "./ChangeTags.service";
import { ITagName } from "./ChangeTags.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('change')
export class ChangeTagsController {
    constructor(
        private service:ChangeTagsService,
    ){};

    @Put('tags/student')
    async handle_created(@Body() body:ITagName, @Request() req?:CustomRequest){
        try {
            const createTags = await this.service.changed({
                tagname:body.tagname,
                studentId:req.studentId,
            });
            return createTags;
        } catch (error) {
            return error;
        };
    };
};
