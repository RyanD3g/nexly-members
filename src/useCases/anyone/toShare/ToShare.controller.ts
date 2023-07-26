import { Body, Controller, Get, Param } from "@nestjs/common";
import { ToSharePostService } from "./ToShare.service";
import { IToShareDTO } from "./ToShare.DTO";

@Controller('share')
export class ToShareController {
    constructor(
        private service:ToSharePostService,
    ){};

    @Get('student/post/:postId/:studentId')
    async shareStudent(
        @Body() body?:IToShareDTO,
        isTest:boolean = false,
        @Param('studentId') studentId?:string,
        @Param('postId') postId?:string,
    ){
        try {
          const share = await this.service.execute({
            postId:body.postId || postId,
            userId:body.userId || studentId,
          }, isTest, true);
          return share;  
        } catch (error) {
           return error; 
        };
    };

    @Get('producer/post/:postId/:producerId')
    async shareProducer(
        @Body() body?:IToShareDTO,
        isTest:boolean = false,
        @Param('producerId') producerId?:string,
        @Param('postId') postId?:string,
    ){
        try {
          const share = await this.service.execute({
            postId:body.postId || postId,
            userId:body.userId || producerId,
          }, isTest, false);
          return share;  
        } catch (error) {
           return error; 
        };
    };
};
