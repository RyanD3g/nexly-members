import { Student } from "@prisma/client";

export abstract class AIsDeleteAccount {
    abstract isDelete(dateNow:string): Promise<void | Student[]>;
};
