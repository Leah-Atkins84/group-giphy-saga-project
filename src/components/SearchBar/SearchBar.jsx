import React from "react";
import axios from 'axios';
import {dispatch} from "react";

function SearchBar() {

    const [search, setSearch] = useState([]);

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleClick = () => {
        axios({
            method: 'POST',
            url: '/api/search',
            data: {
                search: search
            }
        }).then((response) => {
            dispatch({type: 'FETCH_SEARCHED_IMAGES'})
        }).catch((error) => {
            console.log(error);
            alert('Unable to search :(');
        })
    } // end post

    return (
        <>
            <input type="text"
                value={search}
                onChange={handleChange}/>
            <button onClick={handleClick}>Search for Gifs!</button>

        </>
    )
}

export default SearchBar;
