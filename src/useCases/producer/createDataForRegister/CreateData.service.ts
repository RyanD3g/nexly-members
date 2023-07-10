import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IDataByProducer } from "./CreateData.DTO";
import { CreateDataProducerImplementation } from "../../../repositories/Producer/implementations/CreateDataProducer.service";

@Injectable()
export class CreateDataForProducerService {
    constructor(
        private implementation:CreateDataProducerImplementation,
    ){};

    async created(data:IDataByProducer){
        const byPhone = await this.implementation.findByPhone(data.phone_number);
        if(byPhone){
            throw new HttpException('Número cadastrado!', HttpStatus.BAD_REQUEST);
        };
        const byIdentity = await this.implementation.findByIdentity(data.identity);
        if(byIdentity){
            throw new HttpException('Identidade já cadastrada!', HttpStatus.BAD_REQUEST);
        };
        const sendData = await this.implementation.create(data);
        return {ok:'OK'};
    };
};
