import { GraphQLScalarType, Kind } from 'graphql';
import { fromCursor, PaginationCursor, toCursor } from './paginationCursor';

export const PaginationCursorScalar = new GraphQLScalarType({
  name: 'PaginationCursor',
  description: 'Relay Style Pagination Curosr',

  serialize(value: unknown): string {
    if (!(value instanceof PaginationCursor)) {
      throw new Error('PaginationCursorScalar can only serialize PaginationCursor object.');
    }

    return toCursor(value);
  },

  parseValue(value: unknown): PaginationCursor {
    if (typeof value !== 'string') {
      throw new Error('PaginationCursorScalar can only parse string values');
    }

    return fromCursor(value);
  },

  parseLiteral(ast): PaginationCursor {
    if (ast.kind !== Kind.STRING) {
      throw new Error('PaginationCursorScalar can only parse string values.');
    }

    return fromCursor(ast.value);
  },
});
