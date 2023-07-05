import { Injectable } from "@nestjs/common";
import { ProfileImageProducerImplementation } from "../../../repositories/Producer/implementations/ProfileImageProducer.service";
import { IProfileImageDTO } from "./ProfileImage.DTO";

@Injectable()
export class ProfileImageProducerService {
    constructor(
        private implementation:ProfileImageProducerImplementation,
    ){};

    async uploadedPhotos(data:IProfileImageDTO){
        const uploaded = await this.implementation.uploadProfile(data);
        return uploaded;
    };
};
