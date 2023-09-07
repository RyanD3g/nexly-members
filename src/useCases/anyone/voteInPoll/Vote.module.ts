import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AlsModule } from "src/als.module";
import { VoteInPollController } from "./Vote.controller";
import { PrismaService } from "src/database";
import { VoteInPollImplementation } from "src/repositories/anyone/implementations/VoteInPoll.service";
import { VoteInPollInMemory } from "src/repositories/anyone/implementations/in-memory-database/voteInPoll.memory";
import { VoteInPollService } from "./Vote.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { UserIdContext } from "src/contexts/userId.context";

@Module({
    controllers: [VoteInPollController],
    providers: [
        PrismaService,
        VoteInPollImplementation,
        VoteInPollInMemory,
        VoteInPollService,
        IsJwtMiddleware, 
    ],
})
export class VoteInPollModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('vote/poll');
    };
};
