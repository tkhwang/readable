import { ObjectId } from 'mongodb';

export type MongoObjectId = { _id: ObjectId };
// export type MongoObjectIdAndTypegoose = MongoObjectId & Typegoose;
// export type MongoEntity<TSchema extends MongoObjectIdAndTypegoose> = DataType<TSchema> & MongoObjectId;
