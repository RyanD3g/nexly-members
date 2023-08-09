import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CreatePollAndOptionController } from "./CreatePoll.controller";
import { PrismaService } from "src/database";
import { CreateNewPollOrAddNewOptionForPoll } from "./CreatePoll.service";
import { CreatePollAndOptionImplementation } from "src/repositories/Producer/implementations/CreateNewPoll.service";
import { CreatePollAndAddOneQuestionOptionalInMemory } from "src/repositories/Producer/implementations/in-memory-database/createPoll.memory";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { isSigned } from "src/middlewares/isSigned.middleware";

@Module({
    controllers: [CreatePollAndOptionController],
    providers:[
        PrismaService,
        CreateNewPollOrAddNewOptionForPoll,
        CreatePollAndOptionImplementation,
        CreatePollAndAddOneQuestionOptionalInMemory,
        IsProducer,
        IsJwtMiddleware,
        isSigned,
    ],
})
export class CreatePollModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                IsProducer,
                IsJwtMiddleware,
                isSigned,
            )
                .forRoutes('create/poll', 'create/option');
    };
};
