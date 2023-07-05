import * as dayjs from 'dayjs';
import { Injectable } from "@nestjs/common";
import { NotificationsProducerImplementation } from "../../../repositories/Producer/implementations/Notifications.service";
import { NotificationsProducerInMemory } from "../../../repositories/Producer/implementations/in-memory-database/getNotifications.memory";
import { INotificationsProducerDTO } from "./MyNotifications.DTO";

@Injectable()
export class NotificationsService {
    constructor(
        private implementation:NotificationsProducerImplementation,
        private InMemory:NotificationsProducerInMemory,
    ){};

    async readNotifications(data:INotificationsProducerDTO, isTest:boolean){
        if(isTest){
            const myNotificationsInMemory = await this.InMemory.notifications(data);
            const deleteLeftReadInMemory = await this.InMemory.getLifeByNotification(dayjs().format('YYYY-MM-DD'));
            return myNotificationsInMemory;    
        };
        const myNotifications = await this.implementation.notifications(data);
        const deleteLeftRead = await this.implementation.getLifeByNotification(dayjs().format('YYYY-MM-DD'), data.producerId);
        return myNotifications;
    };
};
