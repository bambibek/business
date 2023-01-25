import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/index.js';

const store = configureStore({ reducer: rootReducer });

export default store;
