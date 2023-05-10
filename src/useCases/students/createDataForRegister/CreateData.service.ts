import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IDataByStudent } from "./CreateData.DTO";
import { CreateDataStudentImplementation } from "../../../repositories/Student/implementations/CreateDataStudent.service";

@Injectable()
export class CreateDataForStudentsService {
    constructor(
        private implementation:CreateDataStudentImplementation,
    ){};

    async created(data:IDataByStudent){
        const byPhone = await this.implementation.findByPhone(data.phone_number);
        if(byPhone){
            throw new HttpException('Número cadastrado!', HttpStatus.BAD_REQUEST);
        };
        const byIdentity = await this.implementation.findByIdentity(data.cpf);
        if(byIdentity){
            throw new HttpException('Identidade já cadastrada!', HttpStatus.BAD_REQUEST);
        };
        const sendData = await this.implementation.create(data);
        return sendData;
    };
};
