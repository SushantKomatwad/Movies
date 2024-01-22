import React from 'react'
import { useGlobalContext } from '../context/context'
import { NavLink } from 'react-router-dom';

const Movies = () => {

    const { movie } = useGlobalContext();

    return (

        <section>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {movie.map((curMovie) => {

                    const { imdbID, Title, Poster } = curMovie;

                    const movieTitle = Title.substring(0,20);
                    

                    return (
                        <NavLink key={imdbID} to={`movie/${imdbID}`}>
                        <div className='border-2 border-gray-400 mt-8 p-4 rounded-lg mx-6 bg-gray-600 hover:transform hover:scale-105 transition-transform hover:bg-gray-800'>
                          <h2 className='font-bold text-xl text-center text-white'>{movieTitle.length >= 20 ? `${movieTitle}...` : movieTitle}</h2>
                          <img src={Poster} alt='movieimage' className='object-cover w-[320px] h-[420px] mt-2 rounded-2xl ' />
                        </div>
                      </NavLink>
                    )
                })
                }
            </div>
        </section>


    )
}

export default Movies