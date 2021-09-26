import React, { useState } from 'react';
import { useTagSuggest } from '@readable/mvp-tag/data-access-tag-sugguest';

type Props = {};

export function MvpTagIputTag(props: Props) {
  const [name, setName] = useState('');

  const { tagSuggest } = useTagSuggest(name);
  console.log('TCL: tagSuggest', tagSuggest);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setName(event.target.value);
  };

  return (
    <form>
      <label>
        Tag:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <div className="text-2xl">
        Suggested Tags:
        <ul>{tagSuggest && tagSuggest?.length > 0 && tagSuggest.map(tag => <li>{tag.tag}</li>)}</ul>
      </div>
    </form>
  );
}
