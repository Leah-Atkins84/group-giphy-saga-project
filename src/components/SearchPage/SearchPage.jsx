import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import SearchItem from '../SearchItem/SearchItem';

function SearchPage() {

    const dispatch = useDispatch();

    // react useState for searchedImages to be locally stored in
    const [searchedImages, setSearchedImages] = useState([ {image: 'test_id' }]);

    // calling the searchedImagesReducer
    const addSearchedImages = () => {
        dispatch({ type: 'ADD_SEARCHED_IMAGES', payload: response.data })
        setSearchedImages(response.data)
    }

    // upon page load, images from the searchedImagesReducer will be fetched
    useEffect(() => {
        console.log('in useEffect');
        addSearchedImages();
        console.log('searchedImages on SearchPage is', { searchedImages })
    }, []);

    return (
        <>
            <H2>SEARCH FOR SUPA GIFS!</H2>

            <SearchBar />

            {searchedImages.map((image) => {
                <SearchItem key={image.id} image={image} />
            })}

        </>
    )
}

export default SearchPage;