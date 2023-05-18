import { Body, Controller, Post } from "@nestjs/common";
import { SearchCourseService } from "./SearchCourse.service";
import { ISearchDTO } from "./SearchCourse.DTO";

@Controller('search')
export class SearchCourseController {
    constructor(
        private service:SearchCourseService,
    ){};

    @Post('courses')
    async handle_find(
        @Body() body:ISearchDTO,
        isTest:boolean = false,
    ){
        try {
            const searched = await this.service.searched({ 
                filterForCourseName:body.filterForCourseName,
                filterForProducer:body.filterForProducer,
                filterForTag:body.filterForTag,
             }, isTest);
             return searched;
        } catch (error) {
            return error;
        };
    };
};
