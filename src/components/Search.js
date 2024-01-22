import React from 'react'
import { useGlobalContext } from '../context/context'

const Search = () => {

  const { query, setQuery, isError } = useGlobalContext();


  return (
    <>
      <section className='flex flex-col items-center'>
        <h2 className='font-bold mt-12 text-3xl text-yellow-500'>Search Your Favourite Movie</h2>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder='search movies'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='border-2 border-black rounded-lg mt-8 py-1 px-2'
            />
          </div>
        </form>
        <div>
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  )
}

export default Search