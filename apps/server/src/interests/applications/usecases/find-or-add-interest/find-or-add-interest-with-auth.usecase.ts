import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { Interest } from '@readable/interests/infrastructures/mongo/entities/interest.entity';
import { InterestsRepository } from '@readable/interests/infrastructures/mongo/repositories/interest.repository';
import { User } from '@readable/users/domain/models/user.model';
import { FindOrAddInterestWithAuthInput } from './find-or-add-interest-with-auth.input';

export class FindOrAddInterestWithAuthUseCase implements Usecase<FindOrAddInterestWithAuthInput, Interest> {
  constructor(@InjectRepository(InterestsRepository) private readonly interestsRepository: InterestsRepository) {}

  async execute(command: FindOrAddInterestWithAuthInput, requestUser: User) {
    const { interest: interestText } = command;

    let interest = await this.interestsRepository.findOne({
      where: { userId: requestUser.id, interest: interestText },
    });

    if (!interest) {
      interest = this.interestsRepository.create({ userId: requestUser.id, interest: interestText });
      await this.interestsRepository.save(interest);
    }

    return interest;
  }
}
