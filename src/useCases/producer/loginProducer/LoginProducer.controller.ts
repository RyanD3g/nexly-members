import { Body, Controller, Post } from "@nestjs/common";
import { ILoginProducer } from "./LoginProducer.DTO";
import { LoginProducerService } from "./LoginProducer.service";

@Controller('producer')
export class LoginProducerController {
    constructor(
        private service:LoginProducerService,
    ){};

    @Post('login')
    async handle_login(@Body() body:ILoginProducer){
        try {
            const loginProducer = await this.service.handleUp_data_for_Repository(body);
            return loginProducer;
        } catch (error) {
            return error;
        };
    };
};
