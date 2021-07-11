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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** Mongo object id scalar type */
  ObjectId: any;
};

/** Auth providers */
export enum AuthProviders {
  Facebook = 'Facebook',
  Github = 'Github',
  Google = 'Google'
}


export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly createUser: User;
};


export type MutationcreateUserArgs = {
  SocialSigninInput: SocialSigninInput;
};


export type Query = {
  readonly __typename?: 'Query';
  readonly me: User;
  readonly user: User;
  readonly users: ReadonlyArray<User>;
};


export type QueryuserArgs = {
  id: Scalars['ObjectId'];
};

export type SocialSigninInput = {
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly provider: AuthProviders;
  readonly providerId: Scalars['String'];
};

export type User = {
  readonly __typename?: 'User';
  readonly _id: Scalars['ObjectId'];
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly deletedAt: Scalars['DateTime'];
  readonly email?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly provider: AuthProviders;
  readonly providerId: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
};