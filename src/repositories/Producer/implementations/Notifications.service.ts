import * as dayjs from 'dayjs';
import { INotificationsProducerDTO } from "../../../useCases/producer/notifications/MyNotifications.DTO";
import { AGetMyNotificationsProducer } from "../IGetMyNotifications.producer";
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database';

@Injectable()
export class NotificationsProducerImplementation implements AGetMyNotificationsProducer {
    constructor(
        private prisma:PrismaService,
    ){};
    async getLifeByNotification(dateNow: string, producerId:string): Promise<Object> {
        const allNotifications = await this.prisma.producer.findUnique({
            where:{ id:producerId, },
            include:{ notifications:true, },
        });
        const verify = await allNotifications.notifications.map(async v =>{
            if(dayjs(dateNow, 'YYYY-MM-DD').diff(v.timeLife, 'day') >= 10 && v.isRead === true){
               const forDelete = await this.prisma.notifications_Producer.delete({
                    where:{ id:v.id },
               });
            };
        });
        return { deleted:true, };
    };
    async notifications(data: INotificationsProducerDTO){
        const filtred = await this.prisma.producer.findUnique({
            where:{ id:data.producerId, },
            include:{ notifications:true },
        });

        const maped = await filtred.notifications.map(async n =>{
            if(n.isRead == false){
                await this.prisma.notifications_Producer.update({
                    where:{ id:n.id },
                    data:{
                        isRead:true,
                        timeLife:dayjs().format('YYYY-MM-DD'),
                    },
                });
            }
        });
        return filtred;
    };
};
