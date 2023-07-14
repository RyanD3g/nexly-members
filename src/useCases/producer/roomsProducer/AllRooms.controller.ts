import { Controller, Get, Request } from "@nestjs/common";
import { AllRoomsByProducerService } from "./AllRooms.service";
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('room')
export class AllRoomsByProducerController {
    constructor(
        private service:AllRoomsByProducerService,
    ){};

    @Get('all')
    async returnRooms(
        @Request() req:CustomRequest,
    ){
        try {
          const rooms = await this.service.returnAllRooms({
            producerId:req.producerId,
          });
          return rooms;  
        } catch (error) {
            return error;
        };
    };
};
