import { Injectable } from "@nestjs/common";
import { IDataByStudent } from "./CreateData.DTO";
import { CreateDataStudentImplementation } from "../../../repositories/Student/implementations/CreateDataStudent.service";

@Injectable()
export class CreateDataForStudentsService {
    constructor(
        private implementation:CreateDataStudentImplementation,
    ){};

    async created(data:IDataByStudent){
        const sendData = await this.implementation.create(data);
        return sendData;
    };
};
