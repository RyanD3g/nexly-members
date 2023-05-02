import { Injectable } from "@nestjs/common";
import { IAddressByStudent } from "./CreateAddress.DTO";
import { CreateAddressImplementation } from "../../../repositories/Student/implementations/CreateAddress.service";

@Injectable()
export class CreateAddressService {
    constructor(
        private implementation:CreateAddressImplementation,
    ){};

    async created(data:IAddressByStudent){
        const sendData = await this.implementation.createAddress(data);
        return sendData;
    };
};
