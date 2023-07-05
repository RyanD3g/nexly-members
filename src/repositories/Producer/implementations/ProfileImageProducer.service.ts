import { Injectable } from "@nestjs/common";
import { AProfileImage } from "../IProfileImage.producer";
import { IProfileImageDTO } from "../../../useCases/producer/uploadImageProfile/ProfileImage.DTO";
import { PrismaService } from "../../../database";

@Injectable()
export class ProfileImageProducerImplementation implements AProfileImage {
    constructor(
        private prisma:PrismaService,
    ){};
    async uploadProfile(data: IProfileImageDTO): Promise<Object> {
        const verifyProfile = await this.prisma.producer.findUnique({
            where: { id:data.producerId },
        });
        if(verifyProfile.photo == null || verifyProfile.photo == undefined){
            const updateProfile = await this.prisma.producer.update({
                where:{ id:data.producerId },
                data:{
                    photo:data.urlPhoto,
                },
            });
            return { updated:true };
        }else{
            await this.updateImageProfile(data);
        };

    }
    async updateImageProfile(data: IProfileImageDTO): Promise<Object> {
        const updateProfile = await this.prisma.producer.update({
            where:{ id:data.producerId },
            data:{
                photo:data.urlPhoto,
            },
        });
        return { updated:true };
    };

};
