import { Module } from '@nestjs/common';
import { RegisterStudentModule } from './useCases/students/createStudent/RegisterStudent.module';
import { LoginStudentModule } from './useCases/students/loginStudent/LoginStudent.module';
import { RecoverPassModule } from './useCases/students/recoverPass/RecoverPassStudent.module';
import { ValidateCodeAndDateModule } from './useCases/students/validateCode/ValidateCode.module';
import { ChangePasswordModule } from './useCases/students/changePassword/changePassword.module';
import { CreateDataStudentModule } from './useCases/students/createDataForRegister/CreateData.module';
import { ProfileImageModule } from './useCases/students/uploadImageProfile/ProfileImage.module';
import { ChangeTagsModule } from './useCases/students/changeTags/ChangeTags.module';
import { CreateAddressModule } from './useCases/students/createAddress/CreateAddress.module';
import { GetFullStudentDataModule } from './useCases/students/getFullStudent/FullStudent.module';
import { UpdateAddressModule } from './useCases/students/updateAddress/UpdateAddress.module';
import { RegisterProducerModule } from './useCases/producer/createProducer/RegisterProducer.module';
import { LoginProducerModule } from './useCases/producer/loginProducer/LoginProducer.module';
import { RecoverPassModuleProducer } from './useCases/producer/recoverPass/RecoverPassProducer.module';
import { ValidateCodeAndDateModuleProducer } from './useCases/producer/validateCode/ValidateCode.module';
import { CreateAddressModuleProducer } from './useCases/producer/createAddress/CreateAddress.module';
import { UpdateAddressModuleProducer } from './useCases/producer/updateAddress/UpdateAddress.module';
import { ProfileImageModuleProducer } from './useCases/producer/uploadImageProfile/ProfileImage.module';
import { GetFullProducerDataModule } from './useCases/producer/getFullProducer/FullProducer.module';
import { CreateDataProducerModule } from './useCases/producer/createDataForRegister/CreateData.module';
import { CreateModuleCourseModule } from './useCases/producer/createModulesForACourse/CreateModule.module';
import { CreateCourseModule } from './useCases/producer/createACourse/CreateCourse.module';
import { CreateLessonModule } from './useCases/producer/createLesson/CreateLesson.module';
import { GetAllCoursesModule } from './useCases/producer/getAllCourse/getAllCourse.module';
import { BuyCourseModule } from './useCases/students/BuyCourse/BuyCourse.module';
import { MyCourseModule } from './useCases/students/getCoursesByStudent/myCourse.module';
import { ChangeFavoriteModule } from './useCases/students/changeFavoriteLesson/ChangeFavorite.module';
import { MyNotificationsModule } from './useCases/students/getMyNotifications/MyNotifications.module';
import { GiveLikeModule } from './useCases/students/giveLike/GiveLike.module';
import { SearchCourseModule } from './useCases/students/searchByCourse/SearchCourse.module';
import { NotificationsModule } from './useCases/producer/notifications/MyNotifications.module';

@Module({
  imports: [
    //Student Modules
    RegisterStudentModule,
    LoginStudentModule,
    RecoverPassModule,
    ValidateCodeAndDateModule,
    ChangePasswordModule,
    CreateDataStudentModule,
    ProfileImageModule,
    ChangeTagsModule,
    CreateAddressModule,
    GetFullStudentDataModule,
    UpdateAddressModule,
    BuyCourseModule,
    MyCourseModule,
    ChangeFavoriteModule,
    MyNotificationsModule,
    GiveLikeModule,
    SearchCourseModule,

    //Producer Modules 
    RegisterProducerModule,
    LoginProducerModule,
    RecoverPassModuleProducer,
    ValidateCodeAndDateModuleProducer,
    CreateAddressModuleProducer,
    UpdateAddressModuleProducer,
    ProfileImageModuleProducer,
    GetFullProducerDataModule,
    CreateDataProducerModule,
    CreateCourseModule,
    CreateModuleCourseModule,
    CreateLessonModule,
    NotificationsModule,

    //Outers modules
    GetAllCoursesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {};
