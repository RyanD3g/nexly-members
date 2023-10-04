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
            include:{ posts:true, },
        });
        const retornado = await this.prisma.posts.findMany({
            include:{ student:true, },
        });
        return { posts:retornado };
    };
};
