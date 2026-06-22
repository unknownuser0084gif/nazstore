import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
       name: "bgHide",
       initialState: {
              opacity: "0",
              pointerEvents: "none"
       },
       reducers: {
              on: () => {
                     return {
                            opacity: "1",
                            pointerEvents: "auto",
                            backdropFilter: "blur(2px)"
                     }
              },
              off: () => {
                     return {
                            opacity: "0",
                            pointerEvents: "none"
                     }
              }
       }
})


export const { on, off } = slice.actions
export default slice.reducer