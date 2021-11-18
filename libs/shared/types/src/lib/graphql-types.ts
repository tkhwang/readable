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

/** Auth providers */
export enum AuthProviders {
  Facebook = 'Facebook',
  Github = 'Github',
  Google = 'Google'
}

export type CommonOutput = {
  readonly __typename?: 'CommonOutput';
  /** 공통 Response (output) */
  readonly isSuccess: Scalars['Boolean'];
};


export type DeleteUserBookmarkWithAuthInput = {
  readonly userBookmarkId: Scalars['String'];
};

export type FindMyUserBookmarksGroupedByInterestData = {
  readonly __typename?: 'FindMyUserBookmarksGroupedByInterestData';
  readonly interest: Scalars['String'];
  readonly interestId: Scalars['String'];
};

export type FindMyUserBookmarksGroupedByInterestsInput = {
  readonly limitOfInterests?: Maybe<Scalars['Float']>;
  readonly limitOfUserBookmarks?: Maybe<Scalars['Float']>;
};

export type FindMyUserBookmarksGroupedByInterestsOutput = {
  readonly __typename?: 'FindMyUserBookmarksGroupedByInterestsOutput';
  readonly interest: FindMyUserBookmarksGroupedByInterestData;
  readonly userBookmarks: ReadonlyArray<UserBookmark>;
};

export type FindOrAddInterestWithAuthInput = {
  /** Interest text */
  readonly interest: Scalars['String'];
};

export type FindPopularTagsWithAuthInput = {
  readonly howMany: Scalars['Float'];
};

export type FindUsersHavingManyFollowersWithAuthInput = {
  readonly howMany: Scalars['Float'];
};

export type FindUsersHavingManyUserBookmarksWithAuthInput = {
  readonly howMany: Scalars['Float'];
};

export type FollowTagWithAuthInput = {
  readonly tagId: Scalars['String'];
};

