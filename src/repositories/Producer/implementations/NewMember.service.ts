import { Injectable } from "@nestjs/common";
import { ANewMember } from "../INewMember.producer";
import { PrismaService } from "src/database";
import { INewMemberDTO } from "src/useCases/producer/addMember/NewMember.DTO";
import { Courses_Producer, Student } from "@prisma/client";

@Injectable()
export class NewMemberRepositorie implements ANewMember {
    constructor(
        private prisma:PrismaService,
    ){};
    async memberExists(email: string): Promise<Student | void> {
        const userExists = await this.prisma.student.findUnique({
            where:{ email, },
        });
        return userExists;
    }
    async createNewMember({ courseId, idendidty, name, emailUser, typeUser, idUser }: Partial<INewMemberDTO>): Promise<Courses_Producer> {
        const createNewMember = await this.prisma.courses_Producer.update({
            where:{
                id:courseId,
            },
            data:{
                members:{
                    create:{
                        stateUser:typeUser,
                        cpfUser:idendidty,
                        nameUser:name,
                        idUser,
                        emailUser,
                    }
                },
            }
        });
        return createNewMember;
    };
};
