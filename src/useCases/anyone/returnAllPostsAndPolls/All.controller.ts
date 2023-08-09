import { Controller, Get } from "@nestjs/common";
import { AllPostsAndPolls } from "./All.service";

@Controller('all')
export class AllPostsAndPollsController {
    constructor(
        private service:AllPostsAndPolls,
    ){};

    @Get('posts/polls')
    async handleReturnAll(){
        try {
            const sendRequest = await this.service.execute();
            return sendRequest;    
        } catch (error) {
          return error;  
        };
    };  
};
