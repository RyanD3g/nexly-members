import { Module } from "@nestjs/common";
import { RecoverPassProducerController } from "./RecoverPassProducer.controller";
import { PrismaService } from "src/database";
import { RecoverPassProducerImplementation } from "src/repositories/Producer/implementations/RecoverPass.service";
import { RecoverPassProducerService } from "./RecoverPassProducer.service";
import { MailProvider } from "src/providers/implementations/Mail.provider";
import { RegisterProducerImplementation } from "src/repositories/Producer/implementations/RegisterProducer.service";

@Module({
    imports: [],
    controllers: [RecoverPassProducerController],
    providers: [
        PrismaService,
        RecoverPassProducerImplementation,
        RecoverPassProducerService,
        MailProvider,
        RegisterProducerImplementation,
    ],
})
export class RecoverPassModuleProducer {};
