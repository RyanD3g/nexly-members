import { Body, Controller, Put, Request, Res, Response } from "@nestjs/common";
import { CreateDataForProducerService } from "./CreateData.service";
import { CustomRequest } from "src/interfaces/Request.interface";
import { IDataByProducer } from "./CreateData.DTO";

@Controller('create')
export class CreateDataForProducerController {
    constructor(
        private service:CreateDataForProducerService,
    ){};

    @Put('data/producer')
    async handle_create(
        @Body() body:IDataByProducer,
        @Request() req?:CustomRequest,
        ){
            const sendDataForInfra = await this.service.created({
                producerId:req.producerId,
                identity:body.identity,
                lastname:body.lastname,
                name:body.name,
                phone_number:body.phone_number,
                sex:body.sex,
            });

            return { register:'OK' };
    };
};
