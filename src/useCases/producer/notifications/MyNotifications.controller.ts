import { Body, Controller, Get } from "@nestjs/common";
import { NotificationsService } from "./MyNotifications.service";
import { INotificationsProducerDTO } from "./MyNotifications.DTO";

@Controller('my')
export class NotificationsController {
    constructor(
        private service:NotificationsService,
    ){};

    @Get('notifications/producer')
    async notifications(
        @Body() body:INotificationsProducerDTO,
        isTest:boolean = false,
    ){
        const handle_read = await this.service.readNotifications({ producerId:body.producerId, }, isTest);
        return handle_read;
    };
};
