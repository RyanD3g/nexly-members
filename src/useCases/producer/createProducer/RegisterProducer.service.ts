import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { RegisterProducerImplementation } from "../../../repositories/Producer/implementations/RegisterProducer.service";
import { IRegisterProducer } from "./RegisterProducer.DTO";

@Injectable()
export class RegisterProducerService {
    constructor(
        private implementation:RegisterProducerImplementation,
    ){};

    async createProducerInDataBase(data:IRegisterProducer){
        const findByEmailExists = await this.implementation.findByEmal(data.email);
        if(findByEmailExists){
            throw new HttpException('Email já cadastrado!!', HttpStatus.BAD_REQUEST);
        };

        if(data.password !== data.confirmPassword){
            throw new HttpException('Senhas não batem!!', HttpStatus.BAD_REQUEST);
        };

        const createProducerInDB = await this.implementation.register(data);

        return createProducerInDB;
    };
};
