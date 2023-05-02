import { Request } from "express";

export interface CustomRequest extends Request{
    studentId?:string;
    isStudent?:boolean;
};
