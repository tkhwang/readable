export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserInput = {
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly provider: Scalars['String'];
  readonly providerId: Scalars['String'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly userCreate: User;
};


export type MutationuserCreateArgs = {
  createUserInput: CreateUserInput;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly userFindAll: ReadonlyArray<User>;
  readonly userFindOne: User;
};


export type QueryuserFindOneArgs = {
  id: Scalars['Int'];
};

export type User = {
  readonly __typename?: 'User';
  readonly id: Scalars['Float'];
  readonly name: Scalars['String'];
};
