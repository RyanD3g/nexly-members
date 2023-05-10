import { Body, Controller, Put, Request } from "@nestjs/common";
import { CreateDataForProducerService } from "./CreateData.service";
import { CustomRequest } from "src/interfaces/Request.interface";
import { IDataByProducer } from "./CreateData.DTO";

@Controller('create')
export class CreateDataForProducerController {
    constructor(
        private service:CreateDataForProducerService,
    ){};

    @Put('data/producer')
    async handle_create(@Body() body:IDataByProducer, @Request() req?:CustomRequest){
        try {
            const sendDataForInfra = await this.service.created({
                producerId:req.producerId,
                identity:body.identity,
                lastname:body.lastname,
                name:body.name,
                phone_number:body.phone_number,
                sex:body.sex,
            });

            return sendDataForInfra;
        } catch (error) {
            return error;
        };
    };
};
