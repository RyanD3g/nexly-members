import { Request } from "express";

export interface CustomRequest extends Request{
    studentId?:string;
    producerId?:string;
    isStudent?:boolean;
    isProducer?:boolean;
    signed?:boolean;
    urlVideo?:string;
};
