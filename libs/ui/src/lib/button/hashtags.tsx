import { Hashtag } from './hashtag';

export interface HashtagsProps {
  hashtagNames: { key: string; name: string }[];
}

export function Hashtags({ hashtagNames }: HashtagsProps) {
  return (
    <div className="flex flex-wrap">
      {hashtagNames.map(({ key, name }) => {
        return (
          <div key={key} className="pr-2 pb-2">
            <Hashtag>{name}</Hashtag>
          </div>
        );
      })}
    </div>
  );
}
