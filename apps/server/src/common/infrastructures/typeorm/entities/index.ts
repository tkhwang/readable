import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export abstract class CoreEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: Date, default: () => new Date() })
  public createdAt: Date;

  @Column({ type: Date, default: () => new Date() })
  public updatedAt: Date;

  @Column({ type: Date, default: () => new Date(-1) })
  public deletedAt: Date;
}
