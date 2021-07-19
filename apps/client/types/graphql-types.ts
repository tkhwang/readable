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
};

export type AddBookMarkWithAuthInput = {
  readonly url: Scalars['String'];
};

/** Auth providers */
export enum AuthProviders {
  Facebook = 'Facebook',
  Github = 'Github',
  Google = 'Google'
}

export type Bookmark = {
  readonly __typename?: 'Bookmark';
  readonly createdAt: Scalars['DateTime'];
  readonly deletedAt: Scalars['DateTime'];
  readonly description: Scalars['String'];
  readonly generatedImage: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly imageUrl: Scalars['String'];
  readonly siteName: Scalars['String'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly type: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
  readonly url: Scalars['String'];
  readonly urlHash: Scalars['String'];
};


export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly addBookmarkWithAuth: Bookmark;
  readonly createUser: User;
};


export type MutationaddBookmarkWithAuthArgs = {
  addBookMarkWithAuthInput: AddBookMarkWithAuthInput;
};


export type MutationcreateUserArgs = {
  SocialSigninInput: SocialSigninInput;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly anonymousBookmarks?: Maybe<ReadonlyArray<Bookmark>>;
  readonly me: User;
  readonly myBookmarks: ReadonlyArray<Bookmark>;
  readonly user: User;
  readonly users: ReadonlyArray<User>;
};


export type QueryuserArgs = {
  id: Scalars['String'];
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
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly deletedAt: Scalars['DateTime'];
  readonly email?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly provider: AuthProviders;
  readonly providerId: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
};
