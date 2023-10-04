import { Injectable } from "@nestjs/common";
import { AReturnPostsAndPolls } from "../IReturnPostsAndPolls.anyone";
import { PrismaService } from "src/database";

@Injectable()
export class ReturnAllDataImplementation implements AReturnPostsAndPolls {
    constructor(
        private prisma:PrismaService,
    ){};
    async returnAll(): Promise<Object> {
        const returnAllPosts = await this.prisma.posts.findMany({
            include:{ producer:true, student:true, Comments:true, likes:true },
        });
        const dataFilterProducer = returnAllPosts.map(e => {
            if(e.producer){
                delete e.producer.email;
                delete e.producer.delDate;
                delete e.producer.identity;
                delete e.producer.isAccountActive;
                delete e.producer.isProducer;
                delete e.producer.password;
                delete e.producer.codeDate;
                delete e.producer.code;
                delete e.producer.phone;
                delete e.producer.sex;
            }else{
                delete e.student.email;
                delete e.student.delDate;
                delete e.student.cpf;
                delete e.student.password;
                delete e.student.codeDate;
                delete e.student.code;
                delete e.student.phone;
                delete e.student.sex;
            };
        });
        await this.prisma.$disconnect();
        return { posts:returnAllPosts };
    };
};
