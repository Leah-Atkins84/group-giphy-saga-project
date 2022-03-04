import React from 'react';
import axios from 'axios'
import{useState} from 'react'


function FavsPage() {
  

  const [favGifs, setFavGifs] = useState([]);
    const getFavorites= () => {
        axios.get("/api/favorite")
        .then(response=> console.log(response.data))
        // .then(response=> setFavGifs(response.data))
        .catch(error => console.log(error))
      }
    
    //GET request to the database
    //to server
    
    
    return (
        <>
            Favs Page!
            {
            favGifs.map((image, i) =>( 
            <img src={image.url}/>
            ))
          }
        </>
    )
}

export default FavsPage;