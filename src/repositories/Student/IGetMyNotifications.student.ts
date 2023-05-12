import { Notifications_Students, Student } from "@prisma/client";
import { IMyNotificationsDTO } from "src/useCases/students/getMyNotifications/MyNotifications.DTO";

export abstract class AGetNotifications {
    abstract myNotifications(data:IMyNotificationsDTO): Promise<Notifications_Students[] | Student>;
};
