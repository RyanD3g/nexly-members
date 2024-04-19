import { Body, Controller, Post } from "@nestjs/common";
import { NewMemberService } from "./NewMember.service";
import { INewMemberDTO } from "./NewMember.DTO";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Members")
@Controller("create")
export class NewMemberController {
    constructor(
        private service:NewMemberService,
    ){};

    @Post("member")
    async createMember(
        @Body() body:INewMemberDTO,
    ){
        try {
            const create = await this.service.createNewMemberAndUserExists({ 
                courseId:body.courseId, 
                emailUser:body.emailUser,
                idendidty:body.idendidty,
                name:body.name,
                typeUser:body.typeUser,
             });
             return create;
        } catch (error) {
            return `Não foi possivel criar um membro :${error}`;
        };
    };
};
