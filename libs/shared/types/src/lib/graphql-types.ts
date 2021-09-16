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
  /** User interest which includes bookmarks. */
  readonly interest: ReadonlyArray<Scalars['String']>;
  /** Tag ids */
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']>>;
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
  readonly interest: Interest;
  /** User interest which includes bookmarks. */
  readonly interestId: ReadonlyArray<Scalars['String']>;
  readonly schedulers?: Maybe<ReadonlyArray<User>>;
  readonly siteName: Scalars['String'];
  readonly summary?: Maybe<Scalars['String']>;
  /** tag ids */
  readonly tagIds?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly tags: ReadonlyArray<Tag>;
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
  /** User interest which includes bookmarks. */
  readonly interestId: ReadonlyArray<Scalars['String']>;
  readonly siteName: Scalars['String'];
  readonly summary?: Maybe<Scalars['String']>;
  /** tag ids */
  readonly tagIds?: Maybe<ReadonlyArray<Scalars['String']>>;
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

export type DeleteUserBookmarkWithAuthInput = {
  readonly userBookmarkId: Scalars['String'];
};

export type FindOrAddInterestWithAuthInput = {
  /** Interest text */
  readonly interest: Scalars['String'];
};

export type FollowUserWithAuthInput = {
  /** Following User id */
  readonly followingUserId: Scalars['String'];
};

export type FollowUserWithAuthOutput = {
  readonly __typename?: 'FollowUserWithAuthOutput';
  /** Follow response data */
  readonly data: FollowUserWithAuthOutputData;
  /** Common output */
  readonly isSuccess: Scalars['Boolean'];
};

export type FollowUserWithAuthOutputData = {
  readonly __typename?: 'FollowUserWithAuthOutputData';
  /** Following User */
  readonly followingUser: User;
};

export type GetPaginationUserBookmarksInput = {
  readonly after?: Maybe<Scalars['PaginationCursor']>;
  readonly first?: Maybe<Scalars['Int']>;
  /** Pagination userBookmark filter: interest (in user bookmarks) */
  readonly interestId?: Maybe<Scalars['String']>;
  /** Pagination bookmarks order field */
  readonly order?: Maybe<PaginationOrder>;
  /** Pagination bookmarks orderBy field */
  readonly orderBy?: Maybe<PaginationOrderBy>;
  /** Pagination userBookmark filter: tag (in all users bookmarks) */
  readonly tagId?: Maybe<Scalars['String']>;
};

