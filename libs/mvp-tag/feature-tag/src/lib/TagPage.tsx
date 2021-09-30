import React from 'react';
import { useFollowTag, usePaginationTags } from '@readable/mvp-tag/data-access-tag';
import { MvpTagIputTag } from '@readable/mvp-tag/input-tag';
import { useMe } from '@readable/shared/data-access-me';

export function TagPage() {
  const { me } = useMe({ redirectTo: '/login' });
  const { paginationTags, loading, error } = usePaginationTags();
  const { followTagWithAuthMutation } = useFollowTag();

  const defaultTagImage = 'https://readable-2021-dev.s3.ap-northeast-2.amazonaws.com/tags/deault.jpg';

  const handleFollowTag = async (tagId: any) => {
    console.log('TCL: handleFollowTag -> tagId', tagId);

    await followTagWithAuthMutation({
      variables: {
        followTagWithAuthInput: { tagId },
      },
    });
  };

  return (
    <>
      <MvpTagIputTag />
      <div className="text-2xl"> 🏷️ MyTags:</div>
      <ul>
        {me?.tags &&
          me?.tags.length > 0 &&
          me?.tags.map(tag => {
            return <li className="text-xl m-3">{tag.tag}</li>;
          })}
      </ul>
      <div className="text-2xl">Reference: All tags</div>
      {paginationTags?.edges &&
        paginationTags.edges.length > 0 &&
        paginationTags.edges.map(edge => {
          const {
            id,
            tag,
            normalizedTag,
            imageUrl,
            description,
            followersCount,
            userBookmarksCount,
            isFollowingTag,
          } = edge.node;

          return (
            <div className="p-10">
              <div className="max-w-md rounded overflow-hidden shadow-lg border-2 border-gray-200">
                <div className="flex">
                  <div className="px-20 pt-4 pb-2">{normalizedTag}</div>
                  {!isFollowingTag && (
                    <button
                      className="bg-blue-500  text-white font-bold py-1 px-6 rounded"
                      onClick={() => handleFollowTag(id)}
                    >
                      follow
                    </button>
                  )}
                </div>
                <img src={imageUrl || defaultTagImage} className="image" alt="tag" />
                <ul>
                  <li>userBookmarksCount: {userBookmarksCount}</li>
                  <li>followersCount: {followersCount}</li>
                </ul>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default TagPage;
