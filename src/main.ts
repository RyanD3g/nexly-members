import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from '@prisma/client/runtime';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from "dotenv";
dotenv.config({});

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    const _docs_config = new DocumentBuilder()
    .setTitle("Nexly Members Docs")
    .setDescription("Nexly members is plataform to members")
    .setVersion("1.0")
    .build();
    const documents = SwaggerModule.createDocument(app, _docs_config);
    SwaggerModule.setup('documentation', app, documents);
    app.enableCors({
      origin:'*'
    });
    app.enableShutdownHooks();
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
