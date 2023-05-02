interface IMailConfigs {
    name:string,
    address:string,
};
export interface ISendMaler{
    to:IMailConfigs;
    from:IMailConfigs;
    subject:string;
    html:string;
};

export abstract class AMailProvider{
    abstract sendCodeForMail(dataEmail:ISendMaler): Promise<void>;
};
