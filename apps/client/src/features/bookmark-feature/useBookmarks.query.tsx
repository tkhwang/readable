import { gql } from '@apollo/client';
import { ViewModel } from '@readable/src/types/ViewModel';

import { useGetAnonymousBookmarksQuery, useGetMyBookmarksQuery } from './useBookmarks.query.generated';

const GET_MY_BOOKMARKS = gql`
  query GetMyBookmarks {
    myBookmarks: myBookmarks {
      url
      type
      siteName
      title
      imageUrl
      description
      tags
    }
  }
`;

const GET_ANONYMOUS_BOOKMARKS = gql`
  query GetAnonymousBookmarks {
    anonymousBookmarks: anonymousBookmarks {
      url
      type
      siteName
      title
      imageUrl
      description
      tags
    }
  }
`;

export type BookmarksViewModel = ViewModel<typeof useBookmarks>;

export function useBookmarks() {
  const { data: dataMyBookmarks } = useGetMyBookmarksQuery();

  const { data: dataAnonymousBookmarks, loading, error } = useGetAnonymousBookmarksQuery();

  const myBookmarks = dataMyBookmarks?.myBookmarks ?? [];
  const anonymousBookmarks = dataAnonymousBookmarks?.anonymousBookmarks ?? [];

  return {
    myBookmarks,
    anonymousBookmarks,
    loading,
    error,
  };
}
