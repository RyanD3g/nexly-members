import { Injectable } from "@nestjs/common";
import { AGetNotifications } from "../IGetMyNotifications.student";
import { Notifications_Students, Student } from "@prisma/client";
import { IMyNotificationsDTO } from "../../../useCases/students/getMyNotifications/MyNotifications.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class GetMyNotificationsImplementations implements AGetNotifications {
    constructor(
        private prisma:PrismaService,
    ){};
    async myNotifications(data: IMyNotificationsDTO): Promise<Student> {
        const getNotificationsNotRead = await this.prisma.student.findUnique({
            where:{ id:data.studentId },
            include: { notifications:true, },
        });
        const varrerNotifications = getNotificationsNotRead.notifications.map(value =>{
            return{
                id:value.id,
            }
        });
        const updateRead = await this.prisma.notifications_Students.updateMany({
            where:{ 
                id: { in: varrerNotifications.map(v => v.id) }
            },
            data:{
                read:true,
            },
        });
        return getNotificationsNotRead;
    };
};
