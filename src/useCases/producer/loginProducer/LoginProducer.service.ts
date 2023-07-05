import { Injectable } from "@nestjs/common";
import { LoginProducerImplementation } from "../../../repositories/Producer/implementations/LoginProducer.service";
import { ILoginProducer } from "./LoginProducer.DTO";

@Injectable()
export class LoginProducerService {
    constructor(
        private implementation:LoginProducerImplementation,
    ){};

    async handleUp_data_for_Repository(data:ILoginProducer){
        const uped = await this.implementation.login(data);
        return uped;
    };
};
