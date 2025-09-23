import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.DATABASE_PORT ?? '3010', 10);
  app.setGlobalPrefix('api-new-apps/v1/');
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.enableCors({
    origin: process.env.ENV_CORS,
    credentials: true,
  });

  await app.listen(port, '0.0.0.0');
  console.log(process.env.DATABASE_HOST);
  console.log(port);
}
bootstrap();
