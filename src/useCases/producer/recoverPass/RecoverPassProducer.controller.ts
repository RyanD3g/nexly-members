import { Body, Controller, Post } from "@nestjs/common";
import { RecoverPassProducerService } from "./RecoverPassProducer.service";
import { IRecoverDto } from "./RecoverPassProducer.DTO";

@Controller('recoverPass')
export class RecoverPassProducerController {
    constructor(
        private sevice:RecoverPassProducerService,
    ){};

    @Post('producer')
    async handle_recover(@Body() body:IRecoverDto){
        try {
            const sendedRecover = await this.sevice.sendedEmail(body);
            return sendedRecover;
        } catch (error) {
            return error;
        };
    };
};
