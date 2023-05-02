import { IProfileImageDTO } from "src/useCases/students/uploadImageProfile/ProfileImage.DTO";

export abstract class AProfileImage {
    abstract uploadProfile(data:IProfileImageDTO): Promise<Object>;
    abstract updateImageProfile(data:IProfileImageDTO): Promise<Object>;
};
