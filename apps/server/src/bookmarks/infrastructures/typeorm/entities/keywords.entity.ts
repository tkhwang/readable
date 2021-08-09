import { CoreEntity } from '@readable/common/infrastructures/typeorm/entities';
import { Column, Entity } from 'typeorm';

@Entity('keywords')
export class Keyword extends CoreEntity {
  @Column()
  keyword: string;
}
