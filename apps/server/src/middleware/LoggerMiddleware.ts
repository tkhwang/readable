import { Injectable, NestMiddleware } from '@nestjs/common';
import * as express from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(request: express.Request, response: express.Response, next: (err?: any) => any): any {
    if (process.env.NODE_ENV !== 'production') {
      console.log('\n');
      console.log('[+] url     -> ', request.originalUrl);
      console.log('[+] cookies -> ', request.cookies);
      console.log('[+] query   -> ', request.query);
      console.log('[+] params  -> ', request.params);
      console.log('[+] body    -> ', request.body);
      console.log('[+] header  -> ', request.headers);
    }
    next();
  }
}
