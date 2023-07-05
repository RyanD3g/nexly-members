import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ALoginProducer } from "../ILoginProducer.producer";
import { PrismaService } from "../../../database";
import { ILoginProducer } from "../../../useCases/producer/loginProducer/LoginProducer.DTO"; 
import * as bcrypt from 'bcrypt';
import { generateToken } from "../../../utils/jsonToken.utils";

@Injectable()
export class LoginProducerImplementation implements ALoginProducer {
    constructor(
        private prisma:PrismaService,
    ){};

    async login(dataForLogin: ILoginProducer): Promise<Object> {
       const findByEmailOfProducer = await this.prisma.producer.findUnique({
            where: { email:dataForLogin.email, },
       });

       if(findByEmailOfProducer == null){
            throw new HttpException('Email inexistente!!', HttpStatus.BAD_REQUEST);
       };

       if(!await bcrypt.compare(dataForLogin.password, findByEmailOfProducer.password)){
            throw new HttpException('Senha incorreta!', HttpStatus.UNAUTHORIZED);
       };
       await this.prisma.$disconnect();
       return { logged:true, token: generateToken({ producerId:findByEmailOfProducer.id, signed:findByEmailOfProducer.isAccountActive, isProducer:findByEmailOfProducer.isProducer }) };
    };
};
