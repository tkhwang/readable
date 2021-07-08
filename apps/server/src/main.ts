/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from '@readable/middleware/LoggerMiddleware';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(new LoggerMiddleware().use);
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

  const globalPrefix = 'rest';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 7000;

  const env = process.env.NODE_ENV;
  Logger.log('🔧 @server : NODE_ENV = ', env);

  await app.listen(port, () => {
    // REST
    Logger.log('🚀 Listening at http://localhost:' + port + '/' + globalPrefix);
    // Graphql;
    Logger.log('🚀 Listening at http://localhost:' + port + '/' + 'graphql');
  });
}

bootstrap();
