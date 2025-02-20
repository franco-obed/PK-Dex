import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: { value: "" },
  reducers: {
    setId: (state) => {
      state.value;
    },
  },
});

export const { setId } = pokemonSlice.actions;
export default pokemonSlice.reducer;
