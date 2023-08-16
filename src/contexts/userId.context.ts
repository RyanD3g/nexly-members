import { Injectable } from "@nestjs/common";
import { AsyncLocalStorage } from "async_hooks";
import { NextFunction, Response } from "express";
import { CustomRequest } from "src/interfaces/Request.interface";

export type dataForStorage = {
    student?:string,
    producer?:string,
};

@Injectable()
export class UserIdContext {
    constructor(
        private readonly als: AsyncLocalStorage<dataForStorage>,
    ){};

    getId(req:CustomRequest, res:Response, next:NextFunction){
        const objectUsers: dataForStorage = {
            student:req.studentId,
            producer:req.producerId,
        };
        this.als.run(objectUsers, ()=> next());
    };
};
