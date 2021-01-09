import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';


async function bootstrap() {
  const log = new Logger(bootstrap.name);
  // const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT ?? 4002;

  await app.listen(port);
  log.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap();
