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
  /** Relay Style Pagination Curosr */
  PaginationCursor: any;
};

export type AddBookMarkWithAuthInput = {
  readonly url: Scalars['String'];
};

export type AddInGoogleEventsInput = {
  /** Bookmarks for adding in Google calendar events */
  readonly bookmarks: ReadonlyArray<BookmarkInput>;
};

/** Auth providers */
export enum AuthProviders {
  Facebook = 'Facebook',
  Github = 'Github',
  Google = 'Google'
}

export type Bookmark = {
  readonly __typename?: 'Bookmark';
  readonly collectors?: Maybe<ReadonlyArray<User>>;
  readonly createdAt: Scalars['DateTime'];
  readonly deletedAt: Scalars['DateTime'];
  readonly description: Scalars['String'];
  readonly finishers?: Maybe<ReadonlyArray<User>>;
  readonly generatedImage: Scalars['String'];
  readonly howMany: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly imageUrl: Scalars['String'];
  readonly keywordIds: ReadonlyArray<Scalars['String']>;
  readonly keywords: ReadonlyArray<Scalars['String']>;
  readonly schedulers?: Maybe<ReadonlyArray<User>>;
  readonly siteName: Scalars['String'];
  readonly summary?: Maybe<Scalars['String']>;
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly type: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
  readonly url: Scalars['String'];
  readonly urlHash: Scalars['String'];
};

export type BookmarkBRFO = {
  readonly __typename?: 'BookmarkBRFO';
  readonly createdAt: Scalars['DateTime'];
  readonly deletedAt: Scalars['DateTime'];
  readonly description: Scalars['String'];
  readonly generatedImage: Scalars['String'];
  readonly howMany: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly imageUrl: Scalars['String'];
  readonly keywordIds: ReadonlyArray<Scalars['String']>;
  readonly siteName: Scalars['String'];
  readonly summary?: Maybe<Scalars['String']>;
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly type: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
  readonly url: Scalars['String'];
  readonly urlHash: Scalars['String'];
};

export type BookmarkInput = {
  readonly scheduledAt: Scalars['DateTime'];
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
};

export type CommonOutput = {
  readonly __typename?: 'CommonOutput';
  /** 공통 Response (output) */
  readonly isSuccess: Scalars['Boolean'];
};


export type DeleteBookmarkWithAuthInput = {
  readonly bookmarkId: Scalars['String'];
};

export type GetPaginationBookmarksInput = {
  readonly after?: Maybe<Scalars['PaginationCursor']>;
  readonly first?: Maybe<Scalars['Int']>;
  /** Pagination bookmarks order field */
  readonly order?: Maybe<PaginationOrder>;
  /** Pagination bookmarks orderBy field */
  readonly orderBy?: Maybe<PaginationOrderBy>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly addBookmarkInGoogleEventsWithAuth: CommonOutput;
  readonly addBookmarkWithAuth: Bookmark;
  readonly deleteBookmarkWithAuth: CommonOutput;
};


export type MutationaddBookmarkInGoogleEventsWithAuthArgs = {
  addInGoogleEventsInput: AddInGoogleEventsInput;
};


export type MutationaddBookmarkWithAuthArgs = {
  addBookMarkWithAuthInput: AddBookMarkWithAuthInput;
};


export type MutationdeleteBookmarkWithAuthArgs = {
  deleteBookmarkWithAuthInput: DeleteBookmarkWithAuthInput;
};

export type OAuthUser = {
  readonly __typename?: 'OAuthUser';
  readonly accessToken?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly deletedAt: Scalars['DateTime'];
  readonly email?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly provider: AuthProviders;
  readonly providerId: Scalars['String'];
  readonly refreshToken?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly user: User;
};

export type PaginationBookmarkBRFOEdge = {
  readonly __typename?: 'PaginationBookmarkBRFOEdge';
  readonly cursor: Scalars['PaginationCursor'];
  readonly node: BookmarkBRFO;
};

export type PaginationBookmarkEdge = {
  readonly __typename?: 'PaginationBookmarkEdge';
  readonly cursor: Scalars['PaginationCursor'];
  readonly node: Bookmark;
};

export type PaginationBookmarks = {
  readonly __typename?: 'PaginationBookmarks';
  readonly edges: ReadonlyArray<PaginationBookmarkEdge>;
  readonly pageInfo: PaginationPageInfo;
};


/** Pagination Order (ASC or DESC) */
export enum PaginationOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}

/** Pagination OrderBy */
export enum PaginationOrderBy {
  LATEST = 'LATEST',
  LIKE_COUNT = 'LIKE_COUNT'
}

export type PaginationPageInfo = {
  readonly __typename?: 'PaginationPageInfo';
  readonly endCursor?: Maybe<Scalars['PaginationCursor']>;
  readonly hasNextPage: Scalars['Boolean'];
};

export type Query = {
  readonly __typename?: 'Query';
  readonly me: User;
  readonly myBookmarks: ReadonlyArray<Bookmark>;
  readonly paginationBookmarks?: Maybe<PaginationBookmarks>;
};


export type QuerypaginationBookmarksArgs = {
  getPaginationBookmarksInput: GetPaginationBookmarksInput;
};

export type User = {
  readonly __typename?: 'User';
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly deletedAt: Scalars['DateTime'];
  readonly email?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly oauthUsers: ReadonlyArray<OAuthUser>;
  readonly provider: AuthProviders;
  readonly providerId: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
};
