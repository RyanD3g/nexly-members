import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AFindForCourse } from "../IFindForCourse.student";
import { ISearchDTO } from "../../../useCases/students/searchByCourse/SearchCourse.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class SearchCourseImplementation implements AFindForCourse{
    constructor(
        private prisma:PrismaService,
    ){};
    async find(data: ISearchDTO): Promise<Object> {
        const findProducer = await this.prisma.producer.findMany({
            where: { name:data.filterForProducer },
            include:{
                courses:true,
            },
        });
        const findForCourse = await this.prisma.courses_Producer.findMany(
            {
                where:{
                    name:data.filterForCourseName,
                    categorysTag: data.filterForTag === null? undefined: {
                        has:data.filterForTag,
                    },
                },
            },
        );

        if(findForCourse.length === 0){
            throw new HttpException('Nada encontrado', HttpStatus.NOT_FOUND);
        };
        await this.prisma.$disconnect();
        return { courses: findForCourse, producers:findProducer, };
    };
};
