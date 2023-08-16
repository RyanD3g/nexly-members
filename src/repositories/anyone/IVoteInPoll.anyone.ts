import { IdUserVote, Option_Poll, Post_Polls } from "@prisma/client";
import { IVoteInPollDTO } from "src/useCases/anyone/voteInPoll/Vote.DTO";

export abstract class AVoteInPoll {
    abstract isVoted(data:IVoteInPollDTO): Promise<boolean> | boolean;
    abstract optionExists(optionId:string): Promise<Option_Poll> | boolean;
    abstract toVote(data:IVoteInPollDTO): Promise<Post_Polls> | IdUserVote;
};
