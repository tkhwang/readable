import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers);
    if ('Authorization' in req.headers) {
      console.log(req.headers['Authorization']);
    }
    next();
  }
}

// export function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
//   console.log(req.headers);
//   next();
// }
