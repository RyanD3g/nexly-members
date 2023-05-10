import { Producer } from "@prisma/client";
import { IRegisterProducer } from "src/useCases/producer/createProducer/RegisterProducer.DTO";

export abstract class ARegisterProducer {
    abstract findByEmal(email:string): Promise<Producer>;
    abstract register(data:IRegisterProducer): Promise<Object>;
};
