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
import { CommentInLessonModule } from './useCases/students/CommentInACourse/Comments.module';
import { ReplyCommentModule } from './useCases/producer/replyComment/ReplyComment.module';
import { LikeCOmmentModule } from './useCases/anyone/likeAComment/Like.module';
import { CertificateModule } from './useCases/students/myCertificate/Certificate.module';
import { CompleteCourseModule } from './useCases/students/courseComplete/CourseComplete.module';
import { DeleteCourseModel } from './useCases/producer/deleteCourse/DeleteCourse.module';
import { CancelDeleteCourseModule } from './useCases/producer/cancelDeleteCourse/CancelDelete.module';
import { DeleteAccountModule } from './useCases/producer/deleteAccount/DeleteAccount.module';
import { DeleteAccountStudentModule } from './useCases/students/setDateForDelete/DeleteAccount.module';
import { AddMaterialModule } from './useCases/producer/addMaterialInLesson/AddMaterial.module';
import { DeleteMaterialModule } from './useCases/producer/deleteMaterial/DeleteMaterialLesson.module';
import { SwapLessonModule } from './useCases/producer/swapLesson/SwapLesson.module';
import { UnfavoriteModule } from './useCases/students/unfavoriteLesson/Unfavorite.module';
import { CreateTicketModule } from './useCases/students/createTicket/CreateTicket.module';
import { WatchLessonModule } from './useCases/anyone/toWatchLesson/Watch.module';
import { NewChatModule } from './useCases/producer/responseTicket/NewChat.module';
import { ReturnTicketModule } from './useCases/anyone/returnAllTickets/ReturnTickets.module';
import { AllRoomsModule } from './useCases/producer/roomsProducer/AllRooms.module';
import { SendAndGetMessagesModule } from './useCases/anyone/sendMessageAndGetMessagesByRoom/SendAndGetMessages.module';
import { TicketsAndRoomModule } from './useCases/students/myTicketsAndRoom/TicketsAndRoom.module';
import { CreateAPostModule } from './useCases/students/createPost/CreatePost.module';
import { CreateAPostProducerModule } from './useCases/producer/createPost/CreatePost.module';
import { DeletePostModule } from './useCases/anyone/deletePost/DeletePost.module';
import { ToShareModule } from './useCases/anyone/toShare/ToShare.module';
import { CommentInPostModule } from './useCases/anyone/commentInPost/Comment.module';
import { CreatePollModule } from './useCases/producer/CreatePoll/CreatePoll.module';
import { AllPostsAndPollsModule } from './useCases/anyone/returnAllPostsAndPolls/All.module';
import { LikeAPostModule } from './useCases/anyone/likeAPost/LikePost.module';
import { VoteInPollModule } from './useCases/anyone/voteInPoll/Vote.module';
import { ExchangeModule } from './useCases/anyone/exchangeVote/Exchange.module';
import { DeleteCommentInPostModule } from './useCases/anyone/deleteOneCommentInPost/DeleteComment.module';
import { DeleteReplyCommentModule } from './useCases/anyone/deleteReplyComment/DeleteReply.module';
import { CreateEventScheluledModule } from './useCases/producer/createEventScheduled/CreateEvent.module';
import { AsyncLocalStorage } from 'async_hooks';
import { GetEventsModel } from './useCases/students/getMyEventsSaved/GetEvents.module';
import { ReturnAllEventsModule } from './useCases/anyone/allEvents/AllEvents.module';
import { SaveEventModule } from './useCases/students/saveEventsScheduled/SaveEvents.module';

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
    CommentInLessonModule,
    CertificateModule,
    CompleteCourseModule,
    DeleteAccountStudentModule,
    UnfavoriteModule,
    CreateTicketModule,
    TicketsAndRoomModule,
    CreateAPostModule,
    SaveEventModule,
    GetEventsModel,

    // //Producer Modules 

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

    //Outers modules

    GetAllCoursesModule,
    ReplyCommentModule,
    LikeCOmmentModule,
    WatchLessonModule,
    ReturnTicketModule,
    SendAndGetMessagesModule,
    DeletePostModule,
    ToShareModule,
    CommentInPostModule,
    AllPostsAndPollsModule,
    LikeAPostModule,
    VoteInPollModule,
    ExchangeModule,
    DeleteCommentInPostModule,
    DeleteReplyCommentModule,
    ReturnAllEventsModule,
    
  ],
})
export class AppModule {};
