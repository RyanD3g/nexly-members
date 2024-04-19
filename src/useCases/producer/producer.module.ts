import { Module } from "@nestjs/common";
import { LoginOAuthModule } from './OAuth/LoginOauth.module';
import { ReturnItemsPlaylistModel } from './returnItemsPlaylists/returnItems.module';
import { NewMemberModule } from './addMember/NewMember.module';
import { CreateEventScheluledModule } from './createEventScheduled/CreateEvent.module';
import { RegisterProducerModule } from './createProducer/RegisterProducer.module';
import { LoginProducerModule } from './loginProducer/LoginProducer.module';
import { RecoverPassModuleProducer } from './recoverPass/RecoverPassProducer.module';
import { ValidateCodeAndDateModuleProducer } from './validateCode/ValidateCode.module';
import { CreateAddressModuleProducer } from './createAddress/CreateAddress.module';
import { UpdateAddressModuleProducer } from './updateAddress/UpdateAddress.module';
import { ProfileImageModuleProducer } from './uploadImageProfile/ProfileImage.module';
import { GetFullProducerDataModule } from './getFullProducer/FullProducer.module';
import { CreateDataProducerModule } from './createDataForRegister/CreateData.module';
import { CreateModuleCourseModule } from './createModulesForACourse/CreateModule.module';
import { CreateCourseModule } from './createACourse/CreateCourse.module';
import { CreateLessonModule } from './createLesson/CreateLesson.module';
import { NotificationsModule } from './notifications/MyNotifications.module';
import { DeleteCourseModel } from './deleteCourse/DeleteCourse.module';
import { CancelDeleteCourseModule } from './cancelDeleteCourse/CancelDelete.module';
import { DeleteAccountModule } from './deleteAccount/DeleteAccount.module';
import { AddMaterialModule } from './addMaterialInLesson/AddMaterial.module';
import { DeleteMaterialModule } from './deleteMaterial/DeleteMaterialLesson.module';
import { SwapLessonModule } from './swapLesson/SwapLesson.module';
import { CreatePollModule } from './CreatePoll/CreatePoll.module';
import { CreateAPostProducerModule } from './createPost/CreatePost.module';
import { AllRoomsModule } from './roomsProducer/AllRooms.module';
import { NewChatModule } from './responseTicket/NewChat.module';


@Module({
    imports:[
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
    DeleteCourseModel,
    CancelDeleteCourseModule,
    AddMaterialModule,
    DeleteMaterialModule,
    SwapLessonModule,
    DeleteAccountModule,
    AllRoomsModule,
    NewChatModule,
    CreateAPostProducerModule,
    CreatePollModule,
    CreateEventScheluledModule,
    LoginOAuthModule,
    ReturnItemsPlaylistModel,
    NewMemberModule,
    ]
})
export class ProducerModules {};