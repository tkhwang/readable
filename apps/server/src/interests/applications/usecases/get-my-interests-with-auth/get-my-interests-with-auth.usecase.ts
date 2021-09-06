import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { Interest } from '@readable/interests/infrastructures/mongo/entities/interest.entity';
import { InterestsRepository } from '@readable/interests/infrastructures/mongo/repositories/interest.repository';
import { User } from '@readable/users/domain/models/user.model';

export class GetMyInterestsWithAuthUsecase implements Usecase<User, Interest[]> {
  constructor(@InjectRepository(InterestsRepository) private readonly interestsRepository: InterestsRepository) {}

  async execute(requestUser: User) {
    const myInterests = await this.interestsRepository.find({ where: { userId: requestUser.id } });

    return myInterests ?? [];
  }
}
