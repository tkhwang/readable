import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { Interest } from '@readable/interests/infrastructures/typeorm/entities/interest.entity';
import { InterestsRepository } from '@readable/interests/infrastructures/typeorm/repositories/interest.repository';
import { InterestsService } from '@readable/interests/interests.service';
import { User } from '@readable/users/domain/models/user.model';

export class GetMyInterestsWithAuthUsecase implements Usecase<User, Interest[]> {
  constructor(
    private readonly interestsService: InterestsService,
    @InjectRepository(InterestsRepository) private readonly interestsRepository: InterestsRepository
  ) {}

  async execute(requestUser: User) {
    return this.interestsService.getInterestsByUser(requestUser);
  }
}