export type Interest = {
  readonly __typename?: 'Interest';
  readonly createdAt: Scalars['DateTime'];
  readonly deletedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly interest: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
  readonly userId: Scalars['String'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly addBookmarkInGoogleEventsWithAuth: CommonOutput;
  readonly addBookmarkWithAuth: Bookmark;
  readonly deleteBookmarkWithAuth: CommonOutput;
  readonly deleteUserBookmarkWithAuth: CommonOutput;
  readonly findOrAddInterestWithAuth: Interest;
  readonly followUserWithAuth: FollowUserWithAuthOutput;
  readonly unfollowUserWithAuth: UnfollowUserWithAuthOutput;
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


export type MutationdeleteUserBookmarkWithAuthArgs = {
  deleteUserBookmarkWithAuthInput: DeleteUserBookmarkWithAuthInput;
};


export type MutationfindOrAddInterestWithAuthArgs = {
  findOrAddInterestWithAuthInput: FindOrAddInterestWithAuthInput;
};


export type MutationfollowUserWithAuthArgs = {
  followUserWithAuthInput: FollowUserWithAuthInput;
};


export type MutationunfollowUserWithAuthArgs = {
  unfollowUserWithAuthInput: UnfollowUserWithAuthInput;
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

export type PaginationUserBookmarkBRFOEdge = {
  readonly __typename?: 'PaginationUserBookmarkBRFOEdge';
  readonly cursor: Scalars['PaginationCursor'];
  readonly node: UserBookmarkBRFO;
};

export type PaginationUserBookmarkEdge = {
  readonly __typename?: 'PaginationUserBookmarkEdge';
  readonly cursor: Scalars['PaginationCursor'];
  readonly node: UserBookmark;
};

export type PaginationUserBookmarks = {
  readonly __typename?: 'PaginationUserBookmarks';
  readonly edges: ReadonlyArray<PaginationUserBookmarkEdge>;
  readonly pageInfo: PaginationPageInfo;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly me: User;
  readonly myBookmarks: ReadonlyArray<Bookmark>;
  readonly myInterests: ReadonlyArray<Interest>;
  readonly myUserBookmarks: ReadonlyArray<UserBookmark>;
  readonly paginationBookmarks?: Maybe<PaginationBookmarks>;
  readonly paginationUserBookmarks?: Maybe<PaginationUserBookmarks>;
};


export type QuerypaginationBookmarksArgs = {
  after?: Maybe<Scalars['PaginationCursor']>;
  first?: Maybe<Scalars['Int']>;
  order?: Maybe<PaginationOrder>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QuerypaginationUserBookmarksArgs = {
  getPaginationUserBookmarksInput: GetPaginationUserBookmarksInput;
};

export type Tag = {
  readonly __typename?: 'Tag';
  readonly createdAt: Scalars['DateTime'];
  readonly deletedAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly tag: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
};

export type UnfollowUserWithAuthInput = {
  /** Unfollowing User id */
  readonly followingUserId: Scalars['String'];
};

export type UnfollowUserWithAuthOutput = {
  readonly __typename?: 'UnfollowUserWithAuthOutput';
  readonly data: UnfollowUserWithAuthOutputData;
  /** Common output */
  readonly isSuccess: Scalars['Boolean'];
};

export type UnfollowUserWithAuthOutputData = {
  readonly __typename?: 'UnfollowUserWithAuthOutputData';
  /** Following User */
  readonly followingUser: User;
};

export type UrlInfo = {
  readonly __typename?: 'UrlInfo';
  readonly createdAt: Scalars['DateTime'];
  readonly deletedAt: Scalars['DateTime'];
  /** Description */
  readonly description?: Maybe<Scalars['String']>;
  readonly howMany: Scalars['Int'];
  readonly id: Scalars['ID'];
  /** Image url */
  readonly imageUrl?: Maybe<Scalars['String']>;
  /** Site name */
  readonly siteName?: Maybe<Scalars['String']>;
  /** Summary */
  readonly summary?: Maybe<Scalars['String']>;
  /** Title */
  readonly title?: Maybe<Scalars['String']>;
  /** Type : website, article, ... */
  readonly type?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  /** URL */
  readonly url: Scalars['String'];
  /** URL Hash */
  readonly urlHash: Scalars['String'];
};

export type User = {
  readonly __typename?: 'User';
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly deletedAt: Scalars['DateTime'];
  readonly email?: Maybe<Scalars['String']>;
  readonly followersCount: Scalars['Float'];
  /** Followings User count */
  readonly followingsCount: Scalars['Float'];
  readonly id: Scalars['ID'];
  readonly latestInterestId?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly oauthUsers: ReadonlyArray<OAuthUser>;
  readonly provider: AuthProviders;
  readonly providerId: Scalars['String'];
  readonly timezone: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
};

export type UserBookmark = {
  readonly __typename?: 'UserBookmark';
  readonly createdAt: Scalars['DateTime'];
  readonly deletedAt: Scalars['DateTime'];
  readonly donedAt?: Maybe<Scalars['DateTime']>;
  readonly id: Scalars['ID'];
  readonly interest: Interest;
  readonly scheduledAt?: Maybe<Scalars['DateTime']>;
  /** Tags */
  readonly tags: ReadonlyArray<Tag>;
  readonly updatedAt: Scalars['DateTime'];
  /** URL hash */
  readonly urlHash: Scalars['String'];
  readonly urlInfo: UrlInfo;
  readonly userId: Scalars['String'];
};

export type UserBookmarkBRFO = {
  readonly __typename?: 'UserBookmarkBRFO';
  readonly createdAt: Scalars['DateTime'];
  readonly deletedAt: Scalars['DateTime'];
  readonly donedAt?: Maybe<Scalars['DateTime']>;
  readonly id: Scalars['ID'];
  readonly interest: Interest;
  readonly scheduledAt?: Maybe<Scalars['DateTime']>;
  /** Tags */
  readonly tags: ReadonlyArray<Tag>;
  readonly updatedAt: Scalars['DateTime'];
  /** URL hash */
  readonly urlHash: Scalars['String'];
  readonly urlInfo: UrlInfo;
  readonly userId: Scalars['String'];
};
