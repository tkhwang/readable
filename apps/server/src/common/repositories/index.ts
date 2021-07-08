import { Model } from 'mongoose';
import { Document } from 'mongoose';
import { CoreEntity } from '@readable/common/entities/core.entity';
import { ObjectId } from 'mongodb';

export class MongoRepository<T extends CoreEntity & Document> {
  constructor(private readonly model: Model<T>) {}

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
    const foundDocs = await this.model.find();
    return foundDocs?.map(doc => doc.toObject()) ?? [];
  }
}
