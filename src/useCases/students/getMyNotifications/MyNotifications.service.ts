import * as dayjs from 'dayjs';
import { Injectable } from "@nestjs/common";
import { GetMyNotificationsImplementations } from "../../../repositories/Student/implementations/GetMyNotifications.service";
import { GetMyNotificationsInMemory } from "../../../repositories/Student/implementations/in-memory-database/getMyNotifications.memory";
import { IMyNotificationsDTO } from "./MyNotifications.DTO";

@Injectable()
export class MyNotificationsService {
    constructor(
        private implementation:GetMyNotificationsImplementations,
        private inMemory:GetMyNotificationsInMemory,
    ){};

    async getNotifications(data:IMyNotificationsDTO, isTest:boolean){
        if(isTest){
            const geted = await this.inMemory.myNotifications(data);
            const forDelete = await this.inMemory.getLifeByNotification(dayjs().format('YYYY-MM-DD'), data.studentId);
            return geted;
        };
        const getedReal = await this.implementation.myNotifications(data);
        const forDelete = await this.implementation.getLifeByNotification(dayjs().format('YYYY-MM-DD'), data.studentId);
        return getedReal;
    };
};
