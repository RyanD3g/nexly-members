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
        studentId:'456',
        createdAt:new Date(),
        updatedAt:new Date(),
    }];
    async myNotifications(data: IMyNotificationsDTO): Promise<Notifications_Students[]> {
        const filtredForNotificationsNotRead = this.myNotifications__InMemory.filter(value =>{
            return value.read == false;
        });
        const setRead = filtredForNotificationsNotRead.map(value =>{
            value.read = true;
        });
        return filtredForNotificationsNotRead;
    };
};
