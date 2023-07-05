import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ALoginStudent } from "../ILoginStudent.student";
import { PrismaService } from "../../../database";
import { ILoginStudent } from "../../../useCases/students/loginStudent/LoginStudent.DTO";
import * as bcrypt from 'bcrypt';
import { generateToken } from "../../../utils/jsonToken.utils";

@Injectable()
export class LoginStudentImplementation implements ALoginStudent {
    constructor(
        private prisma:PrismaService,
    ){};

    async login(dataForLogin: ILoginStudent): Promise<Object> {
       const findByEmailOfStudent = await this.prisma.student.findUnique({
            where: { email:dataForLogin.email, },
       });

       if(findByEmailOfStudent == null){
            throw new HttpException('Email inexistente!!', HttpStatus.BAD_REQUEST);
       };

       if(!await bcrypt.compare(dataForLogin.password, findByEmailOfStudent.password)){
            throw new HttpException('Senha incorreta!', HttpStatus.UNAUTHORIZED);
       };
       await this.prisma.$disconnect();
       return { logged:true, token: generateToken({ id:findByEmailOfStudent.id }) };
    };
};
