import { Injectable } from "@nestjs/common";
import { AFavoriteLesson } from "../IFavoriteLesson.student";
import { IChangeFavoriteDTO } from "../../../useCases/students/changeFavoriteLesson/ChangeFavorite.DTO";
import { PrismaService } from "../../../database";
@Injectable()
export class FavoriteLessonImplementation implements AFavoriteLesson {
    constructor(
        private prisma:PrismaService,
    ){};
    async changeLesson(data: IChangeFavoriteDTO): Promise<Object> {
        const setFavorite = this.prisma.student.update({
            where: { id:data.studentId, },
            data:{
                favoriteLessons:{
                    create:{
                        nameLesson:data.lessonName,
                        lessonId:data.lessonId,
                    },
                },
            },
        });
        await this.prisma.$disconnect();
        return { favorited: true };
    };
};
