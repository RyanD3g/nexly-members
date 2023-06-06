import { Module } from "@nestjs/common";
import { PrismaService } from "src/database";
import { ToWatchLessonImplementation } from "src/repositories/anyone/implementations/ToWatchLesson.service";
import { ToWatchLessonService } from "./toWatchLesson.service";
import { StreamLessonProvider } from "src/providers/implementations/StreamLesson.service";
import { ToWatchLessonController } from "./toWatchLesson.controller";

@Module({
    imports: [],
    controllers: [ToWatchLessonController],
    providers:[
        PrismaService,
        ToWatchLessonImplementation,
        ToWatchLessonService,
        StreamLessonProvider,
    ],
})
export class ToWatchLessonModule {};
