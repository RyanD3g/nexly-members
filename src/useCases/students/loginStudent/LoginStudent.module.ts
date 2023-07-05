import { Module } from "@nestjs/common";
import { LoginStudentController } from "./LoginStudent.controller";
import { PrismaService } from "../../../database";
import { LoginStudentImplementation } from "../../../repositories/Student/implementations/LoginStudent.service";
import { LoginStudentService } from "./LoginStudent.service";

@Module({
    imports: [],
    controllers: [LoginStudentController],
    providers: [
        PrismaService,
        LoginStudentImplementation,
        LoginStudentService,
    ],
})
export class LoginStudentModule {};
