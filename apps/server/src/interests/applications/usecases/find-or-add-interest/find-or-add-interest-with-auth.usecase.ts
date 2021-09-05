import { Usecase } from '@readable/common/applications/usecase';
import { InterestsRepository } from '@readable/interests/infrastructures/mongo/repositories/interest.repository';
import { FindOrAddInterestWithAuthInput } from './find-or-add-interest-with-auth.input';
import {
  FindOrAddInterestWithAuthOutput,
  FindOrAddInterestWithAuthOutputData,
} from './find-or-add-interest-with-auth.output';

export class FindOrAddInterestWithAuthUseCase
  implements Usecase<FindOrAddInterestWithAuthInput, FindOrAddInterestWithAuthOutput> {
  constructor(private readonly interestsRepository: InterestsRepository) {}

  async execute(command: FindOrAddInterestWithAuthInput) {
    const { interest: interestText } = command;

    let interest = await this.interestsRepository.findOne({ where: { interest: interestText } });

    if (!interest) {
      interest = this.interestsRepository.create({ interest: interestText });
      await this.interestsRepository.save(interest);
    }

    // return new FindOrAddInterestWithAuthOutput(true, new FindOrAddInterestWithAuthOutputData(interest));
    return interest;
  }
}
