import { AddressForProducers, Producer } from "@prisma/client";
import { IFullProducer } from "src/useCases/producer/getFullProducer/FullProducer.DTO";

export abstract class AFullProducer {
    abstract isComplete(data:IFullProducer): Promise<AddressForProducers>;
    abstract getAllDataProducer(data:IFullProducer): Promise<Producer>;
};
