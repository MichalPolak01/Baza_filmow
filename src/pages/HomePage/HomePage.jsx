import React, { useEffect, useState } from "react";
import { Content } from "../Content/Content";
// import { movies } from "../../data";
import { Home } from "./Home";


export const HomePage = () => {
  // const [items, setItem] = useState(movies)
  const [items, setItems] = useState([])
  const [title, setTitle] = useState('')
  const [sortingFilms, setSortingFilms] = useState('')

  const sortByRating = () => {
      const sortedItems = [...items].sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate));
      setItems(sortedItems);
      setTitle('Najwyżej oceniane');
      setSortingFilms('Zobacz najnowsze')
  };
    
  const sortByDate = () => {
      // const sortedItems = [...items].sort((a, b) => new Date(b.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1')) - new Date(a.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1')));
      const sortedItems = [...items].sort((a, b) => parseFloat(b.productionYear) - parseFloat(a.productionYear));
      setItems(sortedItems);
      setTitle('Najowsze publikacje');
      setSortingFilms('Zobacz najwyżej oceniane')
  };

  const fetchData = async () => {
      try {
        const response = await fetch("https://at.usermd.net/api/movies", {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // setItems(data);
        const sortedItems = [...data].sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate));
        setItems(sortedItems);
        setTitle('Najwyżej oceniane');
        setSortingFilms('Zobacz najnowsze');
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

  useEffect(() => {
      fetchData();
  }, [])
  
  return (
      <>
          <Home />
          <div className='container'>
              <div className='sort flexSB'>
                  <h1>{title}</h1>
                  <h2 onClick={() => title === 'Najwyżej oceniane' ? sortByDate() : sortByRating() }>{sortingFilms}</h2>
              </div>
              <Content items={items}/>
          </div>
      </>
  )
}