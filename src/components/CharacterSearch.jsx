import React from 'react';

const CharacterSearch = ({ searchCharacter, setSearchCharacter }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search characters..."
          value={searchCharacter}
          onChange={(e) => setSearchCharacter(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>
    </div>
  );
};

export default CharacterSearch;
