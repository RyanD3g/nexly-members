import { IProfileImageDTO } from "src/useCases/producer/uploadImageProfile/ProfileImage.DTO";

export abstract class AProfileImage {
    abstract uploadProfile(data:IProfileImageDTO): Promise<Object>;
    abstract updateImageProfile(data:IProfileImageDTO): Promise<Object>;
};
