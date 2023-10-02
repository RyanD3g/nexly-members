import { Body, Controller, Post, Put, Request } from "@nestjs/common";
import { CreateAddressService } from "./CreateAddress.service";
import { IAddressByProducer } from "./CreateAddress.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('create')
export class AddressCreateController {
    constructor(
        private service:CreateAddressService,
    ){};

    @Post('address/producer')
    async createAddress(@Body() body:IAddressByProducer, @Request() req?:CustomRequest){
            const createAddressForProducer = await this.service.created({
                city:body.city,
                codeStreet:body.codeStreet,
                complement:body.complement,
                number:body.number,
                street:body.street,
                uf:body.uf,
                producerId:req.producerId,
            });
            return createAddressForProducer;
    };
};
