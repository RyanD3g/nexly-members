import { IUpdateAddress } from "src/useCases/producer/updateAddress/UpdateAddress.DTO";

export abstract class AUpdateAddress {
    abstract updateAddress(data:IUpdateAddress):Promise<Object>;
};
