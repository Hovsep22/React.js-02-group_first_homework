import { configureStore } from '@reduxjs/toolkit';
import { ChangeThemeReducer } from './slices/ChangeTheme/ChangeThemeSlice';

const store = configureStore({
  reducer: {
    changetheme:ChangeThemeReducer
  }
});

export default store;