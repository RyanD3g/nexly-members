import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ARecoverPassStudent } from "../IRecoverPass.student";
import { IRecoverDto } from "../../../useCases/students/recoverPass/RecoverPassStudent.DTO";
import { PrismaService } from "../../../database";
import { RegisterStudentImplementation } from "./RegisterStudent.service";
import { MailProvider } from "../../../providers/implementations/Mail.provider";
import { recoverPass_template } from "../../../utils/templatesForEmail";

@Injectable()
export class RecoverPassStudentImplementation implements ARecoverPassStudent {
    constructor(
        private prisma:PrismaService,
        private findByEmail:RegisterStudentImplementation,
        private mailProvider:MailProvider,
    ){};
    async sendEmail({ email, code, codeDate }: IRecoverDto): Promise<Object> {
        const findForEmail = await this.findByEmail.findByEmal(email);
        if(findForEmail == null){
            throw new HttpException('Email inexistente!', HttpStatus.BAD_REQUEST);
        };

        const saveInformations = await this.prisma.student.update({
            where:{ email:findForEmail.email },

            data:{
                code,
                codeDate,
            },
        });

        const sendMail = await this.mailProvider.sendCodeForMail({
            to:{
                name: saveInformations.name,
                address: email,
            },
            from:{
                name: 'Código de recuperação de senha',
                address: 'suportenexly@nexly.com',
            },
            subject: 'Código de segurança',
            html: recoverPass_template(code),
        });
        await this.prisma.$disconnect();
        return { sended:true };
    };
};
