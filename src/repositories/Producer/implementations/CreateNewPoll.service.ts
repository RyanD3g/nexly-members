import { HttpException, Injectable } from "@nestjs/common";
import { ACreatePollProducer } from "../ICreatePoll.producer";
import { Post_Polls, Producer } from "@prisma/client";
import { ICreatePollDTO, IOptionsForPollDTO } from "src/useCases/producer/CreatePoll/CreatePoll.DTO";
import { PrismaService } from "src/database";

@Injectable()
export class CreatePollAndOptionImplementation implements ACreatePollProducer {
    constructor(
        private prisma:PrismaService,
    ){};
    async createAPollAndOption({ 
        producerId, 
        titleQuestion,
        descriptionQuestion, 
        options: { 
            nameSelection,
            pollId: optionId,
        }, 
    }: ICreatePollDTO): Promise<Producer> {
        if(nameSelection){
            const createNewPoll = await this.prisma.producer.update({
                where:{ id:producerId, },
    
                data:{
                    polls:{
                        create:{
                            titleQuestion, 
                            descriptionQuestion,
                            option:{
                                create:{
                                    nameSelection,  
                                    qntVotes: 0,
                                },
                            },
                        },
                    },
                },
            });
            return createNewPoll;
        };
        const createNewPoll = await this.prisma.producer.update({
            where:{ id:producerId, },

            data:{
                polls:{
                    create:{
                        titleQuestion, 
                        descriptionQuestion,
                    },
                },
            },
        });
        return createNewPoll;
    };
    async addNewOptionPoll({ nameSelection, pollId, }: IOptionsForPollDTO): Promise<Post_Polls> {
        const searchForPollIfExists = await this.prisma.post_Polls.findUnique({
            where:{ id:pollId, },
        });
        if(!searchForPollIfExists){
            throw new HttpException('Enquete inexistente', 404);
        };
        const addNewOptionInPoll = await this.prisma.post_Polls.update({
            where:{ id:pollId, },
            data:{
                option:{
                    create:{
                        nameSelection,
                        qntVotes: 0,
                    },
                },
            },
        });
        return addNewOptionInPoll;
    };
};
