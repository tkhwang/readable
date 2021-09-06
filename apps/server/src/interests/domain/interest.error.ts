import { HttpException, HttpStatus } from '@nestjs/common';

export enum InterestErrorCode {
  INTEREST_FIND_OR_ADD_FAILED = 'INTEREST_FIND_OR_ADD_FAILED',
}

export class FindOrAddInterestWithAuthFailException extends HttpException {
  constructor(requestUserId: string, interest: string) {
    super(
      `[-] FindOrAddInterestWithAuthUseCase : User(${requestUserId} failed to find-or-add the interest(${interest}).`,
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
}
