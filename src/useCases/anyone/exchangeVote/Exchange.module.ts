import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ExchangeVoteController } from "./Exchange.controller";
import { PrismaService } from "src/database";
import { ExchangeVoteImplementation } from "src/repositories/anyone/implementations/ExchangeVote.service";
import { ExchangeVoteInMemory } from "src/repositories/anyone/implementations/in-memory-database/exchangeVote.memory";
import { ExchangeVoteService } from "./Exchange.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    controllers: [ExchangeVoteController],
    providers: [
        PrismaService,
        ExchangeVoteImplementation,
        ExchangeVoteInMemory,
        ExchangeVoteService,
        IsJwtMiddleware,
    ],
})
export class ExchangeModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
                .forRoutes('exchange/option')
    };
};
