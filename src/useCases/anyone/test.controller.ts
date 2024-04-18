import { Controller, Get } from "@nestjs/common";
import { TooBusy } from "src/@shared/decorators/toobusyHook";

@Controller("")
export class TesteController {
    @Get()
    @TooBusy()
    teste(){
        return "OK";
    }
};