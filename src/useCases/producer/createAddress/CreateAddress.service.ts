import { Injectable } from "@nestjs/common";
import { IAddressByProducer } from "./CreateAddress.DTO";
import { CreateAddressImplementation } from "../../../repositories/Producer/implementations/CreateAddress.service";

@Injectable()
export class CreateAddressService {
    constructor(
        private implementation:CreateAddressImplementation,
    ){};

    async created(data:IAddressByProducer){
        const sendData = await this.implementation.createAddress(data);
        return sendData;
    };
};
