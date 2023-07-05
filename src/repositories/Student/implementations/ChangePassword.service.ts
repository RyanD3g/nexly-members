import { Injectable } from "@nestjs/common";
import { AChangePasswordStudent } from "../IChangePassword.student";
import { IChangePasswordDTO } from "src/useCases/students/changePassword/changePassword.DTO";
import { PrismaService } from "src/database";
import * as bcrypt from 'bcrypt';

@Injectable()
export class ChangePasswordImplementation implements AChangePasswordStudent {
    constructor(
        private prisma:PrismaService,
    ){};
    async changePassword(data: IChangePasswordDTO): Promise<Object> {
        const hash = await bcrypt.hash(data.confirmNewPassword, 16);
        const changed = await this.prisma.student.update({
            where:{ id:data.studentId },

            data:{
                password:hash
            }
        });
        await this.prisma.$disconnect();
        return { success:true };
    };
};
