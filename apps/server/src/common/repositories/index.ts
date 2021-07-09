import { Model } from 'mongoose';
import { Document } from 'mongoose';
import { CoreEntity } from '@readable/common/entities/core.entity';
import { FilterQuery, ObjectId } from 'mongodb';

export class MongoRepository<TEntity extends CoreEntity> {
  constructor(private readonly model: Model<TEntity & Document>) {}

  // eslint-disable-next-line @typescript-eslint/ban-types
  public async insert(entity: object) {
    const [doc] = await this.model.create([entity]);
    return doc?.toObject() ?? null;
  }

  public async findById(objectId: ObjectId) {
    const foundDoc = await this.model.findById(objectId);
    return foundDoc?.toObject() ?? null;
  }

  public async findAll() {
    const foundDocs = await this.model.find({
      deletedAt: { $not: { $gt: new Date(-1) } },
    });
    return foundDocs?.map(doc => doc.toObject()) ?? [];
  }

  public async findOneByField(selector: FilterQuery<TEntity>): Promise<TEntity | null> {
    const foundDoc = await this.model.findOne({
      ...selector,
      deletedAt: { $not: { $gt: new Date(-1) } },
    });

    return foundDoc?.toObject() ?? null;
  }

  public async findAllByField(selector: FilterQuery<TEntity>): Promise<TEntity[] | []> {
    const foundDocs = await this.model.find({
      ...selector,
      deletedAt: { $not: { $gt: new Date(-1) } },
    });

    return foundDocs?.map(doc => doc.toObject()) ?? [];
  }
}
