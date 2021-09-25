import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import Strategy from 'passport-headerapikey';
import { API_KEY } from '@readable/common/constants';

@Injectable()
export class HeaderApiKeyStrategy extends PassportStrategy(Strategy, 'api-key') {
  constructor(private readonly configService: ConfigService) {
    super({ header: 'x-api-key', prefix: '' }, true, async (apiKey, done) => {
      return this.validate(apiKey, done);
    });
  }

  public validate = (apiKey: string, done: (error: Error | null, data) => {}) => {
    if (apiKey === API_KEY) {
      done(null, true);
    }
    done(new UnauthorizedException(), null);
  };
}
