import { Body, Controller, Param, Put, Request } from "@nestjs/common";
import { CustomRequest } from "../../../interfaces/Request.interface";
import { UpdateAddressService } from "./UpdateAddress.service";
import { IUpdateAddress } from "./UpdateAddress.DTO";

@Controller('update')
export class AddressUpdateController {
    constructor(
        private service:UpdateAddressService,
    ){};

    @Put('address/student/:addressId')
    async updateAddress(
        @Body() body:IUpdateAddress, 
        @Param('addressId') addressId?:string,
        @Request() req?:CustomRequest,
        ){
        try {
            const UpdateAddressForStudent = await this.service.updated({
                city:body.city,
                codeStreet:body.codeStreet,
                complement:body.complement,
                number:body.number,
                street:body.street,
                uf:body.uf,
                studentId:req.studentId,
                addressId,
            });
            return UpdateAddressForStudent;
        } catch (error) {
            return error;
        };
    };
};
