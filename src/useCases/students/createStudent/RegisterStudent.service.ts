import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { RegisterStudentImplementation } from "../../../repositories/Student/implementations/RegisterStudent.service";
import { IRegisterStudent } from "./RegisterStudent.DTO";

@Injectable()
export class RegisterStudentService {
    constructor(
        private implementation:RegisterStudentImplementation,
    ){};

    async createStudentInDataBase(data:IRegisterStudent){
        const findByEmailExists = await this.implementation.findByEmal(data.email);
        if(findByEmailExists){
            throw new HttpException('Email já cadastrado!!', HttpStatus.BAD_REQUEST);
        };

        if(data.password !== data.confirmPassword){
            throw new HttpException('Senhas não batem!!', HttpStatus.BAD_REQUEST);
        };

        const createStudentInDB = await this.implementation.register(data);

        return createStudentInDB;
    };
};
