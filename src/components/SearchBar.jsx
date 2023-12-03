import React, { useState, useRef } from 'react'
import { movies } from '../data'
import { Link } from 'react-router-dom'

export const SearchBar = () => {
    const [activeSearch, setActiveSearch] = useState([]);
    const [inputActive, setInputActive] = useState(false);
    const inputRef = useRef(null);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();

        if (searchTerm === '') {
            setActiveSearch([]);
            return false;
        }

        const matchingMovies = movies.filter(m => m.name.toLowerCase().includes(searchTerm)).slice(0, 8);
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


  return (
    <>
        <form>
            <div>
                <input type='search' placeholder='Wyszukaj...' onChange={(e) => handleSearch(e)} onFocus={handleFocus} onBlur={handleBlur} ref={inputRef}></input>
            </div>
            {
                inputActive && activeSearch.length > 0 && (
                    <div className='absolute results'>
                        {
                            activeSearch.map(movie => (
                                <Link key={movie.id} to={`details/${movie.id}`} onClick={handleResultClick}>
                                    <div className='movie'>
                                        <div className='icon'>
                                            <img src={movie.img} alt="" />
                                        </div>
                                        <div className='title'>
                                            <span key={movie.id}>{movie.name}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </form>
    </>
  )
}
