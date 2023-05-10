import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { GetFullDataProducer } from "../../../repositories/Producer/implementations/FullDataProducer.service";
import { IFullProducer } from "./FullProducer.DTO";

@Injectable()
export class getDataAndValidateFullProducerService {
    constructor(
        private implementation:GetFullDataProducer,
    ){};

    async validate_and_get(data:IFullProducer){
        const validate = await this.implementation.isComplete(data);
        if(validate.id === undefined || !validate.id || validate.id === null){
            throw new HttpException('Perfil incompleto!', HttpStatus.BAD_REQUEST);
        };

        const get = await this.implementation.getAllDataProducer(data);
        return get;
    };
};
