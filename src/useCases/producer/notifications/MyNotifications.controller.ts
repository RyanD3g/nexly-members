import { Body, Controller, Get, Request } from "@nestjs/common";
import { NotificationsService } from "./MyNotifications.service";
import { INotificationsProducerDTO } from "./MyNotifications.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('my')
export class NotificationsController {
    constructor(
        private service:NotificationsService,
    ){};

    @Get('notifications/producer')
    async notifications(
        @Body() body?:INotificationsProducerDTO,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
    ){
        const handle_read = await this.service.readNotifications({ producerId:req?.producerId || body.producerId, }, isTest);
        return handle_read;
    };
};
