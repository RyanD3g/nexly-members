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
        const returnPostsOfStudents = await this.prisma.student.findMany({
            include:{
                posts:true,
            },
        })
        const dataFilterProducer = returnPostsOfProducers.map(e => {
            delete e.email;
            delete e.delDate;
            delete e.identity;
            delete e.isAccountActive;
            delete e.isProducer;
            delete e.password;
            delete e.codeDate;
            delete e.code;
            delete e.phone;
            delete e.sex;
        });
        const dataFilterStudent = returnPostsOfStudents.map(e => {
            delete e.email;
            delete e.delDate;
            delete e.cpf;
            delete e.password;
            delete e.codeDate;
            delete e.code;
            delete e.phone;
            delete e.sex;
        });
        await this.prisma.$disconnect();
        return { postsProducer:returnPostsOfProducers, postsStudents:returnPostsOfStudents };
    };
};
