import { Injectable } from '@nestjs/common';
import { BookmarksRepository } from '@readable/bookmarks/bookmarks.repository';
import { Usecase } from '@readable/common/usecase';
import { User } from '@readable/users/entities/user.entity';
import { ObjectId } from 'mongodb';
import { GetUrlInfoInput } from './get-url-info.input';

@Injectable()
export class GetUrlInfoUsecase implements Usecase<GetUrlInfoInput, any> {
  constructor(private readonly bookmarkRepository: BookmarksRepository) {}

  public async execute(command: GetUrlInfoInput, requestUser: User) {
    return {
      ...command,
    };
  }
}
