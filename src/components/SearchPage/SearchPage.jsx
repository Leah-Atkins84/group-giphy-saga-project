import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import SearchItem from '../SearchItem/SearchItem';

function SearchPage() {

    // const dispatch = useDispatch();

    // react useState for searchedImages to be locally stored in
    
    const searchedImages = useSelector(store => store.searchedImagesReducer);
    // const [searchedImages, setSearchedImages] = useS tate([ {image: 'test_id' }]);

    // calling the searchedImagesReducer
    // const addSearchedImages = () => {
    //     dispatch({ type: 'ADD_SEARCHED_IMAGES', payload: response.data })
    //     setSearchedImages(response.data)
    // }

    // upon page load, images from the searchedImagesReducer will be fetched
    // useEffect(() => {
    //     console.log('in useEffect');
    //     // addSearchedImages();
    //     // console.log('searchedImages on SearchPage is', { searchedImages })
    // }, []);

        console.log('searchedImages is:', searchedImages);
    return (
        <>
            <h2>SEARCH FOR SUPA GIFS!</h2>

            <SearchBar />

            {searchedImages.map((image) => {
                <SearchItem key={image.id} image={image} />
            })}

        </>
    )
}

export default SearchPage;