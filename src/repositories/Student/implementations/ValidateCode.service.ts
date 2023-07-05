import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../database";
import { AValidateCodeAndDate } from "../IValidateCode.student";
import { IValidateCodeAndDateDTO } from "../../../useCases/students/validateCode/ValidateCode.DTO";
import { generateToken } from "../../../utils/jsonToken.utils";

@Injectable()
export class ValidateCodeImplementation implements AValidateCodeAndDate {
    constructor(
        private prisma:PrismaService,
    ){};
    async validate(data: IValidateCodeAndDateDTO): Promise<Object> {
        const search_byDate = await this.prisma.student.findMany({
            where:{ code:data.code },
        });

        if(search_byDate.length == 0){
            throw new HttpException('Código incorreto!!', HttpStatus.BAD_REQUEST);
        }else if(search_byDate[0].codeDate !== data.codeDate){
            throw new HttpException('Código inspirado!!', HttpStatus.BAD_REQUEST);
        };
        await this.prisma.$disconnect();
        return { passed:true, token:generateToken({ id:search_byDate[0].id }) };
    };

};
