import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common"

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //NestFactory gera uma nova Nest application e dentro do NestFactory a gente cria o AppModule.
  app.useGlobalPipes( new ValidationPipe({
    whitelist: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true
    },
  }) );
  await app.listen(3000);
}

//By Default is "false"

bootstrap();


