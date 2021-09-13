import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InterestsRepository } from './infrastructures/typeorm/repositories/interest.repository';

@Injectable()
export class InterestsService {
  constructor(@InjectRepository(InterestsRepository) private readonly interestsRepository: InterestsRepository) {}

  async mapInterest(txtInterest: string) {
    const interest = await this.interestsRepository.findOne({ where: { interest: txtInterest } });
    if (interest) return interest;

    return this.interestsRepository.save(this.interestsRepository.create({ interest: txtInterest }));
  }
}
