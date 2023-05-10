import { Body, Controller, Post } from "@nestjs/common";
import { RegisterProducerService } from "./RegisterProducer.service";
import { IRegisterProducer } from "./RegisterProducer.DTO";

@Controller('producer')
export class RegisterProducerController {
    constructor(
        private service:RegisterProducerService,
    ){};

    @Post('register')
    async createProducer(@Body() body:IRegisterProducer){
        try{
            const created = await this.service.createProducerInDataBase(body);
            return created;
        }catch(error){
            return error;
        };
    };
};
