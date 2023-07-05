import { Injectable } from "@nestjs/common";
import { AGiveLike } from "../IGiveLike.producer";
import { IGiveLikeDTO } from "../../../useCases/students/giveLike/GiveLike.DTO";
import { Movies_Modules } from "@prisma/client";
import { PrismaService } from "../../../database";

@Injectable()
export class GiveLikeImplementation implements AGiveLike {
    constructor(
        private prisma:PrismaService,
    ){};
    async isExists(courseId: string): Promise<Movies_Modules> {
        const findIsExists = await this.prisma.movies_Modules.findUnique({
            where: { id:courseId, },
        });
        await this.prisma.$disconnect();
        return findIsExists;
    }
    async like(data: IGiveLikeDTO): Promise<Object> {
        const liked = await this.prisma.movies_Modules.update({
            where: { id:data.lessonId, },

            data:{
                like: + 1,
            },
        });
        await this.prisma.$disconnect();
        return { liked: true };
    };
};
