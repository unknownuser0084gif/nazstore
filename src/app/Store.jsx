import { configureStore } from "@reduxjs/toolkit";
import bgHideSlice from "./../shared/state/bgHideSlice"

const Store = configureStore({
       reducer: { //each slices
              bgHide: bgHideSlice
       }
})

export default Store;