import { HttpException, Injectable } from "@nestjs/common";
import { NewMemberRepositorie } from "src/repositories/Producer/implementations/NewMember.service";
import { INewMemberDTO } from "./NewMember.DTO";

@Injectable()
export class NewMemberService {
    constructor(
        private NewMemberRepositorie:NewMemberRepositorie,
    ){};
    async createNewMemberAndUserExists(data:INewMemberDTO){
        const memberExists = await this.NewMemberRepositorie.memberExists(data.emailUser);
        if(!memberExists) throw new HttpException("Usuário inexistente!!", 404);
        const setNewMember = await this.NewMemberRepositorie.createNewMember(data, memberExists.id);
        return setNewMember;
    };
};
