import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import ButtonBack from '../ButtonBack/ButtonBack';

function SearchPage() {

    const dispatch = useDispatch();

    // react useState for feedback from the database to be stored in
    const [searchedImages, setSearchedImages] = useState([]);

    return (
        <>
            <H2>SEARCH FOR SUPA GIFS!</H2>

            <SearchBar />

            {searchedImages.map((image) => {
                <SearchItems key={image.id} image={image} />
            })}

        </>
    )
}

export default SearchPage;