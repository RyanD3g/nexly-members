import { Module } from "@nestjs/common";
import { LoginProducerController } from "./LoginProducer.controller";
import { PrismaService } from "../../../database";
import { LoginProducerImplementation } from "src/repositories/Producer/implementations/LoginProducer.service"; 
import { LoginProducerService } from "./LoginProducer.service";

@Module({
    imports: [],
    controllers: [LoginProducerController],
    providers: [
        PrismaService,
        LoginProducerImplementation,
        LoginProducerService,
    ],
})
export class LoginProducerModule {};
