import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response } from "express";
import { CustomRequest } from "src/interfaces/Request.interface";

@Injectable()
export class IsProducer implements NestMiddleware {
    use(req: CustomRequest, res: Response, next:NextFunction) {
        if(!req.isProducer){
            throw new HttpException('Vc não pode efetuar essa funcionalidade, apenas para produtores!!', HttpStatus.UNAUTHORIZED);
        };
        next();
    };
};
