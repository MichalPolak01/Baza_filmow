import React, { useState, useRef, useEffect } from 'react'
// import { movies } from '../data'
import { Link } from 'react-router-dom'

export const SearchBar = () => {
    const [activeSearch, setActiveSearch] = useState([]);
    const [inputActive, setInputActive] = useState(false);
    const inputRef = useRef(null);
    const [movies, setMovies] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();

        if (!isDataLoaded) {
            return false;
        }

        if (searchTerm === '') {
            setActiveSearch([]);
            return false;
        }

        const matchingMovies = movies.filter(m => m.title.toLowerCase().includes(searchTerm)).slice(0, 8);
        setActiveSearch(matchingMovies);
    }

    const handleResultClick = () => {
        setActiveSearch([]);

        if (inputRef.current) {
            inputRef.current.value = '';
        }
    }

    const handleFocus = () => {
        setInputActive(true);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setInputActive(false);
        }, 200);
    }

    const fetchData = async () => {
        try {
          const response = await fetch("https://at.usermd.net/api/movies", {
            method: "GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const data = await response.json();
          setMovies(data);
          setIsDataLoaded(true);
        } catch (error) {
          console.error("Error fetching data:", error.message);
        }
      };

    useEffect(() => {
        fetchData();
    }, [])


  return (
    <>
        <form>
            <div>
                <input type='search' placeholder='Wyszukaj...' onChange={(e) => handleSearch(e)} onFocus={handleFocus} onBlur={handleBlur} ref={inputRef}></input>
            </div>
            { inputActive && activeSearch.length > 0 && (
                <div className='absolute results'>
                    { activeSearch.map(movie => (
                        <Link key={movie.id} to={`details/${movie.id}`} onClick={handleResultClick}>
                            <div className='movie'>
                                <div className='icon'>
                                    <img src={movie.image} alt="" />
                                </div>
                                <div className='title'>
                                    <span key={movie.id}>{movie.title}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </form>
    </>
  )
}
