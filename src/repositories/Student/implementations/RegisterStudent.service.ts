import { Injectable } from "@nestjs/common";
import { ARegisterStudent } from "../IRegisterStudent.student";
import { IRegisterStudent } from "../../../useCases/students/createStudent/RegisterStudent.DTO";
import { PrismaService } from "../../../database";
import { Student } from "@prisma/client";
import * as bcrypt from 'bcrypt';
import { generateToken } from "../../../utils/jsonToken.utils";

@Injectable()
export class RegisterStudentImplementation implements ARegisterStudent {
    constructor(
        private prisma:PrismaService,
    ){};
    
    async findByEmal(email: string): Promise<Student> {
        const findByEmailInDB = this.prisma.student.findUnique(
            { where: { email } },
        ); 
        await this.prisma.$disconnect();
        return findByEmailInDB;
    };

    async register({
        email,
        password,
        confirmPassword,
    }: IRegisterStudent): Promise<Object> {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const register = await this.prisma.student.create({
            data:{
                email,
                password: hash,
            },
        });
        await this.prisma.$disconnect();
        return { Register:'OK', token: generateToken({ id:register.id }) }; 
    };
};
