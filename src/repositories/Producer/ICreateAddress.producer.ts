import { IAddressByProducer } from "src/useCases/producer/createAddress/CreateAddress.DTO";

export abstract class ACreateAddress {
    abstract createAddress(data:IAddressByProducer):Promise<Object>;
};
