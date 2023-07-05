import { IUpdateAddress } from "src/useCases/students/updateAddress/UpdateAddress.DTO";

export abstract class AUpdateAddress {
    abstract updateAddress(data:IUpdateAddress):Promise<Object>;
};
