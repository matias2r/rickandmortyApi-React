const CharacterModal = ({ isOpen, onClose, character }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-zinc-700 p-6 rounded-lg shadow-lg relative text-white">
          <button className="absolute top-2 right-2 font-semibold hover:text-orange-500 transition delay-50" onClick={onClose}>
            Close
          </button>
          <div className="flex justify-center sm:justify-start items-center">
              <h1 className="text-xl font-bold hover:text-orange-500 mr-2">{character.name}</h1>
              <div
              className={`w-2.5 h-2.5 rounded-full ${character.status === 'Alive' ? 'bg-green-500 shadow-md animate-pulse-green' 
              : character.status === 'Dead' ? 'bg-red-500 shadow-md animate-pulse-red'
              : 'bg-zinc-500 shadow-md'} `}
              title={character.status} // Muestra el estado al pasar el mouse
            ></div>
          </div>
          <img src={character.image} alt={character.name} className="w-full h-48 object-cover rounded-lg mb-4" />
          <p className="font-semibold">Status: {character.status}</p>
          <p className="font-semibold">Species: {character.species}</p>
          <p className="font-semibold">Origin: {character.location.name}</p>
          <p className="font-semibold">Last known location: {character.origin.name}</p>
          <p className="font-semibold">Episodes: {character.episode.length}</p>
        </div>
      </div>
    );
  };
  
  export default CharacterModal;
  