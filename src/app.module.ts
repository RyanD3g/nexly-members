import { HttpException, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProducerModules } from './useCases/producer/producer.module';
import { StudentsModule } from './useCases/students/students.module';
import { AnyoneModules } from './useCases/anyone/anyone.module';
import { ConfigModule } from '@nestjs/config';
import { plainToClass } from 'class-transformer';
import { env } from './@shared/env';
import { validateSync } from 'class-validator';
import * as toobusy from "toobusy-js";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (config) =>{
        const validatedConfigEnvVariables = plainToClass(env, config, {
          enableImplicitConversion:true,
        });
        const isError = validateSync(validatedConfigEnvVariables, {
          skipMissingProperties:false,
        });
        if(isError.length>0){
          throw new Error(`Erro ao inicializar variaveis ambientes: ${isError.toString()}`);
        };
        return validatedConfigEnvVariables;
      }
    }),
    StudentsModule, 
    ProducerModules,
    AnyoneModules,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(()=>{
      if(toobusy()){
        throw new HttpException("Server is ocuped in moment. Try again...", 400);
      };
    }).forRoutes("*") ;
  }
};
