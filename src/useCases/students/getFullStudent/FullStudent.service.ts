import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { GetFullDataStudent } from "../../../repositories/Student/implementations/FullDataStudent.service";
import { IFullStudent } from "./FullStudent.DTO";

@Injectable()
export class getDataAndValidateFullStudentService {
    constructor(
        private implementation:GetFullDataStudent,
    ){};

    async validate_and_get(data:IFullStudent){
        const get = await this.implementation.getAllDataStudent(data);
        return get;
    };
};
