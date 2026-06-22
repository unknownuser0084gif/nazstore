import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "../../../services/api/axios.config"

//--- IF THE BACKEND WAS'NT READY ---
const productsExample = {
       "message": {
              "data": [
                     {
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
                            "updated_at": "2026-03-02 13:37:33"
                     },
                     {
                            "id": 2,
                            "title": "کفش ورزشی کتانی برند نایکی  ",
                            "price": 1100000,
                            "discount": 0,
                            "colors": "",
                            "size": null,
                            "description": null,
                            "summary": "مناسب برای پیاده‌روی های روزمره ، ورزش ، کار های روزانه مناسب برای پیاده‌روی ها ",
                            "image": "/images/powerbonk.webp",
                            "intro": null,
                            "spec": null,
                            "slug": "test-2",
                            "updated_at": "2026-03-02 15:33:18"
                     },
                     {
                            "id": 3,
                            "title": "کفش ورزشی کتانی ",
                            "price": 2244000,
                            "discount": 0,
                            "colors": "",
                            "size": null,
                            "description": null,
                            "summary": "مناسب برای پیاده‌روی های روزمره ، ورزش ، کار های روزانه مناسب برای پیاده‌روی های روزمره ، ورزش ، کار های روزانه مناسب برای پیاده‌روی های روزمره ، ورزش ، کار های روزانه های روزمره ، ورزش ، کار های روزانه",
                            "image": "/images/alnasr.webp",
                            "intro": null,
                            "spec": null,
                            "slug": "test-3",
                            "updated_at": "2026-03-02 15:33:18"
                     }
              ],
              "total": 7,
              "limit": 3
       },
       "status": "ok"
}

function useInfinit() {

       const [params] = useSearchParams()
       const get = Object.fromEntries(params.entries())

       const { isPending, data, fetchNextPage, isFetchingNextPage, hasNextPage, error } = useInfiniteQuery({
              // a key to identify the query
              queryKey: ["posts", get],
              // initial page param to start with
              initialPageParam: 0,
              // a function to fetch data with page param
              queryFn: async ({ pageParam, queryKey }) => {
                     //--- IF THE BACKEND WAS READY ---
                     // let url = `/products?page=${pageParam}`
                     // const keys = Object.keys(queryKey[1])
                     // const values =  Object.values(queryKey[1])
                     // keys.forEach((_,index) => {
                     //        url = url + "&" + keys[index] + "=" + values[index];
                     // })
                     // // const res = await fetch(url).then(res => res.json())
                     // const res = await axios.get(url).then(e => e.data)
                     // return res
                     //--- IF THE BACKEND WAS'NT READY ---
                     let OkData = null; 
                     await new Promise((resolve) => {
                            setTimeout(() => {
                                   OkData = productsExample;
                                   resolve();
                            }, 1500);
                     });
                     return OkData;
              },
              // a function to get next page param from last page data and all pages data
              getNextPageParam: (lastPage, allPages, lastPageParam, allPagesParams) => {
                     if (lastPage.message.total > lastPageParam * 3) {
                            return lastPageParam + 1
                     } else {
                            return null
                     }
              },
              // a function to select data from all pages data before return it
              select: useCallback((data) => {
                     return {
                            products: data.pages.map(r => r.message.data).flat(),
                            total: data.pages[0].message.total
                     }
              }, [])
       })

       return { isPending, data, fetchNextPage, isFetchingNextPage, hasNextPage, error }
}

export default useInfinit;