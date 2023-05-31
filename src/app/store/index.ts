// store/index.ts

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter'; // Import your counter reducer

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers here if needed
});

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
