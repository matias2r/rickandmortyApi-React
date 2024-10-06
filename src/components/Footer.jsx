const Footer = () => {

    return (
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
    )
}

export default Footer