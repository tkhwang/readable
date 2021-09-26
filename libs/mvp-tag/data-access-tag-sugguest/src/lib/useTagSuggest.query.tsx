import { gql } from '@apollo/client';
import { useTagSuggestionQuery } from './useTagSuggest.query.generated';

const GET_TAG_SUGGEST = gql`
  query TagSuggestion($suggestTagInput: SuggestTagInput!) {
    tagSuggestion(suggestTagInput: $suggestTagInput) {
      id
      tag
      normalizedTag
    }
  }
`;

export function useTagSuggest(query: string) {
  const { data, loading, error } = useTagSuggestionQuery({
    variables: {
      suggestTagInput: {
        query,
      },
    },
    fetchPolicy: 'network-only',
  });

  const tagSuggest = data?.tagSuggestion;

  return {
    tagSuggest,
    loading,
    error,
  };
}
