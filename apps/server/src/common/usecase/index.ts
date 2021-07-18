import { User } from '@readable/users/models/user.model';
import { ObjectId } from 'mongodb';

export interface Usecase<IRequest, IResponse> {
  execute(request?: IRequest, requestUser?: User): Promise<IResponse> | IResponse;
}
