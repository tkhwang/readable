import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import Strategy from 'passport-headerapikey';
import { API_KEY } from '@readable/common/constants';

@Injectable()
export class HeaderApiKeyStrategy extends PassportStrategy(Strategy, 'api-key') {
  constructor(private readonly configService: ConfigService) {
    // super({ header: 'X-API-KEY', prefix: '' }, true, async (apiKey, done) => {
    super({ header: 'x-api-key', prefix: '' }, true, async (apiKey, done) => {
      console.log('TCL: HeaderApiKeyStrategy -> constructor -> apiKey', apiKey);
      console.log('TCL: publicvalidate -> API_KEY', API_KEY);
      return this.validate(apiKey, done);
    });
  }

  public validate = (apiKey: string, done: (error: Error, data) => {}) => {
    // if (this.configService.get<string>('API_KEY') === apiKey) {
    if (apiKey === API_KEY) {
      done(null, true);
    }
    done(new UnauthorizedException(), null);
  };
}
