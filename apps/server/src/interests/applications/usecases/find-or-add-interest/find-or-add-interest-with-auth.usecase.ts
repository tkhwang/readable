import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { FindOrAddInterestWithAuthFailException } from '@readable/interests/domain/interest.error';
import { Interest } from '@readable/interests/infrastructures/typeorm/entities/interest.entity';
import { InterestsRepository } from '@readable/interests/infrastructures/typeorm/repositories/interest.repository';
import { User } from '@readable/users/domain/models/user.model';
import { FindOrAddInterestWithAuthInput } from './find-or-add-interest-with-auth.input';

export class FindOrAddInterestWithAuthUseCase implements Usecase<FindOrAddInterestWithAuthInput, Interest> {
  constructor(@InjectRepository(InterestsRepository) private readonly interestsRepository: InterestsRepository) {}

  async execute(command: FindOrAddInterestWithAuthInput, requestUser: User) {
    const { interest: interestText } = command;

    try {
      let interest = await this.interestsRepository.findOne({
        where: { userId: requestUser.id, interest: interestText },
      });

      if (!interest) {
        interest = this.interestsRepository.create({ userId: requestUser.id, interest: interestText });
        await this.interestsRepository.save(interest);
      }

      return interest;
    } catch (error) {
      throw new FindOrAddInterestWithAuthFailException(requestUser.id, interestText);
    }
  }
}
