import { gql } from '@apollo/client';
import { useRecommendUsersOnCollectionQuery } from './useRecommendUsers.query.generated';

const graphql = gql`
  query RecommendUsersOnCollection {
    recommendUsers {
      id
      name
    }
  }
`;

export function useDataAccessRecommendUsers() {
  const { data: recommendUsersData, loading: isRecommendUsersDataLoading } = useRecommendUsersOnCollectionQuery();

  return { recommendUsers: recommendUsersData?.recommendUsers, isRecommendUsersDataLoading };
}
