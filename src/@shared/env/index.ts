import { IsNotEmpty, IsString } from "class-validator";

class env {
    @IsNotEmpty()
    @IsString()
    DATABASE_URL:string;

    @IsNotEmpty()
    @IsString()
    CLIENT_MAIL:string;

    @IsNotEmpty()
    @IsString()
    USER_MAIL:string;

    @IsNotEmpty()
    @IsString()
    PASS_MAIL:string;

    @IsNotEmpty()
    @IsString()
    CLIENT_SECRET:string;

    @IsNotEmpty()
    @IsString()
    AUTH_ID:string;

    @IsNotEmpty()
    @IsString()
    URL_RETURN:string;

    @IsNotEmpty()
    @IsString()
    HOST:string;

    @IsNotEmpty()
    @IsString()
    PORT:string;

    @IsNotEmpty()
    @IsString()
    PASS:string;
};
const environment = process.env as unknown as env;
export { env, environment };