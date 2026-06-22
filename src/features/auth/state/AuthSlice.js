import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
       name : "user",
       initialState : {
              user : {
                     id : null ,
                     name : null ,
                     email : null
              },
              isLogined : false,
              access_token : localStorage.getItem("access_token")
       },
       
})