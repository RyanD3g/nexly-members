import { Notifications_Students, Student } from "@prisma/client";
import { IMyNotificationsDTO } from "src/useCases/students/getMyNotifications/MyNotifications.DTO";

export abstract class AGetNotifications {
    abstract getLifeByNotification(hour:string, studentId:string): Promise<Object>;
    abstract myNotifications(data:IMyNotificationsDTO): Promise<Notifications_Students[] | Student>;
};
