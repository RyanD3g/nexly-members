import { Injectable } from "@nestjs/common";
import { AReturnPostsAndPolls } from "../IReturnPostsAndPolls.anyone";
import { PrismaService } from "src/database";

@Injectable()
export class ReturnAllDataImplementation implements AReturnPostsAndPolls {
    constructor(
        private prisma:PrismaService,
    ){};
    async returnAll(): Promise<Object> {
        const returnPostsOfProducers = await this.prisma.producer.findMany({
            include:{
                posts:{
                    include:{
                        Comments:{
                            include: { reply:true },
                        },
                        likes:true,
                    },
                },
                polls:{
                    include:{
                        option:true,
                    },
                },
            },
        });
        // const returnPostsWithPolls = await this.prisma.posts.findMany({
        //     include:{
        //         Comments:{
        //             include:{
        //                 reply:true,
        //             },
        //         },
        //         likes:true,
        //     },
        // });
        // const returnPolls = await this.prisma.post_Polls.findMany({
        //     include:{
        //         option:{
        //             include:{
        //                 postPoll:true,
        //             },
        //         },
        //     }
        // });
        await this.prisma.$disconnect();
        return { posts: returnPostsOfProducers };
    };
};
