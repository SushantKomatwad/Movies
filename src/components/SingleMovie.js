import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import { API_URL } from '../context/context';

const SingleMovie = () => {

  const { id } = useParams();

  const [isLoading, setIsLoading, setIsError] = useState(true);
  const [movie, setMovie] = useState('');

  const getAllMovies = async (url) => {

    setIsLoading(true);

    try {
      const response = await axios.get(url);
      const result = response.data;
      console.log(result);
      if (result.Response === "True") {
        setIsLoading(false);
        setMovie(result)
      }
    } catch (error) {
      console.log(error);
      setIsError({
        show: true,
        msg: "An error accured while fetching data"
      })
    }
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      getAllMovies(`${API_URL}&i=${id}`);
    }, 900);
    return () => clearTimeout(timer);
  }, [id])

  if (isLoading) {
    return (
      <div>
        <div className='flex justify-center items-center h-screen text-5xl font-bold text-red-500'>
          Loading....
        </div>
      </div>
    )
  }

  return (
    
      <section>
        <div className='flex  justify-center items-center h-screen '>
          <figure>
            <img src={movie.Poster} alt="" className='rounded-2xl '/>
          </figure>
          <div className='text-lg font-bold ml-8 space-y-1'>
            <p>{movie.Title}</p>
            <p>{movie.Released}</p>
            <p>{movie.Genre}</p>
            <p>{movie.imdbRating}</p>
            <p>{movie.Country}</p>
            <NavLink to='/'>
              <button className='bg-sky-500 hover:bg-sky-600 text-white py-1 px-3 rounded-xl mt-4'>GO BACK</button>
            </NavLink>
          </div>
        </div>
      </section>
  )
}

export default SingleMovie