export type FollowTagWithAuthOutput = {
  readonly __typename?: 'FollowTagWithAuthOutput';
  readonly isSuccess: Scalars['Boolean'];
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

export type GetUserProfileInput = {
  readonly userId: Scalars['String'];
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
  readonly deleteUserBookmarkWithAuth: CommonOutput;
  readonly findOrAddInterestWithAuth: Interest;
  readonly followTagWithAuth: FollowTagWithAuthOutput;
  readonly followUserWithAuth: FollowUserWithAuthOutput;
  readonly setNickName: User;
  readonly syncGoogleCalendarWithAuth: CommonOutput;
  readonly unfollowUserWithAuth: UnfollowUserWithAuthOutput;
};


export type MutationdeleteUserBookmarkWithAuthArgs = {
  deleteUserBookmarkWithAuthInput: DeleteUserBookmarkWithAuthInput;
};


export type MutationfindOrAddInterestWithAuthArgs = {
  findOrAddInterestWithAuthInput: FindOrAddInterestWithAuthInput;
};


export type MutationfollowTagWithAuthArgs = {
  followTagWithAuthInput: FollowTagWithAuthInput;
};


export type MutationfollowUserWithAuthArgs = {
  followUserWithAuthInput: FollowUserWithAuthInput;
};


export type MutationsetNickNameArgs = {
  setNickNameInput: SetNickNameInput;
};


export type MutationsyncGoogleCalendarWithAuthArgs = {
  syncGoogleCalendarWithAuthInput: SyncGoogleCalendarWithAuthInput;
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

export type PaginationTagBRFOEdge = {
  readonly __typename?: 'PaginationTagBRFOEdge';
  readonly cursor: Scalars['PaginationCursor'];
  readonly node: Tag;
};

export type PaginationTags = {
  readonly __typename?: 'PaginationTags';
  readonly edges: ReadonlyArray<PaginationTagsEdge>;
  readonly pageInfo: PaginationPageInfo;
};

export type PaginationTagsEdge = {
  readonly __typename?: 'PaginationTagsEdge';
  readonly cursor: Scalars['PaginationCursor'];
  readonly node: Tag;
};

export type PaginationUserBookmarkBRFOEdge = {
  readonly __typename?: 'PaginationUserBookmarkBRFOEdge';
  readonly cursor: Scalars['PaginationCursor'];
  readonly node: UserBookmark;
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
  readonly allUrlInfosBySearch?: Maybe<ReadonlyArray<UrlInfo>>;
  readonly allUserBookmarksBySearch?: Maybe<ReadonlyArray<UserBookmark>>;
  readonly me: User;
  readonly myInterests: ReadonlyArray<Interest>;
  readonly myUserBookmarks: ReadonlyArray<UserBookmark>;
  readonly myUserBookmarksGroupedByInterests: ReadonlyArray<FindMyUserBookmarksGroupedByInterestsOutput>;
  readonly paginationRecommendedUserBookmarksByTags?: Maybe<PaginationUserBookmarks>;
  readonly paginationTags?: Maybe<PaginationTags>;
  readonly paginationUserBookmarks?: Maybe<PaginationUserBookmarks>;
  readonly popularTags?: Maybe<ReadonlyArray<Tag>>;
  readonly recommendUsers: ReadonlyArray<User>;
  readonly tagSuggestion?: Maybe<ReadonlyArray<Tag>>;
  readonly userProfile: User;
  readonly usersHavingManyFollowers: ReadonlyArray<User>;
  readonly usersHavingManyUserBookmarks: ReadonlyArray<User>;
};


export type QueryallUrlInfosBySearchArgs = {
  searchByTextInAllUrlinfosInput: SearchByTextInAllUrlinfosInput;
};


export type QueryallUserBookmarksBySearchArgs = {
  searchByTextInAllUserBookmarksInput: SearchByTextInAllUserBookmarksInput;
};


export type QuerymyUserBookmarksGroupedByInterestsArgs = {
  findMyUserBookmarksGroupedByInterestsInput: FindMyUserBookmarksGroupedByInterestsInput;
};


export type QuerypaginationRecommendedUserBookmarksByTagsArgs = {
  after?: Maybe<Scalars['PaginationCursor']>;
  first?: Maybe<Scalars['Int']>;
  order?: Maybe<PaginationOrder>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QuerypaginationTagsArgs = {
  after?: Maybe<Scalars['PaginationCursor']>;
  first?: Maybe<Scalars['Int']>;
  order?: Maybe<PaginationOrder>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QuerypaginationUserBookmarksArgs = {
  after?: Maybe<Scalars['PaginationCursor']>;
  first?: Maybe<Scalars['Int']>;
  interestId?: Maybe<Scalars['String']>;
  myReadUserBookmark?: Maybe<Scalars['Boolean']>;
  myUserBookmark?: Maybe<Scalars['Boolean']>;
  order?: Maybe<PaginationOrder>;
  orderBy?: Maybe<PaginationOrderBy>;
  tagId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};


export type QuerypopularTagsArgs = {
  findPopularTagsWithAuthInput: FindPopularTagsWithAuthInput;
};


export type QuerytagSuggestionArgs = {
  suggestTagInput: SuggestTagInput;
};


export type QueryuserProfileArgs = {
  getUserProfileInput: GetUserProfileInput;
};


export type QueryusersHavingManyFollowersArgs = {
  findUsersHavingManyFollowersWithAuthInput: FindUsersHavingManyFollowersWithAuthInput;
};


export type QueryusersHavingManyUserBookmarksArgs = {
  findUsersHavingManyUserBookmarksWithAuthInput: FindUsersHavingManyUserBookmarksWithAuthInput;
};

export type SearchByTextInAllUrlinfosInput = {
  readonly query: Scalars['String'];
};

export type SearchByTextInAllUserBookmarksInput = {
  readonly query: Scalars['String'];
};

export type SetNickNameInput = {
  readonly nickName: Scalars['String'];
};

export type SuggestTagInput = {
  /** Query text for tag suggestion */
  readonly query: Scalars['String'];
};

export type SyncGoogleCalendarWithAuthInput = {
  /** Sync userBookmark with Google calendar */
  readonly urlInfo: SyncGoogleCalendarWithAuthUrlInfo;
};

export type SyncGoogleCalendarWithAuthUrlInfo = {
  readonly scheduledAt?: Maybe<Scalars['DateTime']>;
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
};

export type Tag = {
  readonly __typename?: 'Tag';
  readonly categoryId?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly deletedAt: Scalars['DateTime'];
  readonly description?: Maybe<Scalars['String']>;
  /** Tag followers User count (resolver field) */
  readonly followersCount: Scalars['Float'];
  readonly id: Scalars['ID'];
  readonly imageUrl?: Maybe<Scalars['String']>;
  readonly isFollowingTag: Scalars['Boolean'];
  readonly normalizedTag: Scalars['String'];
  readonly tag: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
  readonly userBookmarks: ReadonlyArray<UserBookmark>;
  /** Tagged post count (resolver field) */
  readonly userBookmarksCount: Scalars['Float'];
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
  /** Site favicon */
  readonly favicon?: Maybe<Scalars['String']>;
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
  /** Followings User count (field resolver) */
  readonly followingsCount: Scalars['Float'];
  readonly id: Scalars['ID'];
  /** Whether I follow this user or not (field resolver) */
  readonly isFollowingUser: Scalars['Boolean'];
  readonly latestInterestId?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly nickName?: Maybe<Scalars['String']>;
  readonly oauthUsers: ReadonlyArray<OAuthUser>;
  readonly provider: AuthProviders;
  readonly providerId: Scalars['String'];
  /** Tags */
  readonly tags: ReadonlyArray<Tag>;
  readonly timezone: Scalars['String'];
  readonly updatedAt: Scalars['DateTime'];
};

export type UserBookmark = {
  readonly __typename?: 'UserBookmark';
  /** User who bookmarked this url (field resolver) */
  readonly bookmarkers: ReadonlyArray<User>;
  /** Number of user who bookmarked this url (field resolver) */
  readonly bookmarkersCount: Scalars['Float'];
  readonly createdAt: Scalars['DateTime'];
  readonly deletedAt: Scalars['DateTime'];
  readonly donedAt?: Maybe<Scalars['DateTime']>;
  readonly id: Scalars['ID'];
  readonly interest: Interest;
  readonly isPrivate: Scalars['Boolean'];
  /** User who read this url (field resolver) */
  readonly readers: ReadonlyArray<User>;
  /** Number of user who read this url (field resolver) */
  readonly readersCount: Scalars['Float'];
  readonly scheduledAt?: Maybe<Scalars['DateTime']>;
  /** Tags */
  readonly tags: ReadonlyArray<Tag>;
  readonly updatedAt: Scalars['DateTime'];
  /** URL hash */
  readonly urlHash: Scalars['String'];
  readonly urlInfo: UrlInfo;
  readonly userId: Scalars['String'];
};
