import { BadRequestException, Body, Controller, Get, HttpException, Param, ParseIntPipe, ParseUUIDPipe } from "@nestjs/common";
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
        @Param('studentId', new ParseUUIDPipe({ errorHttpStatusCode:400, exceptionFactory(errors) {
          throw new BadRequestException('Id Inválido!');
        }, })) studentId?:string,
        @Param('postId', new ParseUUIDPipe({ errorHttpStatusCode:400, exceptionFactory(errors) {
          throw new BadRequestException('Id Inválido!');
        }, })) postId?:string,
    ){
        try {
          const share = await this.service.execute({
            postId:body.postId || postId,
            userId:body.userId || studentId,
          }, isTest, true);
          return share;  
        } catch (error) {
           return error as HttpException; 
        };
    };

    @Get('producer/post/:postId/:producerId')
    async shareProducer(
        @Body() body?:IToShareDTO,
        isTest:boolean = false,
        @Param('producerId', new ParseIntPipe({ errorHttpStatusCode:400, })) producerId?:string,
        @Param('postId', new ParseIntPipe({ errorHttpStatusCode:400, })) postId?:string,
    ){
        try {
          const share = await this.service.execute({
            postId:body.postId || postId,
            userId:body.userId || producerId,
          }, isTest, false);
          return share;  
        } catch (error) {
           return error as HttpException; 
        };
    };
};
