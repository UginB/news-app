// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = configureStore({
	reducer: reducer,
})

export default store;