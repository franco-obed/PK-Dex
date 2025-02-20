import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import pokemonReducer from "./features/pokemon/pokemonSlice";
import { pokemonApi } from "./features/pokemon/pokemonApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      pokemon: pokemonReducer,
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
  });
};
