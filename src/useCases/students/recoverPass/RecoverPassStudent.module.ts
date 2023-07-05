import { Module } from "@nestjs/common";
import { RecoverPassStudentController } from "./RecoverPassStudent.controller";
import { PrismaService } from "src/database";
import { RecoverPassStudentImplementation } from "src/repositories/Student/implementations/RecoverPass.service";
import { RecoverPassStudentService } from "./RecoverPassStudent.service";
import { MailProvider } from "src/providers/implementations/Mail.provider";
import { RegisterStudentImplementation } from "src/repositories/Student/implementations/RegisterStudent.service";

@Module({
    imports: [],
    controllers: [RecoverPassStudentController],
    providers: [
        PrismaService,
        RecoverPassStudentImplementation,
        RecoverPassStudentService,
        MailProvider,
        RegisterStudentImplementation,
    ],
})
export class RecoverPassModule {};
