import { Injectable } from "@nestjs/common";
import { AVoteInPoll } from "../IVoteInPoll.anyone";
import { IdUserVote, Option_Poll, Post_Polls } from "@prisma/client";
import { IVoteInPollDTO } from "src/useCases/anyone/voteInPoll/Vote.DTO";
import { PrismaService } from "src/database";

@Injectable()
export class VoteInPollImplementation implements AVoteInPoll {
    constructor(
        private prisma:PrismaService,
    ){};
    async isVoted(data:IVoteInPollDTO): Promise<boolean> {
        const isVoted = await this.prisma.post_Polls.findUnique({
            where:{ id:data.optionId, },

            include:{
                usersVote:true,
            },
        });

        const users = isVoted.usersVote.map(e=> e.id);
        const find = users.some(e => e === data.idUser);
        return find;
    };
    async optionExists(optionId: string): Promise<Option_Poll> {
        const findForOptionIsExists = await this.prisma.option_Poll.findUnique({
            where:{ id:optionId, },
        });

        return findForOptionIsExists;
    };
    async toVote(data: IVoteInPollDTO): Promise<Post_Polls> {
        const voted = await this.prisma.option_Poll.update({
            where:{ id:data.optionId, },

            data:{
                qntVotes: + 1,
            },
        });
        const addUserVoteInPoll = await this.prisma.post_Polls.update({
            where:{ id:data.pollId, },
            include:{ usersVote:true, option:true, },
            data:{
                usersVote:{
                    create:{
                        idUser:data.idUser,
                    },
                },
            }
        });
        return addUserVoteInPoll;
    };
};
