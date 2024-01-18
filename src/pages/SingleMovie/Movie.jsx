import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../../styles/movie.css'
import basicBackground from "../Content/BasicBackgrounds/questionMarks.jpg";
import { DeleteMovieAlert } from '../../components/DeleteMovieAlert.jsx';
import { AlertNotLogged } from '../../components/AlertNotLogged.jsx';

export const Movie = () => {
    const {id} = useParams()
    const [item, setItem] = useState(null)
    const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
    const [isLoggedAlert, setIsLoggedAlert] = useState(false);
    const navigate = useNavigate(false);


    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(`https://at.usermd.net/api/movies/${id}`, {
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
              setItem(data);
          } catch (error) {
              console.error("Error fetching data:", error.message);
          }
      };
  
      fetchData();
  }, [id]);

    const handleDeleteClick = () => {
      setIsDeleteAlertOpen(true);
    };

    const handleDeleteConfirm = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          setIsDeleteAlertOpen(false);
          setIsLoggedAlert(true);
          return;
        } else {
          const response = await fetch(`https://at.usermd.net/api/movie/${item.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          console.log('Film został usunięty.');
          navigate('/');
        }
    
      } catch (error) {
        console.error('Błąd podczas usuwania filmu:', error.message);
      }
    };
  
    const handleDeleteCancel = () => {
      setIsDeleteAlertOpen(false);
      setIsLoggedAlert(false);
    };

    return <> {item ? (
        <>
            <section className='singleMovie'>
              <div className="img">
                <img src={item.backgroundImage}
                  onError={({currentTarget}) => {
                    currentTarget.src = basicBackground
                    currentTarget.onerror = null
                  }} alt="" />
              </div>          
              <div className='icon'>
                  <img src={item.image} alt=""     
                    onError={({currentTarget}) => {
                      currentTarget.src = basicBackground
                      currentTarget.onerror = null
                    }} />
              </div>
              <div className='text'>
                  <h1>{item.title}</h1>
                  <h4>Średnia ocen: {item.rate}/10</h4>
                  <p><span>Opis:</span> <i>{item.content}</i></p>
                  <p><span>Gatunek:</span> {item.genre}</p>
                  <p><span>Data wydania:</span> {item.productionYear}</p>
              </div>
              <div className='deleteContainer' onClick={handleDeleteClick}>
                <i className="fa fa-trash-can"></i>
              </div>
            </section>

            {isDeleteAlertOpen && (
              <div className='deleteAlert'>
                <DeleteMovieAlert onClose={handleDeleteCancel} onConfirm={handleDeleteConfirm} />
              </div>
            )}
            {isLoggedAlert && (
              <div className='deleteAlert'>
                <AlertNotLogged onClose={handleDeleteCancel} onConfirm={handleDeleteConfirm} />
              </div>
            )}
        </>
    ) : null }</>
}