import React from 'react';
import { usePaginationTags } from '@readable/mvp-tag/data-access-tag';

export function TagPage() {
  const { paginationTags, loading, error } = usePaginationTags();

  return (
    <div>
      {paginationTags?.edges &&
        paginationTags.edges.length > 0 &&
        paginationTags?.edges.map(edge => {
          const { id, tag, normalizedTag, imageUrl, description } = edge.node;

          return (
            <div className="p-10">
              <div className="max-w-2xl rounded overflow-hidden shadow-lg border-2 border-gray-200 hover:border-blue-500">
                <div className="px-6 pt-4 pb-2">{normalizedTag}</div>
                <img src={imageUrl} className="image" alt="tag" />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TagPage;
