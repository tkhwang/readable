import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { OAuthUser } from '../entities/oauthUser.entity';

@Injectable()
@EntityRepository(OAuthUser)
export class OAuthUsersRepository extends Repository<OAuthUser> {}
