import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Column, Entity, Unique } from 'typeorm';

@Entity('interests')
@Unique('userid-interest', ['userId', 'interest'])
export class Interest extends CoreEntity {
  @Column()
  userId: string;

  @Column()
  interest: string;
}
