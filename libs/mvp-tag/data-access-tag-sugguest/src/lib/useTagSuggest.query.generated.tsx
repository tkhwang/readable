import * as Types from '../../../../shared/types/src/lib/graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type TagSuggestionQueryVariables = Types.Exact<{
  suggestTagInput: Types.SuggestTagInput;
}>;


export type TagSuggestionQuery = (
  { readonly __typename?: 'Query' }
  & { readonly tagSuggestion?: Types.Maybe<ReadonlyArray<(
    { readonly __typename?: 'Tag' }
    & Pick<Types.Tag, 'id' | 'tag' | 'normalizedTag'>
  )>> }
);


export const TagSuggestionDocument = gql`
    query TagSuggestion($suggestTagInput: SuggestTagInput!) {
  tagSuggestion(suggestTagInput: $suggestTagInput) {
    id
    tag
    normalizedTag
  }
}
    `;
export type TagSuggestionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TagSuggestionQuery, TagSuggestionQueryVariables>, 'query'> & ({ variables: TagSuggestionQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TagSuggestionComponent = (props: TagSuggestionComponentProps) => (
      <ApolloReactComponents.Query<TagSuggestionQuery, TagSuggestionQueryVariables> query={TagSuggestionDocument} {...props} />
    );
    

/**
 * __useTagSuggestionQuery__
 *
 * To run a query within a React component, call `useTagSuggestionQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagSuggestionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagSuggestionQuery({
 *   variables: {
 *      suggestTagInput: // value for 'suggestTagInput'
 *   },
 * });
 */
export function useTagSuggestionQuery(baseOptions: Apollo.QueryHookOptions<TagSuggestionQuery, TagSuggestionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagSuggestionQuery, TagSuggestionQueryVariables>(TagSuggestionDocument, options);
      }
export function useTagSuggestionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagSuggestionQuery, TagSuggestionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagSuggestionQuery, TagSuggestionQueryVariables>(TagSuggestionDocument, options);
        }
export type TagSuggestionQueryHookResult = ReturnType<typeof useTagSuggestionQuery>;
export type TagSuggestionLazyQueryHookResult = ReturnType<typeof useTagSuggestionLazyQuery>;
export type TagSuggestionQueryResult = Apollo.QueryResult<TagSuggestionQuery, TagSuggestionQueryVariables>;