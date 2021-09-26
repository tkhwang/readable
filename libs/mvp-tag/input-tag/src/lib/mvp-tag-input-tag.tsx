import React, { useState } from 'react';

type Props = {};

export function MvpTagIputTag(props: Props) {
  const [name, setName] = useState('');

  return (
    <form>
      <label>
        Tag:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
    </form>
  );
}
