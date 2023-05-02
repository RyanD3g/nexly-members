import { Injectable } from "@nestjs/common";
import { AProfileImage } from "../IProfileImage.student";
import { IProfileImageDTO } from "src/useCases/students/uploadImageProfile/ProfileImage.DTO";
import { PrismaService } from "src/database";

@Injectable()
export class ProfileImageStudentImplementation implements AProfileImage {
    constructor(
        private prisma:PrismaService,
    ){};
    async uploadProfile(data: IProfileImageDTO): Promise<Object> {
        const verifyProfile = await this.prisma.student.findUnique({
            where: { id:data.studentId },
        });
        if(verifyProfile.photo == null || verifyProfile.photo == undefined){
            const updateProfile = await this.prisma.student.update({
                where:{ id:data.studentId },
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
        const updateProfile = await this.prisma.student.update({
            where:{ id:data.studentId },
            data:{
                photo:data.urlPhoto,
            },
        });
        return { updated:true };
    };

};
