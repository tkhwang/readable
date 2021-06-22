/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.SERVER_PORT || 1000;

  console.log('TCL: bootstrap -> process.env.READABLE_RDS_DB', process.env.READABLE_RDS_DB);

  await app.listen(port, () => {
    // Logger.log('🚀 Listening at http://localhost:' + port + '/' + globalPrefix);
    // Graphql
    Logger.log('🚀 Listening at http://localhost:' + port + '/' + 'graphql');
  });
}

bootstrap();
