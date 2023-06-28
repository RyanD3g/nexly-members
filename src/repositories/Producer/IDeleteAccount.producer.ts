import { Producer } from '@prisma/client';
import { IDeleteAccountDTO } from '../../useCases/producer/deleteAccount/DeleteAccount.DTO';

export abstract class ADeleteAccount {
    abstract accountIsDate(producerId:string): Promise<boolean | Producer>;
    abstract deleteAccount(data:IDeleteAccountDTO): Promise<void | Producer>;
};
