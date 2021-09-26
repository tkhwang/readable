import React from 'react';
import { usePaginationTags } from '@readable/mvp-tag/data-access-tag';
import { MvpTagIputTag } from '@readable/mvp-tag/input-tag';

export function TagPage() {
  const { paginationTags, loading, error } = usePaginationTags();

  const defaultTagImage = 'https://readable-2021-dev.s3.ap-northeast-2.amazonaws.com/tags/deault.jpg';

  return (
    <>
      <MvpTagIputTag />
      {paginationTags?.edges &&
        paginationTags.edges.length > 0 &&
        paginationTags.edges.map(edge => {
          const { id, tag, normalizedTag, imageUrl, description } = edge.node;

          return (
            <div className="p-10">
              <div className="max-w-xl rounded overflow-hidden shadow-lg border-2 border-gray-200 hover:border-blue-500">
                <div className="px-6 pt-4 pb-2">{normalizedTag}</div>
                <img src={imageUrl || defaultTagImage} className="image" alt="tag" />
              </div>
            </div>
          );
        })}
    </>
  );
}

export default TagPage;
