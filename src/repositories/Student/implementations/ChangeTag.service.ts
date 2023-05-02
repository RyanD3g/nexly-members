import { Injectable } from "@nestjs/common";
import { AChangeTags } from "../IChangeTag.student";
import { ITagName } from "../../../useCases/students/changeTags/ChangeTags.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class ChangeTagImplementation implements AChangeTags {
    constructor(
        private prisma:PrismaService,
    ){};
    async changeTag(data: ITagName): Promise<Object> {
        const createdTagByLiking = await this.prisma.student.update({
            where:{ id:data.studentId },

            data:{
                tags:{
                    create:data.tagname,
                },
            },
        });

        return { created:true };
    };
};
