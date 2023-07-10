import { Injectable } from "@nestjs/common";
import { AMailProvider, ISendMaler } from "../IMail.provider";
import Mail from 'nodemailer/lib/mailer';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailProvider implements AMailProvider {

    private mailer:Mail;

    constructor(){
        this.mailer = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "42d208b3a801ae",
              pass: "005550058319c0"
            },
        });
    };
    async sendCodeForMail(dataEmail: ISendMaler): Promise<void> {
        await this.mailer.sendMail({
            to:{
                name: dataEmail.to.name,
                address: dataEmail.to.address,
            },
            from:{
                name: dataEmail.from.name,
                address: dataEmail.from.address,
            },
            subject: dataEmail.subject,
            html: dataEmail.html,
        });
    };
};
