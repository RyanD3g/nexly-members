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
            return geted;
        };
        const getedReal = await this.implementation.myNotifications(data);
        return getedReal;
    };
};
