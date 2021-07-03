import { PassportStrategy } from '@nestjs/passport';
import { config } from 'dotenv';
import { Strategy } from 'passport-facebook';
import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: process.env.OAUTH_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.OAUTH_FACEBOOK_CLIENT_PW,
      callbackURL: process.env.OAUTH_FACEBOOK_CALLBACK_URL,
      profileFields: ['id', 'displayName', 'photos', 'email'],
    });
  }
  async validate(accessToken: string, refreshToken: string, profile: any, done: any): Promise<any> {
    console.log('TCL: FacebookStrategy -> exportclassFacebookStrategyextendsPassportStrategy -> profile', profile);
    // const user = {
    //   email: emails[0].value,
    //   firstName: name.givenName,
    //   lastName: name.familyName,
    //   picture: photos[0].value,
    //   // accessToken,
    // };
    done(null, { ...profile });
  }
}
