import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_OPTIONS } from './jwt.constants';
import { JwtModuleOptions } from './jwt.interface';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  constructor(@Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions) {}

  // eslint-disable-next-line @typescript-eslint/ban-types
  sign(payload: object): string {
    return jwt.sign(payload, this.options.privateKey);
  }
}
