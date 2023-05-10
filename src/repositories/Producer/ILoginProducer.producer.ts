import { ILoginProducer } from "src/useCases/producer/loginProducer/LoginProducer.DTO";

export abstract class ALoginProducer {
    abstract login(dataForLogin:ILoginProducer): Promise<Object>;
};
