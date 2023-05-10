import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response } from "express";
import { verify } from "jsonwebtoken";
import { CustomRequest } from "src/interfaces/Request.interface";

interface Payload {
    student:boolean;
    producerId:string;
    id:string;
    isProducer:boolean;
    signed:boolean;
    iat: number;
    exp: number;
};

@Injectable()
export class IsJwtMiddleware implements NestMiddleware{
    use(req: CustomRequest, res: Response, next:NextFunction) {
        const { authorization } = req.headers;

        if(!authorization){
            console.log('Erro')
            return res.status(500).json({token:false, message:'Sem token!!'});
        };

        const parts = authorization.split(' ');
        if(parts.length !== 2){
            return res.status(500).json({token:false, message:'Header Mal formado!'});
        };

        const [key, token] = parts;
        if(!token){
            return res.status(500).json({token:false, message:'Token vazio!'});
        };

        if(!/^Bearer/i.test(key)){
            return res.status(500).json({token:false, message:'Header quebrado!'});
        };

        try {
            const decoded_token = verify(token, 'djkfhkjgbsjkçdgbw4iuegfupreghp48973y4tn4kejptbg34ip');
            const { student, id, producerId, isProducer, signed } = decoded_token as Payload;
            req.studentId = id;
            req.producerId = producerId;
            req.isStudent = student;
            req.isProducer = isProducer;
            req.signed = signed;
            return next();
        } catch (error) {
            return res.status(500).json({token:false, message:'Erro de autorização, faça login!'});
        }
    };
};
