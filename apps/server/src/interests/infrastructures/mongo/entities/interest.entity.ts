import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Column, Entity } from 'typeorm';

@Entity('interests')
export class Interest extends CoreEntity {
  @Column({ unique: true })
  interest: string;
}
