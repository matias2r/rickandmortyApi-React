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
  const filteredCharacters = allCharacters.filter(character => character.name.toLowerCase().includes(searchCharacter.toLowerCase()));

  // Filtrar locaciones
  const filteredLocations = Array.from(new Set(filteredCharacters.map(character => character.location.name)));

  // Filtrar episodios
  const filteredEpisodes = Array.from(new Set(filteredCharacters.flatMap(character => character.episode.map(ep => ep.split('/').pop()))));

  // Calcula el indice de paginacion (Primer y ultimo indice)
  const indexOfLastCharacter = currentPage * charactersPerPage; 
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage; 
  const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  // Cambiar pagina de listado de personajes
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredCharacters.length / charactersPerPage)) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-10 mt-20 text-white">Rick And Morty Characters API</h1>
        <div className='flex justify-center mt-10 space-x-4 mb-10'>
        <a className='bg-orange-500 font-bold text-white py-2 px-4 rounded disabled:opacity-50 hover:bg-orange-700 transition duration-300'
           href='https://rickandmortyapi.com/documentation' target="_blank" rel="noopener noreferrer">
          <span>View Docs from Official Website's API</span>
        </a>
        </div>
      <CharacterSearch searchCharacter={searchCharacter} setSearchCharacter={setSearchCharacter}/>


      <div className="flex justify-center mt-10 space-x-4 mb-10 text-center text-sm font-semibold text-white mb-4">
          <span className='text-zinc-400 uppercase font-bold hover:text-orange-500 transition duration-300'>
            <a href="https://rickandmortyapi.com/api/character" target="_blank" rel="noopener noreferrer">Total Characters: {filteredCharacters.length}</a>
          </span>

          <span className='text-zinc-400 uppercase font-bold hover:text-orange-500 transition duration-300'>
            <a href="https://rickandmortyapi.com/api/location" target="_blank" rel="noopener noreferrer">Total Locations: {filteredLocations.length}</a>
          </span>

          <span className='text-zinc-400 uppercase font-bold hover:text-orange-500 transition duration-300'>
            <a href="https://rickandmortyapi.com/api/episode" target="_blank" rel="noopener noreferrer">Total Episodes: {filteredEpisodes.length}</a>
          </span>
      </div>

      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
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

      <div className="flex justify-center mt-10 space-x-4 mb-10">
        <button onClick={prevPage} className="bg-orange-500 font-bold text-white py-2 px-4 rounded disabled:opacity-50 hover:bg-orange-700 transition duration-300" disabled={currentPage === 1}>Previous</button>
        <button onClick={nextPage} className="bg-orange-500 font-bold text-white py-2 px-4 rounded disabled:opacity-50 hover:bg-orange-700 transition duration-300" disabled={currentPage >= Math.ceil(filteredCharacters.length / charactersPerPage)}>Next</button>
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
          ❮❯ by <a href="https://github.com/matias2r" target="_blank" rel="noopener noreferrer" className='text-white hover:text-orange-500 transition duration-200'>Matias Espinoza</a> 2024
        </span>
      </div>



    </>
  );
};

export default CharacterList;
