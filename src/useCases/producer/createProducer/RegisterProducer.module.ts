import { Module } from "@nestjs/common";
import { RegisterProducerController } from "./RegisterProducer.controller";
import { PrismaService } from "src/database";
import { RegisterProducerImplementation } from "src/repositories/Producer/implementations/RegisterProducer.service";
import { RegisterProducerService } from "./RegisterProducer.service";

@Module({
    imports: [],
    controllers: [RegisterProducerController],
    providers: [
        PrismaService,
        RegisterProducerImplementation,
        RegisterProducerService,
    ]
})
export class RegisterProducerModule {};
