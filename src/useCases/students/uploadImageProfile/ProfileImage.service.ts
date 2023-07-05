import { Injectable } from "@nestjs/common";
import { ProfileImageStudentImplementation } from "../../../repositories/Student/implementations/ProfileImageStudent.service";
import { IProfileImageDTO } from "./ProfileImage.DTO";

@Injectable()
export class ProfileImageStudentService {
    constructor(
        private implementation:ProfileImageStudentImplementation,
    ){};

    async uploadedPhotos(data:IProfileImageDTO){
        const uploaded = await this.implementation.uploadProfile(data);
        return uploaded;
    };
};
