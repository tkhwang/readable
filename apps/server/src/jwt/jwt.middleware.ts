import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers);
    next();
  }
}
