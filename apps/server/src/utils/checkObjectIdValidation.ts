// ObjectId.isValid 는 글자수 비교 로직이 있어 가끔

import { ObjectId } from 'mongodb';

// firestoreId를 valid하다고 잘못 판단함.
const checkObjectIdValidationRex = new RegExp('^[0-9a-fA-F]{24}$');
export const checkObjectIdValidation = (id?: string | ObjectId): id is ObjectId =>
  checkObjectIdValidationRex.test((id || '').toString());
