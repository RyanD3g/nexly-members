import { Injectable } from "@nestjs/common";
import { ARegisterProducer } from "../IRegisterProducer.producer";
import { PrismaService } from "../../../database";
import { Producer } from "@prisma/client";
import * as bcrypt from 'bcrypt';
import { generateToken } from "../../../utils/jsonToken.utils";
import { IRegisterProducer } from "../../../useCases/producer/createProducer/RegisterProducer.DTO";

@Injectable()
export class RegisterProducerImplementation implements ARegisterProducer {
    constructor(
        private prisma:PrismaService,
    ){};
    
    async findByEmal(email: string): Promise<Producer> {
        const findByEmailInDB = this.prisma.producer.findUnique(
            { where: { email } },
        ); 

        await this.prisma.$disconnect();

        return findByEmailInDB;
    };

    async register({
        email,
        password,
        confirmPassword,
    }: IRegisterProducer): Promise<Object> {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const register = await this.prisma.producer.create({
            data:{
                email,
                password: hash,
            },
        });
        await this.prisma.$disconnect();
        return { Register:'OK', token: generateToken({ producerId:register.id, signed:register.isAccountActive, isProducer:register.isProducer }) }; 
    };
};
