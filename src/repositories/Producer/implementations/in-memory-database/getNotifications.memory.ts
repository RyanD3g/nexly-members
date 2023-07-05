import * as dayjs from 'dayjs';
import { Notifications_Producer } from "@prisma/client";
import { INotificationsProducerDTO } from "../../../../useCases/producer/notifications/MyNotifications.DTO";
import { AGetMyNotificationsProducer } from "../../IGetMyNotifications.producer";
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsProducerInMemory implements AGetMyNotificationsProducer {
    private notificationsModel__InMemory: Notifications_Producer[] = [
    {
        id:'123',
        producerId:'456',
        title:'Exemplo de titulo',
        content:'Exemplo de conteúdo',
        isRead:false,
        timeLife:null,
        createdAt:new Date(),
        updatedAt:new Date(),
    },
    {
        id:'321',
        producerId:'456',
        title:'Exemplo de titulo 2',
        content:'Exemplo de conteúdo 2',
        isRead:true,
        timeLife:'2022-03-09',
        createdAt:new Date(),
        updatedAt:new Date(),
    },

]
    async getLifeByNotification(dateNow: string): Promise<Object> {
        const verify = await this.notificationsModel__InMemory.map(v =>{
            if(dayjs(dateNow, 'YYYY-MM-DD').diff(v.timeLife, 'day') >= 10 && v.isRead === true){
               const forDelete = this.notificationsModel__InMemory.indexOf(v);
               delete this.notificationsModel__InMemory[forDelete];
            };
        });
        return this.notificationsModel__InMemory;
    };
    async notifications(data: INotificationsProducerDTO): Promise<Notifications_Producer[]> {
        const filtred = await this.notificationsModel__InMemory.filter(
            e => e.producerId == data.producerId && e.isRead == false,
        );

        const maped = await filtred.map(n =>{
            if(n.isRead == false){
                n.isRead = true;
                n.timeLife = dayjs().format('YYYY-MM-DD');
            };
        });
        return filtred;
    };
};
