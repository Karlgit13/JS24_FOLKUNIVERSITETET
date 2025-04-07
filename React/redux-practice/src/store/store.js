import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"; // Importera din slice

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Lägg till din reducer här
  },
});
