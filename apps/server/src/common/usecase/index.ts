import { User } from '@readable/users/entities/user.entity';
import { ObjectId } from 'mongodb';

export interface Usecase<IRequest, IResponse> {
  execute(request?: IRequest, requestUser?: User): Promise<IResponse> | IResponse;
}
