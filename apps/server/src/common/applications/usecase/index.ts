import { User } from '@readable/users/domain/models/user.model';

export interface Usecase<IRequest, IResponse> {
  execute(request?: IRequest, requestUser?: User): Promise<IResponse> | IResponse;
}
