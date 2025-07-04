import { BadRequestException, Body, Controller, Param, ParseUUIDPipe, Post, Request } from "@nestjs/common";
import { VoteInPollService } from "./Vote.service";
import { CustomRequest } from "src/interfaces/Request.interface";
import { IVoteInPollDTO } from "./Vote.DTO";

@Controller('vote')
export class VoteInPollController {
    constructor(
        private service:VoteInPollService,
    ){};

    @Post('poll/:optionId/:postId')
    async handle_Vote(
        @Body() body?:IVoteInPollDTO,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
        @Param('optionId', new ParseUUIDPipe({ errorHttpStatusCode:400, exceptionFactory(errors) {
            throw new BadRequestException('Id Inválido!');
        },})) optionId?:string,
        @Param('postId', new ParseUUIDPipe({ errorHttpStatusCode:400, exceptionFactory(errors) {
            throw new BadRequestException('Id Inválido!');
        },})) postId?:string,
    ){
        try {
            const vote = await this.service.execute_vote({
                idUser:body?.idUser || req?.producerId || req?.studentId,
                optionId:optionId || body?.optionId,
                pollId:postId || body?.pollId,
            }, isTest);
            return vote;
        } catch (error) {
            return error;
        };
    };
};
