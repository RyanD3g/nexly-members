import { Module } from "@nestjs/common";
import { RegisterStudentController } from "./RegisterStudent.controller";
import { PrismaService } from "src/database";
import { RegisterStudentImplementation } from "src/repositories/Student/implementations/RegisterStudent.service";
import { RegisterStudentService } from "./RegisterStudent.service";

@Module({
    imports: [],
    controllers: [RegisterStudentController],
    providers: [
        PrismaService,
        RegisterStudentImplementation,
        RegisterStudentService,
    ]
})
export class RegisterStudentModule {};
