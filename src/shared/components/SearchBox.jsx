import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { off, on } from "../state/bgHideSlice"
import { AnimatePresence, motion } from "framer-motion"
import FormatingPrice from "./../utils/FormatingPrice"
import { AiOutlineSearch } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

export default function SearchBox() {

       const [value, setValue] = useState(null)
       const dispatch = useDispatch()
       const bgHideSelector = useSelector(state => state.bgHide)
       const navigate = useNavigate();

       const searchHandler = e => {
              e.preventDefault()
              dispatch(off())
              navigate("/products?search=" + value)
       }

       // products loading simulation
       let timeout = null
       const [isLoading, setIsLoading] = useState(true)
       useEffect(() => {
              if (value >= 3) {
                     setIsLoading(true)
                     timeout = setTimeout(() => {
                            setIsLoading(false)
                            console.log("okkkkk-000")
                     }, 2000)
              }
       }, [value])

       useEffect(() => {

              return () => clearTimeout(timeout)
       }, [])

       return (
              <>
                     <div className="w-full relative z-100">
                            <form className="relative" onSubmit={searchHandler} autoComplete="off">
                                   <input
                                          defaultValue={value}
                                          onChange={e => setValue(e.target.value)}
                                          type="text"
                                          placeholder="جستجوی محصول ..."
                                          onFocus={() => dispatch(on())}
                                          onBlur={() => dispatch(off())}
                                          className="bg-white font-main w-full py-1.5 ps-4 pe-8 rounded-full peer focus:scale-105"
                                          name="search"
                                   />
                                   <button type="submit" className="absolute top-2 left-1.5 peer-focus:scale-120 transition-all opacity-40 peer-focus:opacity-75">
                                          <AiOutlineSearch className="size-5 cursor-pointer" />
                                   </button>
                            </form>
                            <AnimatePresence>
                                   {
                                          (value !== null && value.length >= 3 && bgHideSelector.opacity === "1") && (
                                                 <motion.div
                                                        key={"354"}
                                                        initial={{ y: 10, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        exit={{ y: 10, opacity: 0 }}
                                                        transition={{ duration: 0.25 }}
                                                        className="absolute left-0 w-full border border-neutral-400 mt-4 rounded bg-white p-2 space-y-2"
                                                 >
                                                        {
                                                               isLoading ? (
                                                                      <>
                                                                             {/* load item */}
                                                                             <div className="w-full border border-neutral-300 rounded-lg flex font-main p-1 animate-pulse" dir="rtl">
                                                                                    {/* image */}
                                                                                    <div className="size-20 rounded-lg bg-neutral-200"></div>
                                                                                    {/* content */}
                                                                                    <div className="mt-2 ms-2">
                                                                                           <div className="w-40 bg-neutral-200 py-2 rounded-lg"></div>
                                                                                           <div className="w-24 mt-4 bg-neutral-200 py-2 rounded-lg"></div>
                                                                                    </div>
                                                                             </div>
                                                                      </>
                                                               ) : (
                                                                      <>
                                                                             {/* item */}
                                                                             <div className="w-full border border-neutral-300 rounded-lg flex font-main p-1" dir="rtl">
                                                                                    {/* image */}
                                                                                    <img loading="lazy" src="/images/box.webp" className="size-20 rounded-lg" alt="" />
                                                                                    {/* content */}
                                                                                    <div className="mt-2 ms-2">
                                                                                           <h2 className="text-base line-clamp-1">کفش نایک مدل gx3 برند  برند  برند </h2>
                                                                                           <p className="text-lg mt-1"><FormatingPrice price={124200} tomanSize="14px" /> </p>
                                                                                    </div>
                                                                             </div>
                                                                             {/* item */}
                                                                             <div className="w-full border border-neutral-300 rounded-lg flex font-main p-1" dir="rtl">
                                                                                    {/* image */}
                                                                                    <img loading="lazy" src="/images/shoe.png" className="size-20 rounded-lg" alt="" />
                                                                                    {/* content */}
                                                                                    <div className="mt-2 ms-2">
                                                                                           <h2 className="text-base line-clamp-1">کفش نایک مدل gx3 برند </h2>
                                                                                           <p className="text-lg mt-1"><FormatingPrice price={124200} tomanSize="14px" /> </p>
                                                                                    </div>
                                                                             </div>
                                                                      </>
                                                               )
                                                        }
                                                 </motion.div>
                                          )
                                   }
                            </AnimatePresence>
                     </div>
              </>
       )
}

