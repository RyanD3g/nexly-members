import { Injectable } from "@nestjs/common";
import { ACreatePollProducer } from "../../ICreatePoll.producer";
import { Option_Poll, Post_Polls } from "@prisma/client";
import { ICreatePollDTO, IOptionsForPollDTO } from "src/useCases/producer/CreatePoll/CreatePoll.DTO";

@Injectable()
export class CreatePollAndAddOneQuestionOptionalInMemory implements ACreatePollProducer {
    private postPoll_Model: Post_Polls[] = [];
    private optionsModel: Option_Poll[] = [];
    createAPollAndOption({ producerId, titleQuestion, descriptionQuestion, options }: ICreatePollDTO): Post_Polls[] | Object {
        const createNewPoll = this.postPoll_Model.push({
            id:'234',
            descriptionQuestion,
            pollsId:'teste',
            titleQuestion,
            createdAt:new Date(),
            updatedAt: new Date(),
        });
        if(options){
            const createNewOption = this.optionsModel.push({
                id:'567',
                nameSelection:options.nameSelection,
                optionId:this.postPoll_Model[0].id || options.pollId,
                qntVotes:0,
                createdAt:new Date(),
                updatedAt:new Date(),
            });
            
            return { poll:this.postPoll_Model, options:this.optionsModel, };
        };
        return this.postPoll_Model;
    };
    addNewOptionPoll({ nameSelection, pollId: optionId, qntVotes, }: IOptionsForPollDTO): Option_Poll {
        const searchForPollIfExists = this.postPoll_Model.some(e => e.id === optionId);
        if(!searchForPollIfExists){
            throw new Error('Enquete inexistente!!');
        };
        const newOPtion = this.optionsModel.push({
            id:'567',
            nameSelection,
            optionId,
            qntVotes,
            createdAt:new Date(),
            updatedAt:new Date(),
        });
        return this.optionsModel[0];
    };
};
