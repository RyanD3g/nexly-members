import { Option_Poll, Post_Polls, Producer } from "@prisma/client";
import { ICreatePollDTO, IOptionsForPollDTO } from "src/useCases/producer/CreatePoll/CreatePoll.DTO";

export abstract class ACreatePollProducer {
    abstract createAPollAndOption(data:ICreatePollDTO): Promise<Producer> | Post_Polls[] | Object;
    abstract addNewOptionPoll(data:IOptionsForPollDTO): Promise<Post_Polls> | Option_Poll;
};
