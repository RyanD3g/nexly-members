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

@Module({
  imports: [
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {};
