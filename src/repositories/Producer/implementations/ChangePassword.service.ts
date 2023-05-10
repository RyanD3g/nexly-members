import { Injectable } from "@nestjs/common";
import { AChangePasswordProducer } from "../IChangePassword.producer";
import { IChangePasswordDTO } from "../../../useCases/producer/changePassword/changePassword.DTO";
import { PrismaService } from "../../../database";
import * as bcrypt from 'bcrypt';

@Injectable()
export class ChangePasswordImplementation implements AChangePasswordProducer {
    constructor(
        private prisma:PrismaService,
    ){};
    async changePassword(data: IChangePasswordDTO): Promise<Object> {
        const hash = await bcrypt.hash(data.confirmNewPassword, 16);
        const changed = await this.prisma.student.update({
            where:{ id:data.producerId },

            data:{
                password:hash
            }
        });
        await this.prisma.$disconnect();
        return { success:true };
    };
};
