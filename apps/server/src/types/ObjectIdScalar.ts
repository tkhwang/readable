import { checkObjectIdValidation } from '@readable/utils/checkObjectIdValidation';
import { GraphQLScalarType, Kind } from 'graphql';
import { ObjectId } from 'mongodb';

// Memo(Teddy): https://typegraphql.com/docs/scalars.html
export const ObjectIdScalar = new GraphQLScalarType({
  name: 'ObjectId',
  description: 'Mongo object id scalar type',
  serialize(value: unknown): string {
    // check the type of received value
    if (!(value instanceof ObjectId)) {
      throw new Error('ObjectIdScalar can only serialize ObjectId values');
    }
    return value.toHexString(); // value sent to the client
  },
  parseValue(value: unknown): ObjectId {
    // check the type of received value
    if (typeof value !== 'string') {
      throw new Error('ObjectIdScalar can only parse string values');
    }
    if (!checkObjectIdValidation(value)) {
      throw new Error('ObjectIdScalar can only parse valid ObjectId string values');
    }
    return new ObjectId(value); // value from the client input variables
  },
  parseLiteral(ast): ObjectId {
    // check the type of received value
    if (ast.kind !== Kind.STRING) {
      throw new Error('ObjectIdScalar can only parse string values');
    }
    if (!checkObjectIdValidation(ast.value)) {
      throw new Error('ObjectIdScalar can only parse valid ObjectId string values');
    }
    return new ObjectId(ast.value); // value from the client query
  },
});
