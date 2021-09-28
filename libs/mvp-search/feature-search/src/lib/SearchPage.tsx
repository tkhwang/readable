import React, { useState } from 'react';
import { useSearchText } from '@readable/mvp-search/data-access-search';

export function SearchPage() {
  const [searchText, setSearchText] = useState('');
  const { allUrlInfosBySearch, loading, error } = useSearchText(searchText);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  return (
    <>
      <form>
        <label>
          Search:
          <input type="text" value={searchText} onChange={handleChange} placeholder="Type text for searching..." />
        </label>
      </form>
      {allUrlInfosBySearch &&
        allUrlInfosBySearch.map(urlInfo => {
          const { url, title, siteName, description } = urlInfo;
          return (
            <div className="p-10">
              <div className="max-w-2xl rounded overflow-hidden shadow-lg border-2 border-gray-200 hover:border-blue-500">
                <a href={url}>
                  <div className="px-6 py-4">{title}</div>
                  <div className="px-6 py-4">{siteName}</div>
                  <p className="text-gray-700 text-base">
                    <h1>{description}</h1>
                  </p>
                </a>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default SearchPage;
