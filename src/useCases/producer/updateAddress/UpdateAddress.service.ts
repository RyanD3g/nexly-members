import { Injectable } from "@nestjs/common";
import { UpdateAddressImplementation } from "../../../repositories/Producer/implementations/UpdateAddress.service";
import { IUpdateAddress } from "./UpdateAddress.DTO";

@Injectable()
export class UpdateAddressService {
    constructor(
        private implementation:UpdateAddressImplementation,
    ){};

    async updated(data:IUpdateAddress){
        const sendData = await this.implementation.updateAddress(data);
        return sendData;
    };
};
