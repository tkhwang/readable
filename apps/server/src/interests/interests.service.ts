import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@readable/users/domain/models/user.model';
import { InterestsRepository } from './infrastructures/typeorm/repositories/interest.repository';

@Injectable()
export class InterestsService {
  constructor(@InjectRepository(InterestsRepository) private readonly interestsRepository: InterestsRepository) {}

  async getInterestsByUser(requestUser: User) {
    const myInterests = await this.interestsRepository.find({ where: { userId: requestUser.id } });
    if (myInterests?.length > 0) return myInterests;

    const newInterest = await this.interestsRepository.save(
      this.interestsRepository.create({ interest: 'Readable', userId: requestUser.id })
    );

    return [newInterest];
  }

  async mapInterest(txtInterest: string, requesteUser: User) {
    const interest = await this.interestsRepository.findOne({
      where: { userId: requesteUser.id, interest: txtInterest },
    });
    if (interest) return interest;

    return this.interestsRepository.save(
      this.interestsRepository.create({ userId: requesteUser.id, interest: txtInterest })
    );
  }
}
