import { Body, Controller, Put, Request } from "@nestjs/common";
import { CreateAddressService } from "./CreateAddress.service";
import { IAddressByStudent } from "./CreateAddress.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('create')
export class AddressCreateController {
    constructor(
        private service:CreateAddressService,
    ){};

    @Put('address/student')
    async createAddress(@Body() body:IAddressByStudent, @Request() req?:CustomRequest){
            const createAddressForStudent = await this.service.created({
                city:body.city,
                codeStreet:body.codeStreet,
                complement:body.complement,
                number:body.number,
                street:body.street,
                uf:body.uf,
                studentId:req.studentId,
            });
            return createAddressForStudent;
    };
};
