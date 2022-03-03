import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


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
function* fetchSearchedImages() {
    try {
        const imagesResponse = yield axios.get('/api/element');
        yield put ({ type: 'ADD_SEARCHED_IMAGES', payload: imagesResponse.data}); 
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
    applyMiddleware(watcherSaga, logger)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
