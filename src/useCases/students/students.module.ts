import { Module } from "@nestjs/common";
import { RegisterStudentModule } from "./createStudent/RegisterStudent.module";
import { LoginStudentModule } from "./loginStudent/LoginStudent.module";
import { RecoverPassModule } from "./recoverPass/RecoverPassStudent.module";
import { ValidateCodeAndDateModule } from "./validateCode/ValidateCode.module";
import { ChangePasswordModule } from "./changePassword/changePassword.module";
import { CreateDataStudentModule } from "./createDataForRegister/CreateData.module";
import { BuyCourseModule } from "./BuyCourse/BuyCourse.module";
import { CommentInLessonModule } from "./CommentInACourse/Comments.module";
import { ChangeFavoriteModule } from "./changeFavoriteLesson/ChangeFavorite.module";
import { ChangeTagsModule } from "./changeTags/ChangeTags.module";
import { CompleteCourseModule } from "./courseComplete/CourseComplete.module";
import { CreateAddressModule } from "./createAddress/CreateAddress.module";
import { CreateAPostModule } from "./createPost/CreatePost.module";
import { CreateTicketModule } from "./createTicket/CreateTicket.module";
import { MyCourseModule } from "./getCoursesByStudent/myCourse.module";
import { GetFullStudentDataModule } from "./getFullStudent/FullStudent.module";
import { GetEventsModel } from "./getMyEventsSaved/GetEvents.module";
import { MyNotificationsModule } from "./getMyNotifications/MyNotifications.module";
import { GiveLikeModule } from "./giveLike/GiveLike.module";
import { CertificateModule } from "./myCertificate/Certificate.module";
import { TicketsAndRoomModule } from "./myTicketsAndRoom/TicketsAndRoom.module";
import { SaveEventModule } from "./saveEventsScheduled/SaveEvents.module";
import { SearchCourseModule } from "./searchByCourse/SearchCourse.module";
import { DeleteAccountStudentModule } from "./setDateForDelete/DeleteAccount.module";
import { UnfavoriteModule } from "./unfavoriteLesson/Unfavorite.module";
import { UpdateAddressModule } from "./updateAddress/UpdateAddress.module";
import { ProfileImageModule } from "./uploadImageProfile/ProfileImage.module";

@Module({
    imports:[
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
    ],
})
export class StudentsModule {};
