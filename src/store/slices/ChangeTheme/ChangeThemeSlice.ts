import { createSlice } from '@reduxjs/toolkit';

interface ChangeThemeState {
  changeTheme: boolean;
}

const initialState: ChangeThemeState = {
  changeTheme: false,
};

export const ChangeThemeSlice = createSlice({
  name: 'changetheme',
  initialState,
  reducers: {
    setChangeTheme(state, { payload }) {
      state.changeTheme = payload;
    },
  },
});

export const getChangeThemeValue = (state: { changetheme: ChangeThemeState }) =>
  state.changetheme.changeTheme;

export const { setChangeTheme } = ChangeThemeSlice.actions;

export const ChangeThemeReducer = ChangeThemeSlice.reducer;
