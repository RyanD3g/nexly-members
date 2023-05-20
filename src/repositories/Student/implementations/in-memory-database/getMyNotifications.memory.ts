import * as dayjs from 'dayjs';
import { Injectable } from "@nestjs/common";
import { AGetNotifications } from "../../IGetMyNotifications.student";
import { Notifications_Students } from "@prisma/client";
import { IMyNotificationsDTO } from "../../../../useCases/students/getMyNotifications/MyNotifications.DTO";

@Injectable()
export class GetMyNotificationsInMemory implements AGetNotifications {
    private myNotifications__InMemory: Notifications_Students[] = [{
        id:'123',
        title:'Teste de notificação',
        content:'Teste de conteúdo',
        read:false,
        timeLife:'10/20/1023',
        studentId:'456',
        createdAt:new Date(),
        updatedAt:new Date(),
    }];
    async getLifeByNotification(dateNow: string, studentId: string): Promise<Object> {
        const verify = await this.myNotifications__InMemory.map(v =>{
            if(dayjs(dateNow, 'DD/MM/YYYY').diff(v.timeLife, 'day') >= 10 && v.read === true){
               const forDelete = this.myNotifications__InMemory.indexOf(v);
               delete this.myNotifications__InMemory[forDelete];
            };
        });
        return this.myNotifications__InMemory;
    }
    async myNotifications(data: IMyNotificationsDTO): Promise<Notifications_Students[]> {
        const filtredForNotificationsNotRead = this.myNotifications__InMemory.filter(value =>{
            return value.read == false && value.studentId == data.studentId;
        });
        const setRead = filtredForNotificationsNotRead.map(value =>{
            value.read = true;
        });
        return filtredForNotificationsNotRead;
    };
};
