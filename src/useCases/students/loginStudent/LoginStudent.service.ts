import { Injectable } from "@nestjs/common";
import { LoginStudentImplementation } from "../../../repositories/Student/implementations/LoginStudent.service";
import { ILoginStudent } from "./LoginStudent.DTO";

@Injectable()
export class LoginStudentService {
    constructor(
        private implementation:LoginStudentImplementation,
    ){};

    async handleUp_data_for_Repository(data:ILoginStudent){
        const uped = await this.implementation.login(data);
        return uped;
    };
};
