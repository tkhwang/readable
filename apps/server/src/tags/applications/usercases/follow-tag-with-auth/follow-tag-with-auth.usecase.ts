import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { TagNotFoundException } from '@readable/tags/domain/erros/tag.error';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { UserNotFoundException } from '@readable/users/domain/errors/users.error';
import { User } from '@readable/users/domain/models/user.model';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { FollowTagWithAuthInput } from './follow-tag-with-auth.input';
import { FollowTagWithAuthOutput } from './follow-tag-with-auth.output';

@Injectable()
export class FollowTagWithAuthUsecase implements Usecase<FollowTagWithAuthInput, any> {
  constructor(
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
  ) {}

  async execute(command: FollowTagWithAuthInput, requestUser: User) {
    const { tagId } = command;

    const [tag, user] = await Promise.all([
      this.tagsRepository.findOne({ id: tagId }),
      this.usersRepository.findOne({
        where: { id: requestUser.id },
        relations: ['tags'],
      }),
    ]);

    console.log('TCL: FollowTagWithAuthUsecase -> execute -> user', user);

    if (!user) throw new UserNotFoundException(requestUser.id);
    if (!tag) throw new TagNotFoundException(tagId);

    const oldTags = user.tags ?? [];
    user.tags = [...oldTags, tag];
    await this.usersRepository.save(user);

    return new FollowTagWithAuthOutput(true);
  }
}
