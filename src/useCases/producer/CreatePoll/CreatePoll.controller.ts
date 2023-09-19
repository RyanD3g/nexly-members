import { Body, Controller, Param, Post, Put, Request } from "@nestjs/common";
import { CreateNewPollOrAddNewOptionForPoll } from "./CreatePoll.service";
import { ICreatePollDTO, IOptionsForPollDTO } from "./CreatePoll.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('create')
export class CreatePollAndOptionController {
    constructor(
        private service:CreateNewPollOrAddNewOptionForPoll,
    ){};

    @Post('poll')
    async addNewPoll(
        @Body() body:ICreatePollDTO,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
    ){
        try {
            const createNew = await this.service.createNewPoll({
                titleQuestion:body.titleQuestion,
                descriptionQuestion:body.descriptionQuestion,
                options:{
                    nameSelection:body?.options.nameSelection,
                },
                producerId:req?.producerId || body?.producerId,
            }, isTest);
            return createNew;
        } catch (error) {
          return error;  
        };
    };
    
    @Put('option/:pollId')
    async addNewOptionForPoll(
        @Body() body:IOptionsForPollDTO,
        isTest:boolean = false, 
        @Param('pollId') pollId?:string,
    ){
        try {
          const createOptionForPoll = await this.service.createNewOption({
            nameSelection:body?.nameSelection,
            pollId: pollId || body?.pollId,
          }, isTest);
          return createOptionForPoll;  
        } catch (error) {
            return error;
        };
    };
};
