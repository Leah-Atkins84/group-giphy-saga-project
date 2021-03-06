import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';


const sagaMiddleware = createSagaMiddleware();

// reducer for the search page
const searchedImagesReducer = (state = [], action) => {
    if (action.type === 'ADD_SEARCHED_IMAGES') {
        return action.payload
    }
    return state;
}

// saga for getting searched images
// triggers on 'FETCH_SEARCHED_IMAGES'
function* fetchSearchedImages(action) {
    try {
        const imagesResponse = yield axios.post('/api/search', action.payload);
        yield put ({ type: 'ADD_SEARCHED_IMAGES', payload: imagesResponse.data.data}); 
    } catch (error) {
        console.log('Error fetching images', error);
    }
}

// saga watcher
function* watcherSaga() {
    yield takeEvery('FETCH_SEARCHED_IMAGES', fetchSearchedImages);
}



// create store
const reduxStore = createStore(
    combineReducers({
        searchedImagesReducer
    }),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
