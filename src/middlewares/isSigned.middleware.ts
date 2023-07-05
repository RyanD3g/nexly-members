import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response } from "express";
import { CustomRequest } from "src/interfaces/Request.interface";

@Injectable()
export class isSigned implements NestMiddleware {
    use(req: CustomRequest, res: Response, next:NextFunction) {
        if(!req.signed){
            throw new HttpException('Assinatura pendente!!', HttpStatus.UNAUTHORIZED);
        };
        return next();
    };
};
