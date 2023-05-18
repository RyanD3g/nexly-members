import { Notifications_Producer } from "@prisma/client";
import { INotificationsDTO } from "src/useCases/producer/notifications/MyNotifications.DTO";

export abstract class ANotifications {
    abstract getNotifications(data:INotificationsDTO): Promise<Notifications_Producer[]>;
};
