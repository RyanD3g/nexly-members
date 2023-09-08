import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { configsMulterStudentImages } from '../../../middlewares/uploadImages.middleware';
import { ProfileImageStudentController } from "./ProfileImage.controller";
import { PrismaService } from "src/database";
import { ProfileImageStudentImplementation } from "src/repositories/Student/implementations/ProfileImageStudent.service";
import { ProfileImageStudentService } from "./ProfileImage.service";
import { IsJwtMiddleware } from "src/middlewares/isJwt.middleware";

@Module({
    imports: [
        MulterModule.registerAsync({
            useFactory: ()=> (configsMulterStudentImages),
        }),
    ],
    controllers:[ProfileImageStudentController],
    providers: [
        PrismaService,
        ProfileImageStudentImplementation,
        ProfileImageStudentService,
        MulterModule,
        IsJwtMiddleware,
    ],
})
export class ProfileImageModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(IsJwtMiddleware)
            .forRoutes('upload/image/profile/student')
    };
};
