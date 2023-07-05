import { Module } from "@nestjs/common";
import { ValidateCodeAndDateController } from "./ValidateCode.controller";
import { PrismaService } from "src/database";
import { ValidateCodeAndDateService } from "./ValidateCode.service";
import { ValidateCodeImplementation } from "src/repositories/Producer/implementations/ValidateCode.service";

@Module({
    imports: [],
    controllers: [ValidateCodeAndDateController],
    providers: [
        PrismaService,
        ValidateCodeAndDateService,
        ValidateCodeImplementation,
    ],
})
export class ValidateCodeAndDateModuleProducer {};
