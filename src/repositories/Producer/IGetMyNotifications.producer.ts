import { Notifications_Producer, Producer } from '@prisma/client';
import { INotificationsProducerDTO } from '../../useCases/producer/notifications/MyNotifications.DTO';

export abstract class AGetMyNotificationsProducer {
    abstract getLifeByNotification(hour:string, producerId:string): Promise<Object>;
    abstract notifications(data:INotificationsProducerDTO);
};
