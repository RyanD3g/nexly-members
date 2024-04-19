import { logger } from "winston.preload"

export const isEmpty = (obj:Array<any>, nameModel:string)=>{
    if(obj?.length === 0 || !obj) {
        logger.error(`O Objeto do model ${nameModel} veio vazio, verifique a requicição e tente novamente`)
        throw new Error(`O Objeto do model ${nameModel} veio vazio, verifique a requicição e tente novamente`);
    };
};
