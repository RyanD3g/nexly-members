import { Body, Controller, Get, Request } from "@nestjs/common";
import { MyNotificationsService } from "./MyNotifications.service";
import { IMyNotificationsDTO } from "./MyNotifications.DTO";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('my')
export class MyNotificationsController {
    constructor(
        private service:MyNotificationsService,
    ){};

    @Get('notifications/student')
    async geted(
        @Body() body:IMyNotificationsDTO,
        isTest:boolean = false,
        @Request() req?:CustomRequest,
    ){
        const getNewsNotifications = await this.service.getNotifications({
            studentId:req?.studentId,
        }, isTest);
        return getNewsNotifications;
    };
};
