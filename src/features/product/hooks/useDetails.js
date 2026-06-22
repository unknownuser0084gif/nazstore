import { useQuery } from "@tanstack/react-query"

//--- IF THE BACKEND WAS'NT READY ---
const productExample = {
       "message": {
              "id": 1,
              "title": "کفش ورزشی کتانی برند نایکی مدل فوتبال 2019 بهترین برند نایکی",
              "price": 125000,
              "discount": 5,
              "colors": "\"[\"#ff00ff\",\"#ffff00\",\"#616161\"]\"",
              "size": "[\"lg\",\"xl\",\"2xl\"]",
              "description": null,
              "summary": "مناسب برای پیاده‌روی های روزمره ، ورزش ، کار های روزانه مناسب برای پیاده‌روی های روزمره ، ورزش ، کار های روزانه مناسب برای پیاده‌روی های روزمره ، ورزش ، کار های روزانه های روزمره ، ورزش ، کار های روزانه",
              "image": "/images/jorab.webp",
              "intro": null,
              "spec": null,
              "slug": "test-1",
              "updated_at": "2026-03-02 13:37:33",
              "discountPrice": 118750
       },
       "status": "ok"
}

export default function usePosts(param) {

       const { isPending, data, error } = useQuery({
              // refetch data with difrent key
              queryKey: [param],
              // function to fetch data
              queryFn: async ({ queryKey, signal }) => {
                     //--- IF BACKEND WAS READY ---
                     // const res = await fetch(`http://localhost/Bahri-Shop-Api/product/${queryKey[0]}`, { signal: signal }).then(res => res.json())
                     // return res
                     //--- IF THE BACKEND WAS'NT READY ---
                     let okData = null
                     await new Promise(resolve => {
                            setTimeout(() => {
                                   okData = productExample
                                   resolve()
                            } , 1500)
                     })
                     return okData
              },
              // a middelware between response and retern (last step , before return data)
              select: (data) => data,
              // a middelware between request and fetch (first step , before fetch data)
              enabled: true
       })

       return { isPending, data, error }

}
