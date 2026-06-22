import Navbar from "../../../shared/layouts/Navbar"
import { BsSortUp } from "react-icons/bs";
import { RiExchange2Fill } from "react-icons/ri";
import { MdOutlinePriceChange, MdFilterAlt, MdColorLens } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { Accordion } from "../../../shared/components/Accordion";
import { AccordionItem } from "../../../shared/components/AccordionItem";
import Footer from "../../../shared/layouts/Footer"
import CardProductForAll from "../components/CardProductForAll";
import { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import useInfinit from "../hooks/useInfinit";

export default function Products() {

       const [openFilter, setOpenFilter] = useState(false)
       const [openSort, setOpenSort] = useState(false)
       const [params, setParams] = useSearchParams()

       const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isPending, error } = useInfinit({})
       const nextPageHandler = () => {
              if (hasNextPage) fetchNextPage()
       }

       const setFiltering = (name, value) => {
              params.set(name, value)
              setParams(params)
       }
       const deleteFiltering = (name) => {
              params.delete(name)
              setParams(params)
       }
       const setFilteringColors = (hex) => {
              const colors = params.get("colors") ? params.get("colors").split(",") : [];
              hex = hex.split("#")[1];
              colors.push(hex)
              let res = [...new Set(colors)]
              res = res.join(",")
              params.set("colors", res)
              setParams(params)
       }
       const deleteFilteringColor = (hex) => {
              const colors = params.get("colors") ? params.get("colors").split(",") : [];
              hex = hex.split("#")[1];
              const result = colors.filter(item => item !== hex);
              params.set("colors", result)
              setParams(params)
              if (!params.get("colors")) {
                     params.delete("colors")
                     setParams(params)
              }
       }
       const isColorCheck = (hex) => {
              hex = hex.split("#")[1];
              return params.get("colors") ? params.get("colors").includes(hex) : false
       }

       useEffect(() => {
              setOpenSort(false)
       }, [params.get("sort")])

       return (
              <>
                     <Navbar />
                     <section className="w-full my-12 font-main! relative" dir="rtl">
                            {/* sort & broadcrump & order */}
                            <div className="w-full flex items-center max-md:block py-4 font-main">
                                   {/* broadcrump */}
                                   <div className="w-3/10 max-md:w-full overflow-auto scrollbar-hidden">
                                          <nav className="flex p-3" aria-label="Breadcrumb">
                                                 <ol className="inline-flex items-center space-x-2 md:space-x-2 rtl:space-x-reverse">
                                                        <li className="inline-flex items-center">
                                                               <a href="#" className="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">
                                                                      <span className="text-text_secondary">خانه</span>
                                                               </a>
                                                        </li>
                                                        <li>
                                                               <div className="flex items-center space-x-0">
                                                                      <svg className="w-3.5 h-3.5 rtl:rotate-180 stroke-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" /></svg>
                                                                      <a href="#" className="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand text-text_secondary">محصولات</a>
                                                               </div>
                                                        </li>
                                                 </ol>
                                          </nav>
                                   </div>
                                   {/* order & sort */}
                                   <div className="w-7/10 max-md:w-full flex justify-between items-center max-md:px-4">
                                          {/* order --desktop*/}
                                          <div className="flex max-md:hidden gap-x-2 select-none">
                                                 <div onClick={() => setFiltering("sort", 1)} className={`${params.get("sort") == 1 && "border-b-2"} border-box_primary px-2 cursor-pointer pb-2`}>ارزان ترین</div>
                                                 <div onClick={() => setFiltering("sort", 2)} className={`${params.get("sort") == 2 && "border-b-2"} border-box_primary px-2 cursor-pointer pb-2`}>گران ترین</div>
                                                 <div onClick={() => deleteFiltering("sort")} className={`${!params.get("sort") && "border-b-2"} border-box_primary px-2 cursor-pointer pb-2`}>تازه ترین</div>
                                                 <div onClick={() => setFiltering("sort", 3)} className={`${params.get("sort") == 3 && "border-b-2"} border-box_primary px-2 cursor-pointer pb-2`}>محبوب ترین</div>
                                                 <div onClick={() => setFiltering("sort", 4)} className={`${params.get("sort") == 4 && "border-b-2"} border-box_primary px-2 cursor-pointer pb-2`}>پرفروش ترین</div>
                                          </div>
                                          {/* order & filterBtn --mobile */}
                                          <div className="w-full gap-x-2 md:hidden flex">
                                                 <div className="w-fit px-4 py-1 border-neutral-400 rounded-lg cursor-pointer border flex items-center gap-x-2" onClick={() => setOpenFilter(true)}>
                                                        <CiFilter className="size-5" />
                                                        فیلتر ها
                                                 </div>
                                                 <div className="w-fit px-4 py-1 border-neutral-400 rounded-lg cursor-pointer border flex items-center gap-x-2" onClick={() => setOpenSort(true)}>
                                                        <BsSortUp className="size-5 text-neutral-700" />
                                                        مرتب سازی
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            {/* filter & products */}
                            <div className="flex gap-x-8">
                                   {/* filters */}
                                   <div className="w-3/10 max-md:hidden">
                                          <div className="w-full px-2 sticky top-8 h-dvh">
                                                 <div className="h-full overflow-y-auto scrollbar-hidden">
                                                        <h1 className="text-xl pb-1 flex gap-x-2 items-center"><MdFilterAlt className="size-7 text-text_secondary" /> فیلتر های پیشرفته </h1>
                                                        <hr className="my-3" />
                                                        {/* product status */}
                                                        <div className="w-full">
                                                               <h3 className="py-2 rounded-lg bg-box_secondary mb-4 flex gap-x-2 justify-center items-center text-text_secondary"><RiExchange2Fill className="size-5" />وضعیت محصول </h3>
                                                               <div className="flex gap-x-2 mt-1">
                                                                      <label
                                                                             htmlFor="1"
                                                                             className="flex flex-row items-center gap-2.5 text-black"
                                                                      >
                                                                             <input
                                                                                    type="checkbox"
                                                                                    className="ui-checkbox ms-2"
                                                                                    checked={params.get("discounted") ? true : false}
                                                                                    onChange={e => e.target.checked ? setFiltering("discounted", true) : deleteFiltering("discounted")}
                                                                             />
                                                                             تخفیف دار
                                                                      </label>
                                                               </div>
                                                               <div className="flex gap-x-2 mt-1">
                                                                      <label
                                                                             htmlFor="2"
                                                                             className="flex flex-row items-center gap-2.5 text-black"
                                                                      >
                                                                             <input
                                                                                    type="checkbox"
                                                                                    className="ui-checkbox ms-2"
                                                                                    checked={params.get("inStock") ? true : false}
                                                                                    onChange={e => e.target.checked ? setFiltering("inStock", true) : deleteFiltering("inStock")}
                                                                             />
                                                                             در انبار
                                                                      </label>
                                                               </div>
                                                               <div className="flex gap-x-2 mt-1">
                                                                      <label
                                                                             htmlFor="3"
                                                                             className="flex flex-row items-center gap-2.5 text-black"
                                                                      >
                                                                             <input
                                                                                    type="checkbox"
                                                                                    className="ui-checkbox ms-2"
                                                                                    checked={params.get("freeShipping") ? true : false}
                                                                                    onChange={e => e.target.checked ? setFiltering("freeShipping", true) : deleteFiltering("freeShipping")}
                                                                             />
                                                                             ارسال رایگان
                                                                      </label>
                                                               </div>
                                                        </div>
                                                        {/* price range */}
                                                        <div className="w-full mt-14">
                                                               <h3 className="py-2 rounded-lg bg-box_secondary text-center mb-4 flex gap-x-2 justify-center items-center text-text_secondary"><MdOutlinePriceChange className="size-6" />محدوده قیمت </h3>
                                                               <div className="w-full flex items-center gap-x-2">
                                                                      <label className="w-1/10" htmlFor="">از</label>
                                                                      <input type="number" defaultValue={params.get("fPrice")} className="w-full p-1 border border-text_secondary rounded" onBlur={e => setFiltering("fPrice", e.target.value)} />
                                                                      <p className="w-2/10">تومان</p>
                                                               </div>
                                                               <div className="w-full flex items-center gap-x-2 mt-4">
                                                                      <label className="w-1/10" htmlFor="">تا</label>
                                                                      <input type="number" defaultValue={params.get("tPrice")} className="w-full p-1 border border-text_secondary rounded" onBlur={e => setFiltering("tPrice", e.target.value)} />
                                                                      <p className="w-2/10">تومان</p>
                                                               </div>
                                                        </div>
                                                        {/* color product */}
                                                        <div className="w-full mt-16">
                                                               <h3 className="py-2 rounded-lg bg-box_secondary text-center mb-4 flex  justify-center items-center text-text_secondary"><MdColorLens className="size-6" />رنگ محصول </h3>
                                                               <div className="flex flex-wrap gap-x-4 gap-y-12">
                                                                      <div
                                                                             style={{
                                                                                    backgroundColor: "#00d5be",
                                                                                    scale: isColorCheck("#00d5be") ? 1.2 : 1,
                                                                                    border: isColorCheck("#00d5be") ? "1px solid black" : "none"
                                                                             }}
                                                                             onClick={e => setFilteringColors("#00d5be")}
                                                                             className="rounded-full border-neutral-300 size-8 mx-2 relative"
                                                                      >
                                                                             {
                                                                                    isColorCheck("#00d5be") && (
                                                                                           <IoIosCloseCircleOutline
                                                                                                  onClick={e => { deleteFilteringColor("#00d5be"); e.stopPropagation() }}
                                                                                                  className="cursor-pointer absolute -bottom-5 left-[52%] -translate-x-1/2"
                                                                                           />
                                                                                    )
                                                                             }
                                                                      </div>
                                                                      <div
                                                                             style={{
                                                                                    backgroundColor: "#00ffbe",
                                                                                    scale: isColorCheck("#00ffbe") ? 1.2 : 1,
                                                                                    border: isColorCheck("#00ffbe") ? "1px solid black" : "none"
                                                                             }}
                                                                             onClick={e => setFilteringColors("#00ffbe")}
                                                                             className="rounded-full border-neutral-300 size-8 mx-2"
                                                                      >
                                                                             {
                                                                                    isColorCheck("#00ffbe") && (
                                                                                           <IoIosCloseCircleOutline
                                                                                                  onClick={e => { deleteFilteringColor("#00ffbe"); e.stopPropagation() }}
                                                                                                  className="cursor-pointer absolute -bottom-5 left-[52%] -translate-x-1/2"
                                                                                           />
                                                                                    )
                                                                             }
                                                                      </div>
                                                                      <div
                                                                             style={{
                                                                                    backgroundColor: "#ffffbe",
                                                                                    scale: isColorCheck("#ffffbe") ? 1.2 : 1,
                                                                                    border: isColorCheck("#ffffbe") ? "1px solid black" : "none"
                                                                             }}
                                                                             onClick={e => setFilteringColors("#ffffbe")}
                                                                             className="rounded-full border-neutral-300 size-8 mx-2"
                                                                      >
                                                                             {
                                                                                    isColorCheck("#ffffbe") && (
                                                                                           <IoIosCloseCircleOutline
                                                                                                  onClick={e => { deleteFilteringColor("#ffffbe"); e.stopPropagation() }}
                                                                                                  className="cursor-pointer absolute -bottom-5 left-[52%] -translate-x-1/2"
                                                                                           />
                                                                                    )
                                                                             }
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        {/* categories */}
                                                        <div className="w-full mt-16">
                                                               <h3 className="py-2 rounded-lg bg-box_secondary text-center mb-4 flex gap-x-2 justify-center items-center text-text_secondary"><BiSolidCategoryAlt className="size-6" />دسته بندی ها </h3>
                                                               <div className="flex gap-x-4">
                                                                      <Accordion>
                                                                             <AccordionItem eventKey={"poshak"} className="bg-black/5 rounded-lg">
                                                                                    {/* btn */}
                                                                                    <p className="w-fit p-1 ">پوشاک</p>
                                                                                    {/* content */}
                                                                                    <ul className="space-y-2">
                                                                                           <li>مردانه</li>
                                                                                           <li>زنانه</li>
                                                                                           <li>
                                                                                                  <Accordion>
                                                                                                         <AccordionItem className="bg-black/5 rounded-lg" eventKey={"poshak"}>
                                                                                                                {/* btn */}
                                                                                                                <p className="w-fit p-1">پوشاک</p>
                                                                                                                {/* content */}
                                                                                                                <ul className="space-y-2">
                                                                                                                       <li>مردانه</li>
                                                                                                                       <li>زنانه</li>
                                                                                                                </ul>
                                                                                                         </AccordionItem>
                                                                                                  </Accordion>
                                                                                           </li>
                                                                                    </ul>
                                                                             </AccordionItem>
                                                                             <AccordionItem eventKey={"lavazem"} className="bg-black/5 rounded-lg">
                                                                                    {/* btn */}
                                                                                    <p className="w-fit p-1 ">لوازم ورزشی</p>
                                                                                    {/* content */}
                                                                                    <ul className="space-y-2">
                                                                                           <li>دمبل</li>
                                                                                           <li>پوشاک ورزشی</li>
                                                                                           <li>بند ها</li>
                                                                                           <li>کلاه</li>
                                                                                           <li>کفش</li>
                                                                                    </ul>
                                                                             </AccordionItem>
                                                                      </Accordion>
                                                               </div>
                                                        </div>
                                                        <div className="py-8"></div>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* products */}
                                   <div className="w-7/10 h-auto max-md:w-full">
                                          {
                                                 (isPending || error) ? (
                                                        isPending ? ( // loading content
                                                               <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 max-lg:justify-items-center">
                                                                      <div className="max-w-[18rem] min-w-[18rem] p-2.5 pb-3 rounded-xl shadow-[1px_1px_12px_1px_#3d3d3d47] font-main relative" dir="rtl">
                                                                             {/* img */}
                                                                             <div className='w-full h-50 max-md:mx-auto bg-neutral-200/80 ani rounded-xl'> </div>
                                                                             {/* title & like */}
                                                                             <div className="flex justify-between items-center">
                                                                                    <div className='w-[80%] h-8 mt-4 max-md:mx-auto bg-neutral-200/80 ani rounded-xl'> </div>
                                                                             </div>
                                                                             {/* price & add cart */}
                                                                             <div className="w-full flex items-center gap-x-1 mt-6">
                                                                                    <div className="w-[50%]">
                                                                                           <div className='w-18 py-3 max-md:mx-auto bg-neutral-200/80 ani rounded-xl'> </div>
                                                                                           <div className='w-full py-4 max-md:mx-auto bg-neutral-200/80 ani rounded-xl mt-4'> </div>
                                                                                    </div>
                                                                                    <div className="w-[50%] h-18 flex items-end">
                                                                                           <div className='w-full h-12 max-md:mx-auto bg-neutral-200/80 ani rounded-xl'> </div>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                                      <div className="max-w-[18rem] min-w-[18rem] p-2.5 pb-3 rounded-xl shadow-[1px_1px_12px_1px_#3d3d3d47] font-main relative" dir="rtl">
                                                                             {/* img */}
                                                                             <div className='w-full h-50 max-md:mx-auto bg-neutral-200/80 ani rounded-xl'> </div>
                                                                             {/* title & like */}
                                                                             <div className="flex justify-between items-center">
                                                                                    <div className='w-[80%] h-8 mt-4 max-md:mx-auto bg-neutral-200/80 ani rounded-xl'> </div>
                                                                             </div>
                                                                             {/* price & add cart */}
                                                                             <div className="w-full flex items-center gap-x-1 mt-6">
                                                                                    <div className="w-[50%]">
                                                                                           <div className='w-18 py-3 max-md:mx-auto bg-neutral-200/80 ani rounded-xl'> </div>
                                                                                           <div className='w-full py-4 max-md:mx-auto bg-neutral-200/80 ani rounded-xl mt-4'> </div>
                                                                                    </div>
                                                                                    <div className="w-[50%] h-18 flex items-end">
                                                                                           <div className='w-full h-12 max-md:mx-auto bg-neutral-200/80 ani rounded-xl'> </div>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                                      <div className="max-w-[18rem] min-w-[18rem] p-2.5 pb-3 rounded-xl shadow-[1px_1px_12px_1px_#3d3d3d47] font-main relative" dir="rtl">
                                                                             {/* img */}
                                                                             <div className='w-full h-50 max-md:mx-auto bg-neutral-200/80 ani rounded-xl'> </div>
                                                                             {/* title & like */}
                                                                             <div className="flex justify-between items-center">
                                                                                    <div className='w-[80%] h-8 mt-4 max-md:mx-auto bg-neutral-200/80 ani rounded-xl'> </div>
                                                                             </div>
                                                                             {/* price & add cart */}
                                                                             <div className="w-full flex items-center gap-x-1 mt-6">
                                                                                    <div className="w-[50%]">
                                                                                           <div className='w-18 py-3 max-md:mx-auto bg-neutral-200/80 ani rounded-xl'> </div>
                                                                                           <div className='w-full py-4 max-md:mx-auto bg-neutral-200/80 ani rounded-xl mt-4'> </div>
                                                                                    </div>
                                                                                    <div className="w-[50%] h-18 flex items-end">
                                                                                           <div className='w-full h-12 max-md:mx-auto bg-neutral-200/80 ani rounded-xl'> </div>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        ) : (
                                                               <p>Error</p>
                                                        )
                                                 ) : (
                                                        <>
                                                               <div className="w-full grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 max-lg:justify-items-center max-lg:gap-x-2 px-3">
                                                                      {
                                                                             data.products.map(item => (
                                                                                    <CardProductForAll
                                                                                           key={item.id}
                                                                                           id={item.id}
                                                                                           linked={"product/" + item.slug}
                                                                                           onLike={() => console.log("add to cart")}
                                                                                           maxValueForCart={8 /* prduct quantity in db */}
                                                                                           price={item.price}
                                                                                           title={item.title}
                                                                                           img={item.image}
                                                                                    />
                                                                             ))
                                                                      }
                                                               </div>
                                                               <div className="relative w-full border border-neutral-400 my-12 opacity-50">
                                                                      <p className="bg-white absolute -top-2.5 left-1/2 -translate-x-1/2 px-4 text-sm cursor-pointer" onClick={nextPageHandler}>
                                                                             {
                                                                                    isFetchingNextPage ? "Loading..." : "Load More"
                                                                             }
                                                                      </p>
                                                               </div>
                                                        </>
                                                 )
                                          }

                                   </div>
                            </div>
                            {/* filter & sorting --mobile */}
                            <div onClick={() => { setOpenFilter(false); setOpenSort(false); }} className={`fixed bottom-0 left-0 w-full h-dvh bg-black/50 z-101 backdrop-blur-xs transition-all ${openFilter || openSort ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}></div>
                            <div className={`w-full max-h-[70%] min-h-[70%] overflow-auto scrollbar-hidden px-4 pt-6 bg-white rounded-t-4xl z-101 fixed left-0 transition-all ${openFilter ? "bottom-0" : "bottom-[-70%]"}`}>
                                   <div className="w-full px-2 top-8">
                                          <h1 className="text-xl pb-1 flex gap-x-2 items-center"><MdFilterAlt className="size-7 text-text_secondary" /> فیلتر های پیشرفته </h1>
                                          <hr className="my-3" />
                                          {/* product status */}
                                          <div className="w-full">
                                                 <h3 className="py-2 rounded-lg bg-box_secondary mb-4 flex gap-x-2 justify-center items-center text-text_secondary"><RiExchange2Fill className="size-5" />وضعیت محصول </h3>
                                                 <div className="flex gap-x-2 mt-1">
                                                        <label
                                                               htmlFor="1"
                                                               className="flex flex-row items-center gap-2.5 text-black"
                                                        >
                                                               <input id="1" type="checkbox" name="pStatus" className="peer hidden" />
                                                               <div
                                                                      htmlFor="1"
                                                                      className="h-5 w-5 flex rounded-md border border-neutral-400 bg-transparent peer-checked:bg-box_primary transition duration-200"
                                                               >
                                                               </div>
                                                               تخفیف دار
                                                        </label>
                                                 </div>
                                                 <div className="flex gap-x-2 mt-1">
                                                        <label
                                                               htmlFor="2"
                                                               className="flex flex-row items-center gap-2.5 text-black"
                                                        >
                                                               <input id="2" type="checkbox" name="pStatus" className="peer hidden" />
                                                               <div
                                                                      htmlFor="2"
                                                                      className="h-5 w-5 flex rounded-md border border-neutral-400 bg-transparent peer-checked:bg-box_primary transition duration-200"
                                                               >
                                                               </div>
                                                               در انبار
                                                        </label>
                                                 </div>
                                                 <div className="flex gap-x-2 mt-1">
                                                        <label
                                                               htmlFor="3"
                                                               className="flex flex-row items-center gap-2.5 text-black"
                                                        >
                                                               <input id="3" type="checkbox" name="pStatus" className="peer hidden" />
                                                               <div
                                                                      htmlFor="3"
                                                                      className="h-5 w-5 flex rounded-md border border-neutral-400 bg-transparent peer-checked:bg-box_primary transition duration-200"
                                                               >
                                                               </div>

                                                               ارسال رایگان
                                                        </label>
                                                 </div>
                                          </div>
                                          {/* price range */}
                                          <div className="w-full mt-12">
                                                 <h3 className="py-2 rounded-lg bg-box_secondary text-center mb-4 flex gap-x-2 justify-center items-center text-text_secondary"><MdOutlinePriceChange className="size-6" />محدوده قیمت </h3>
                                                 <div className="w-full flex items-center gap-x-2">
                                                        <label className="w-1/10" htmlFor="">از</label>
                                                        <input type="text" className="w-full p-1 border border-text_secondary rounded" />
                                                        <p className="w-2/10">تومان</p>
                                                 </div>
                                                 <div className="w-full flex items-center gap-x-2 mt-4">
                                                        <label className="w-1/10" htmlFor="">تا</label>
                                                        <input type="text" className="w-full p-1 border border-text_secondary rounded" />
                                                        <p className="w-2/10">تومان</p>
                                                 </div>
                                          </div>
                                          {/* color product */}
                                          <div className="w-full mt-16">
                                                 <h3 className="py-2 rounded-lg bg-box_secondary text-center mb-4 flex gap-x-2 justify-center items-center text-text_secondary"><MdColorLens className="size-6" />رنگ محصول </h3>
                                                 <div className="flex gap-x-4">
                                                        <div style={{ backgroundColor: "#00d5be" }} className="rounded-full bgt border-neutral-300 size-8"></div>
                                                        <div style={{ backgroundColor: "#00d5be" }} className="rounded-full bgt border-neutral-300 size-8"></div>
                                                        <div style={{ backgroundColor: "#00d5be" }} className="rounded-full bgt border-neutral-300 size-8"></div>
                                                        <div style={{ backgroundColor: "#00d5be" }} className="rounded-full bgt border-neutral-300 size-8"></div>
                                                 </div>
                                          </div>
                                          {/* categories */}
                                          <div className="w-full mt-16">
                                                 <h3 className="py-2 rounded-lg bg-box_secondary text-center mb-4 flex gap-x-2 justify-center items-center text-text_secondary"><BiSolidCategoryAlt className="size-6" />دسته بندی ها </h3>
                                                 <div className="flex gap-x-4">
                                                        <Accordion>
                                                               <AccordionItem eventKey={"poshak"} className="bg-black/5 rounded-lg">
                                                                      {/* btn */}
                                                                      <p className="w-fit p-1 ">پوشاک</p>
                                                                      {/* content */}
                                                                      <ul className="space-y-2">
                                                                             <li>مردانه</li>
                                                                             <li>زنانه</li>
                                                                             <li>
                                                                                    <Accordion>
                                                                                           <AccordionItem className="bg-black/5 rounded-lg" eventKey={"poshak"}>
                                                                                                  {/* btn */}
                                                                                                  <p className="w-fit p-1">پوشاک</p>
                                                                                                  {/* content */}
                                                                                                  <ul className="space-y-2">
                                                                                                         <li>مردانه</li>
                                                                                                         <li>زنانه</li>
                                                                                                  </ul>
                                                                                           </AccordionItem>
                                                                                    </Accordion>
                                                                             </li>
                                                                      </ul>
                                                               </AccordionItem>
                                                               <AccordionItem eventKey={"lavazem"} className="bg-black/5 rounded-lg">
                                                                      {/* btn */}
                                                                      <p className="w-fit p-1 ">لوازم ورزشی</p>
                                                                      {/* content */}
                                                                      <ul className="space-y-2">
                                                                             <li>دمبل</li>
                                                                             <li>پوشاک ورزشی</li>
                                                                             <li>بند ها</li>
                                                                             <li>کلاه</li>
                                                                             <li>کفش</li>
                                                                      </ul>
                                                               </AccordionItem>
                                                        </Accordion>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            <div className={`w-full max-h-[55%] min-h-[55%] overflow-auto scrollbar-hidden px-4 pt-6 bg-white rounded-t-4xl z-101 fixed left-0 transition-all ${openSort ? "bottom-0" : "bottom-[-55%]"}`}>
                                   <div className="w-full px-2 top-8">
                                          <h1 className="text-xl pb-1 flex gap-x-2 items-center"><BsSortUp className="size-7 text-text_secondary" /> مرتب سازی </h1>
                                          <hr className="my-3" />
                                          <ul className="space-y-4">
                                                 <li>
                                                        <div onClick={() => setFiltering("sort", 1)} className={`w-full border border-neutral-400 p-2 text-lg rounded-lg cursor-pointer hover:scale-103 transition-all ${params.get("sort") == 1 && "bg-box_primary scale-103"}`}>
                                                               ارزان ترین
                                                        </div>
                                                 </li>
                                                 <li>
                                                        <div onClick={() => setFiltering("sort", 2)} className={`w-full border border-neutral-400 p-2 text-lg rounded-lg cursor-pointer hover:scale-103 transition-all ${params.get("sort") == 2 && "bg-box_primary scale-103"}`}>
                                                               گران ترین
                                                        </div>
                                                 </li>
                                                 <li>
                                                        <div onClick={() => setFiltering("sort", 3)} className={`w-full border border-neutral-400 p-2 text-lg rounded-lg cursor-pointer hover:scale-103 transition-all ${params.get("sort") == 3 && "bg-box_primary scale-103"}`}>
                                                               محبوب ترین
                                                        </div>
                                                 </li>
                                                 <li>
                                                        <div onClick={() => setFiltering("sort", 4)} className={`w-full border border-neutral-400 p-2 text-lg rounded-lg cursor-pointer hover:scale-103 transition-all ${params.get("sort") == 4 && "bg-box_primary scale-103"}`}>
                                                               پرفروش ترین
                                                        </div>
                                                 </li>
                                                 <li>
                                                        <div onClick={() => deleteFiltering("sort")} className={`w-full border border-neutral-400 p-2 text-lg rounded-lg cursor-pointer hover:scale-103 transition-all ${!params.get("sort") && "bg-box_primary scale-103"}`}>
                                                               تازه ترین
                                                        </div>
                                                 </li>
                                          </ul>
                                   </div>
                            </div>
                     </section>
                     <Footer />
              </>
       )
}