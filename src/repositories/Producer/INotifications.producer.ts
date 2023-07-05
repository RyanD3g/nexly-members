import { Notifications_Producer } from "@prisma/client";
import { INotificationsProducerDTO } from "src/useCases/producer/notifications/MyNotifications.DTO";

export abstract class ANotifications {
    abstract getNotifications(data:INotificationsProducerDTO): Promise<Notifications_Producer[]>;
};
