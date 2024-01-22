import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from '@prisma/client/runtime';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors({
      origin:['http://localhost:5173', 'https://nexlymembers.netlify.com']
    });
    await app.listen(3000);
  } catch (error) {
    if(error instanceof PrismaClientKnownRequestError || error instanceof PrismaClientUnknownRequestError){
      return error.message;
    }else{
      return error;
    };
  }
}
bootstrap();
