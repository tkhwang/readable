import React, { useState } from 'react';

type Props = {};

export function MvpTagIputTag(props: Props) {
  const [name, setName] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    alert(`Submitting Name ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tag:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
    </form>
  );
}
