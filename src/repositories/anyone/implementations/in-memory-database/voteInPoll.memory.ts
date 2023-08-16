import { Injectable } from "@nestjs/common";
import { AVoteInPoll } from "../../IVoteInPoll.anyone";
import { IdUserVote, Option_Poll, Post_Polls } from "@prisma/client";
import { IVoteInPollDTO } from "src/useCases/anyone/voteInPoll/Vote.DTO";

@Injectable()
export class VoteInPollInMemory implements AVoteInPoll {
    private optionModel: Option_Poll[] = [
        {
            id:'123',
            nameSelection:'Teste de nome',
            optionId:'45678',
            qntVotes: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];
    private usersVotedModel: IdUserVote[] = [];
    optionExists(optionId: string): boolean {
        const optionExists = this.optionModel.some(e => e.id === optionId);
        return optionExists;
    };
    isVoted(data:IVoteInPollDTO): boolean {
        const isVote = this.usersVotedModel.some(e => e.idUser === data.idUser);
        return isVote;
    };
    toVote(data: IVoteInPollDTO): IdUserVote {
        const addVote = this.usersVotedModel.push(  {
            id:'123',
            idUser: data.idUser,
            pollId:data.optionId,
            createdAt: new Date(),
            updatedAt: new Date(),
        },);

        return this.usersVotedModel[0];
    };
};
