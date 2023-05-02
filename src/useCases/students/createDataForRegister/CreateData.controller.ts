import { Body, Controller, Put, Request } from "@nestjs/common";
import { CreateDataForStudentsService } from "./CreateData.service";
import { CustomRequest } from "src/interfaces/Request.interface";
import { IDataByStudent } from "./CreateData.DTO";

@Controller('create')
export class CreateDataForStudentsController {
    constructor(
        private service:CreateDataForStudentsService,
    ){};

    @Put('data/student')
    async handle_create(@Body() body:IDataByStudent, @Request() req?:CustomRequest){
        try {
            const sendDataForInfra = await this.service.created({
                studentId:req.studentId,
                bio:body.bio,
                cpf:body.cpf,
                lastname:body.lastname,
                name:body.name,
                phone_number:body.phone_number,
                sex:body.sex,
            });

            return sendDataForInfra;
        } catch (error) {
            return error;
        };
    };
};
