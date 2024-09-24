import { useState, useEffect } from 'react';
import CharacterSearch from './CharacterSearch';

const CharacterList = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 10; // Personajes por Pagina

  // Funcion para obtener todos los personajes de la API
  const fetchAllCharacters = async () => {
    let characters = [];
    let page = 1;

    while (true) {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      characters = [...characters, ...data.results];

      // Si no hay mas personajes sale del bucle
      if (!data.info.next) break;
      page++;
    }

    setAllCharacters(characters);
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  // Filtrar personajes
  const filteredCharacters = allCharacters.filter(character =>
    character.name.toLowerCase().includes(searchCharacter.toLowerCase())
  );


  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-10 mt-20 text-white">Rick And Morty Characters API</h1>

      <CharacterSearch searchCharacter={searchCharacter} setSearchCharacter={setSearchCharacter}/>

      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
  {currentCharacters.map(item => (
    <div key={item.id} className="bg-zinc-700 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow flex flex-col items-center sm:items-stretch">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <div className="text-center sm:text-left">
        <h2 className="text-xl font-extrabold text-white mb-2">
          <a href={`https://rickandmortyapi.com/api/character/${item.id}`} className='hover:text-orange-500'>
            {item.name}
          </a>
        </h2>
        <div className="space-y-2">
          <div className="flex justify-center sm:justify-start items-center">
            <div
              className={`w-2.5 h-2.5 rounded-full ${item.status === 'Alive' ? 'bg-green-500 shadow-[0_0_10px_2px_rgba(34,197,94,0.5)] animate-pulse-green' : 'bg-red-500 shadow-[0_0_10px_2px_rgba(239,68,68,0.5)] animate-pulse-red'}`}
              title={item.status} // Muestra el estado al pasar el mouse
            ></div>
            <span className="ml-2 text-sm text-white font-semibold">{item.status} - {item.species}</span>
          </div>
          <span className="block text-md text-zinc-400 font-semibold ">Last known location:</span>
          <span className="block text-lg text-white font-semibold hover:text-orange-500"><a href={item.location.url}>{item.location.name}</a></span>
          <span className="block text-md text-zinc-400 font-semibold ">Origin:</span>
          <span className="block text-lg text-white font-semibold hover:text-orange-500"><a href={item.origin.url}>{item.origin.name}</a></span>
        </div>
      </div>
    </div>
  ))}
</div>

      <div className="flex flex-col justify-center items-center mt-10 mb-20 font-semibold">
         <a href="https://github.com/matias2r/rickandmortyApi-React" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            className="filter invert w-5 mb-2" 
            alt="GitHub Icon" 
          />
        </a>
        <span className='text-zinc-400'>
          ❮❯ by <a href="https://github.com/matias2r" target="_blank" rel="noopener noreferrer" className='text-white'>Matias Espinoza</a> 2024
        </span>
      </div>

    </>
  );
};

export default CharacterList;
