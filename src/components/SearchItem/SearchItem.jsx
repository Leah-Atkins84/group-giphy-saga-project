import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function SearchItem({image}) {

    console.log('gif properties:', image);

    return (
        <>
            <p>
                <img src={image.images.original.url}/>
            </p>
        </>
    )
}

export default SearchItem;