import { ObjectId } from 'mongodb';

export interface Usecase<IRequest, IResponse> {
  execute(request?: IRequest, requestUserId?: ObjectId): Promise<IResponse> | IResponse;
}
