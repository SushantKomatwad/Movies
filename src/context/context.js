import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const MovieContext = createContext();

const MovieProvider = ({ children }) => {

    const [isLoading , setIsLoading] = useState(true);

    const [movie , setMovie] = useState([]);

    const [isError , setIsError] = useState( { show:false , msg : ""})

    const [query , setQuery] = useState("titanic")

    const getAllMovies = async (url) => {
        setIsLoading(true);
        try {
            const response = await axios.get(url);
            const result = response.data;
            console.log(result);
            if(result.Response === "True"){
                setIsLoading(false);
                setMovie(result.Search)
            }else{
                setIsError({
                    show : true ,
                    msg : result.Error,
                })
            }
        } catch (error) {
            console.log(error);
            setIsError({
                show : true ,
                msg : "An error accured while fetching data"
            })
        }
    }

    useEffect(() => {
      let timer =  setTimeout(()=> {
            getAllMovies(`${API_URL}&s=${query}`);
        },900);
        return() => clearTimeout(timer);
    }, [query])

    return <MovieContext.Provider value={{isLoading , isError , movie , setQuery ,query}}>
        {children}
    </MovieContext.Provider>
}

const useGlobalContext = () => {
    return useContext(MovieContext)
}

export { useGlobalContext, MovieContext, MovieProvider }