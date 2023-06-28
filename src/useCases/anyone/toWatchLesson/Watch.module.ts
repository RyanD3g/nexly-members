import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { WatchLessonController } from "./Watch.controller";
import { PrismaService } from "src/database";
import { WatchLessonImplementation } from "src/repositories/anyone/implementations/WatchLesson.service";
import { WatchLessonService } from "./Watch.service";

@Module({
    imports: [],
    controllers: [WatchLessonController],
    providers: [
        PrismaService,
        WatchLessonImplementation,
        WatchLessonService,
    ],
})
export class WatchLessonModule {};
