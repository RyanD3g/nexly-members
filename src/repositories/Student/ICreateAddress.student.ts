import { IAddressByStudent } from "src/useCases/students/createAddress/CreateAddress.DTO";

export abstract class ACreateAddress {
    abstract createAddress(data:IAddressByStudent):Promise<Object>;
};
