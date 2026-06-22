import { useMutation } from "@tanstack/react-query"
import axios from "../../../services/api/axios.config"

export function useAddUser() {

       const { isPending, mutate , data} = useMutation({
              mutationFn: async (data) => {
                     // const values = JSON.stringify(data)
                     // const result = await axios.post(
                     //        "/register",
                     //        values,
                     //        {
                     //               headers : {
                     //                      "Content-Type" : "application/json"
                     //               }
                     //        }
                     // ); 
                     // return result.data
                     return null
              }
       }) 
       
       return {isPending , mutate , data}
}

