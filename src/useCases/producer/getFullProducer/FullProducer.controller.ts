import { Controller, Get, Request } from "@nestjs/common";
import { getDataAndValidateFullProducerService } from "./FullProducer.service";
import { CustomRequest } from "../../../interfaces/Request.interface";

@Controller('profile')
export class getDataFullProducerController {
    constructor(
        private service:getDataAndValidateFullProducerService,
    ){};

    @Get('producer/all')
    async getFullProducer(@Request() req?:CustomRequest){
        try {
            const geted = await this.service.validate_and_get({
                producerId:req.producerId,
            });
            return geted;
        } catch (error) {
            return error;          
        };
    };
};
