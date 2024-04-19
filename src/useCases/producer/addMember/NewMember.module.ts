import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { NewMemberController } from "./NewMember.controller";
import { PrismaService } from "src/database";
import { isSigned } from "src/middlewares/isSigned.middleware";
import { IsProducer } from "src/middlewares/isProducer.middleware";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";
import { NewMemberService } from "./NewMember.service";
import { NewMemberRepositorie } from "src/repositories/Producer/implementations/NewMember.service";

@Module({
    controllers: [NewMemberController],
    providers: [
        PrismaService,
        NewMemberRepositorie,
        NewMemberService,
        IsJwtMiddleware,
        IsProducer,
        isSigned,
    ],
})
export class NewMemberModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                IsJwtMiddleware,
                IsProducer,
                isSigned,
            ).forRoutes("create/member");
    };
};
