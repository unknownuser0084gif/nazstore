import { useParams } from "react-router-dom"
import Navbar from "./../../../shared/layouts/Navbar"
import Footer from "./../../../shared/layouts/Footer"
import NotFoundPage from "../../../shared/components/404"
import { useReducer, useState } from 'react';
import FormatPrice, { FormatNumber } from "../../../shared/components/FormatPrice"
import { layouts } from "../../../features/product"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Thumbs } from 'swiper/modules';
import { useForm } from "react-hook-form";
import useDetails from "../hooks/useDetails"

export default function ProductDetails() {

       const [thumbsSwiper, setThumbsSwiper] = useState(null);
       const [testCart, setTestCart] = useState(false);
       const [position, setPosition] = useState("intro");
       const { register, handleSubmit, formState: { errors } } = useForm()

       const queryParam = useParams()
       const { isPending, data, error } = useDetails(queryParam.slug)
       // console.log({ isPending, data, error })

       return (
              <>
                     <Navbar />
                     {
                            (!isPending && data && data.status === "not found") ? (
                                   <NotFoundPage />
                            ) : (
                                   <section className="w-full mb-24" dir="rtl">
                                          {

                                                 (isPending || error) ? (
                                                        // Loading section
                                                        <div className="w-full">
                                                               {/* info & cover box */}
                                                               <div className=" w-full flex max-md:flex-col mt-12 font-main">
                                                                      {/* cover */}
                                                                      <div className='w-98 h-78 max-md:mx-auto bg-neutral-200/80 ani rounded-xl'>
                                                                      </div>
                                                                      {/* content */}
                                                                      <div className="w-full flex max-lg:flex-col px-8 gap-x-12 gap-y-12 max-md:mt-38">
                                                                             {/* info */}
                                                                             <div className="w-6/11 max-lg:w-full space-y-6">
                                                                                    {/* name */}
                                                                                    <div className="w-full h-8 bg-neutral-200/80 ani rounded-xl"></div>
                                                                                    {/* summary */}
                                                                                    <div className="w-full h-16 bg-neutral-200/80 ani rounded-xl"></div>
                                                                                    {/* color */}
                                                                                    <div className="space-y-2">
                                                                                           <div className="w-22 h-8 bg-neutral-200/80 ani rounded-xl  "></div>
                                                                                           <div className="flex gap-x-1.5 mt-4">
                                                                                                  <div className="size-8 bg-neutral-200/80 ani rounded-full"></div>
                                                                                                  <div className="size-8 bg-neutral-200/80 ani rounded-full"></div>
                                                                                                  <div className="size-8 bg-neutral-200/80 ani rounded-full"></div>
                                                                                           </div>
                                                                                    </div>
                                                                                    {/* size */}
                                                                                    <div className="space-y-2">
                                                                                           <div className="w-22 h-8 bg-neutral-200/80 ani rounded-xl"></div>
                                                                                           <div className="flex gap-x-1.5 mt-4">
                                                                                                  <div className="w-12 h-8 bg-neutral-200/80 ani rounded-full"></div>
                                                                                                  <div className="w-12 h-8 bg-neutral-200/80 ani rounded-full"></div>
                                                                                                  <div className="w-12 h-8 bg-neutral-200/80 ani rounded-full"></div>
                                                                                           </div>
                                                                                    </div>
                                                                             </div>
                                                                             {/* calculate */}
                                                                             <div className="w-5/10 max-lg:w-full h-fit border border-neutral-200 rounded-xl p-2 relative ani" >
                                                                                    {/* prices */}
                                                                                    <div className="w-full h-22 bg-neutral-200/80 rounded-xl"> </div>
                                                                                    <hr className="mt-4 opacity-40" />
                                                                                    {/* cart */}
                                                                                    <div className="w-full h-18 bg-neutral-200/80 rounded-xl mt-4"> </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                               {/* introduction & specification & comments */}
                                                               <div className=" w-full max-md:w-[95%] mx-auto p-4 bg-neutral-200/80 ani rounded-xl mt-38 font-main max-md:text-sm">
                                                                      <div className="w-full h-120"></div>
                                                               </div>
                                                        </div>
                                                 ) : (
                                                        <>
                                                               {/* info & cover box */}
                                                               <div className="w-full flex max-md:flex-col mt-12 font-main">
                                                                      {/* cover */}
                                                                      <div className='max-w-98 h-78 max-md:mx-auto'>
                                                                             <Swiper
                                                                                    style={{
                                                                                           '--swiper-navigation-color': '#fff',
                                                                                           '--swiper-pagination-color': '#fff',
                                                                                    }}
                                                                                    spaceBetween={10}
                                                                                    thumbs={{ swiper: thumbsSwiper }}
                                                                                    modules={[FreeMode, Thumbs]}
                                                                                    className="mySwiper2"
                                                                             >
                                                                                    <SwiperSlide>
                                                                                           <img loading="lazy" src={data.message.image} />
                                                                                    </SwiperSlide>
                                                                                    <SwiperSlide>
                                                                                           <img loading="lazy" src="../images/chose3.webp" />
                                                                                    </SwiperSlide>
                                                                                    <SwiperSlide>
                                                                                           <img loading="lazy" src="../images/shoe.png" />
                                                                                    </SwiperSlide>
                                                                                    <SwiperSlide>
                                                                                           <img loading="lazy" src="../images/chose2.webp" />
                                                                                    </SwiperSlide>
                                                                                    <SwiperSlide>
                                                                                           <img loading="lazy" src="../images/chose3.webp" />
                                                                                    </SwiperSlide>
                                                                                    <SwiperSlide>
                                                                                           <img loading="lazy" src="../images/shoe.png" />
                                                                                    </SwiperSlide>
                                                                             </Swiper>
                                                                             <Swiper
                                                                                    onSwiper={setThumbsSwiper}
                                                                                    spaceBetween={10}
                                                                                    slidesPerView={4}
                                                                                    freeMode={true}
                                                                                    watchSlidesProgress={true}
                                                                                    modules={[FreeMode, Thumbs]}
                                                                                    className="mySwiper"
                                                                             >
                                                                                    <SwiperSlide>
                                                                                           <img loading="lazy" src={data.message.image} />
                                                                                    </SwiperSlide>
                                                                                    <SwiperSlide>
                                                                                           <img loading="lazy" src="../images/chose3.webp" />
                                                                                    </SwiperSlide>
                                                                                    <SwiperSlide>
                                                                                           <img loading="lazy" src="../images/shoe.png" />
                                                                                    </SwiperSlide>
                                                                                    <SwiperSlide>
                                                                                           <img loading="lazy" src="../images/chose2.webp" />
                                                                                    </SwiperSlide>
                                                                                    <SwiperSlide>
                                                                                           <img loading="lazy" src="../images/chose3.webp" />
                                                                                    </SwiperSlide>
                                                                                    <SwiperSlide>
                                                                                           <img loading="lazy" src="../images/shoe.png" />
                                                                                    </SwiperSlide>
                                                                             </Swiper>
                                                                      </div>
                                                                      {/* content */}
                                                                      <div className="w-full flex max-lg:flex-col px-8 gap-x-12 gap-y-12 max-md:mt-38">
                                                                             {/* info */}
                                                                             <div className="w-6/11 max-lg:w-full space-y-6">
                                                                                    {/* name */}
                                                                                    <p className="text-xl">{data.message.title}</p>
                                                                                    {/* summary */}
                                                                                    <p className="text-sm line-clamp-3">{data.message.summary}</p>
                                                                                    {/* color */}
                                                                                    <div className="space-y-2">
                                                                                           <p>انتخاب رنگ :</p>
                                                                                           <div className="flex gap-x-1.5">
                                                                                                  <div style={{ backgroundColor: "#ff0" }} className="size-5 rounded-full border border-neutral-400" ></div>
                                                                                                  <div style={{ backgroundColor: "#f0f" }} className="size-5 rounded-full border border-neutral-400" ></div>
                                                                                                  <div style={{ backgroundColor: "#0ff" }} className="size-5 rounded-full border border-neutral-400" ></div>
                                                                                           </div>
                                                                                    </div>
                                                                                    {/* size */}
                                                                                    <div className="space-y-2">
                                                                                           <p>انتخاب سایز :</p>
                                                                                           <div className="flex gap-x-1.5">
                                                                                                  <div className="px-3.5 py-1.5 text-white rounded-lg bg-neutral-500">XL</div>
                                                                                                  <div className="px-3.5 py-1.5 text-white rounded-lg bg-neutral-500">L</div>
                                                                                                  <div className="px-3.5 py-1.5 text-white rounded-lg bg-neutral-500">M</div>
                                                                                           </div>
                                                                                    </div>
                                                                             </div>
                                                                             {/* calculate */}
                                                                             <div className="w-5/10 max-lg:w-full h-fit border border-neutral-300 rounded-xl p-2 relative" >
                                                                                    {/* prices */}
                                                                                    <div className="w-full py-4 rounded-xl bg-box_secondary text-end px-8 relative">
                                                                                           {/* discounted price */}
                                                                                           <span className="text-2xl"><FormatPrice price={data.message.discount ? data.message.discountPrice : data.message.price} /></span> &nbsp; &nbsp;  <span className="text-sm">تومان</span>
                                                                                           {
                                                                                                  data.message.discount ? (
                                                                                                         <>
                                                                                                                {/* main price */}
                                                                                                                <p className="pe-9"><del><FormatPrice price={data.message.price} /></del></p>
                                                                                                                {/* discount precent */}
                                                                                                                <span className="absolute top-1/2 -translate-y-1/2 right-4 text-white px-4 py-1 rounded-full bg-box_primary"><FormatPrice price={data.message.discount} />%</span>
                                                                                                         </>
                                                                                                  ) : null
                                                                                           }
                                                                                    </div>
                                                                                    <hr className="mt-4 opacity-40" />
                                                                                    {/* cart */}
                                                                                    <div onClick={() => setTestCart(true)} className={`${!testCart ? "flex" : "hidden"} w-full py-6 text-white bg-box_primary mt-4 rounded-xl flex justify-center gap-x-2 cursor-pointer`}>
                                                                                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                                                           </svg>
                                                                                           <p className="text-lg">افزودن به سبد خرید</p>
                                                                                    </div>
                                                                                    {/* quantity ; if available*/}
                                                                                    <div className={`${testCart ? "flex" : "hidden"} w-full py-6 border border-neutral-300 mt-4 rounded-xl flex justify-center gap-x-8`}>
                                                                                           {/* plus */}
                                                                                           <div>
                                                                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                                                                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                                                                  </svg>
                                                                                           </div>
                                                                                           {/* quantity */}
                                                                                           <div className="text-xl">
                                                                                                  <FormatNumber num={4} />
                                                                                           </div>
                                                                                           {/* mines */}
                                                                                           <div>
                                                                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                                                                         <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                                                                  </svg>
                                                                                           </div>
                                                                                    </div>
                                                                                    {/* like & share */}
                                                                                    <div className="w-full flex gap-x-8 justify-center py-4 absolute -bottom-26 rounded-xl  left-0">
                                                                                           {/* like */}
                                                                                           <div className="flex flex-col justify-center items-center gap-y-2 text-sm">
                                                                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                                                                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                                                                  </svg>
                                                                                                  <p>مورد علاقه</p>
                                                                                           </div>
                                                                                           {/* space */}
                                                                                           <div className="h-16 border border-neutral-200"></div>
                                                                                           {/* share */}
                                                                                           <div className="flex flex-col justify-center items-center gap-y-2 text-sm">
                                                                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                                                                         <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                                                                                  </svg>
                                                                                                  <p>اشتراک گذاری</p>
                                                                                           </div>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                               {/* introduction & specification & comments */}
                                                               <div className="w-full max-md:w-[95%] mx-auto p-4 shadow-center mt-38 font-main max-md:text-sm">
                                                                      {/* buttons */}
                                                                      <div className="w-full h-12 max-md:h-10 flex justify-center gap-x-2">
                                                                             {/* intro */}
                                                                             <button onClick={() => setPosition("intro")} className={`${position === "intro" ? "text-white bg-box_primary hover:bg-box_primary!" : "bg-box_secondary"} px-6 rounded-xl transition-all duration-300 cursor-pointer  hover:bg-neutral-300`}>
                                                                                    معرفی
                                                                             </button>
                                                                             {/* spec */}
                                                                             <button onClick={() => setPosition("spec")} className={`${position === "spec" ? "text-white bg-box_primary hover:bg-box_primary!" : "bg-box_secondary"} px-6 rounded-xl transition-all duration-300 cursor-pointer  hover:bg-neutral-300`}>
                                                                                    مشخصات
                                                                             </button>
                                                                             {/* com */}
                                                                             <button onClick={() => setPosition("com")} className={`${position === "com" ? "text-white bg-box_primary hover:bg-box_primary!" : "bg-box_secondary"} px-6 rounded-xl transition-all duration-300 cursor-pointer  hover:bg-neutral-300`}>
                                                                                    دیدگاه ها
                                                                             </button>
                                                                      </div>
                                                                      {/* intro content */}
                                                                      <div className={`${position !== "intro" && "hidden"} w-full mt-8 `}>
                                                                             <p>
                                                                                    کتانی نیوبالانس New Balance 530 White Navy Blue
                                                                                    <br /><br />
                                                                                    ✅ جنس رویه: پارچه و TPU (دوام، انعطاف و راحتی)
                                                                                    <br /><br />
                                                                                    🌬️ تنفس‌پذیری بالا مناسب باشگاه، روزمره و پیاده‌روی
                                                                                    <br /><br />
                                                                                    🔧 زیره EVA برای کاهش فشار پا و مفاصل
                                                                                    <br /><br />
                                                                                    👟 نحوه بسته شدن: بند
                                                                                    <br /><br />
                                                                                    🧭 کاربرد: مناسب پیاده‌روی
                                                                                    <br /><br />
                                                                                    🇮🇷 محصول ایران
                                                                                    <br /><br />
                                                                                    🛍 برای مشاهده محصولات مشابه، به شاخه‌ی کفش‌های پیاده‌روی در فروشگاه نازاستور مراجعه فرمایید.
                                                                             </p>
                                                                      </div>
                                                                      {/* spec content */}
                                                                      <div className={`${position !== "spec" && "hidden"} w-full mt-8`}>
                                                                             <table className=" border w-full">
                                                                                    <tbody>
                                                                                           <tr>
                                                                                                  <td className="border border-neutral-300 p-2 w-2/10 text-text_secondary font-main font-bold text-lg">اندازه</td>
                                                                                                  <td className="border border-neutral-300 p-2">24 سانتی متر</td>
                                                                                           </tr>
                                                                                           <tr>
                                                                                                  <td className="border border-neutral-300 p-2 w-2/10 text-text_secondary font-main font-bold text-lg">جنس</td>
                                                                                                  <td className="border border-neutral-300 p-2">فلامنت شلواری</td>
                                                                                           </tr>
                                                                                           <tr>
                                                                                                  <td className="border border-neutral-300 p-2 w-2/10 text-text_secondary font-main font-bold text-lg">سایز</td>
                                                                                                  <td className="border border-neutral-300 p-2">از 32 تا 46</td>
                                                                                           </tr>
                                                                                           <tr>
                                                                                                  <td className="border border-neutral-300 p-2 w-2/10 text-text_secondary font-main font-bold text-lg">جزییات</td>
                                                                                                  <td className="border border-neutral-300 p-2">دوخت و رنگ‌بندی</td>
                                                                                           </tr>
                                                                                           <tr>
                                                                                                  <td className="border border-neutral-300 p-2 w-2/10 text-text_secondary font-main font-bold text-lg">تن خور</td>
                                                                                                  <td className="border border-neutral-300 p-2">جذب با کشسانی بالا</td>
                                                                                           </tr>
                                                                                    </tbody>
                                                                             </table>
                                                                      </div>
                                                                      {/* com content */}
                                                                      <div className={`${position !== "com" && "hidden"} w-full mt-8`}>
                                                                             <p className="font-main-bold">ثبت دیدگاه</p>
                                                                             <form className="mt-4" onSubmit={handleSubmit((e) => console.log("handle submitting : ", e))}>
                                                                                    <input
                                                                                           {...register("name", {
                                                                                                  required: {
                                                                                                         value: true,
                                                                                                         message: "مقدار خالی مجاز نیست!"
                                                                                                  }
                                                                                           })}
                                                                                           type="text"
                                                                                           placeholder="نام یا ایمیل"
                                                                                           className="border border-neutral-300 w-full rounded-lg p-2"
                                                                                    />
                                                                                    {errors.name && (<p className="text-red-500 py-2 text-sm">{errors.name.message}</p>)}
                                                                                    <textarea
                                                                                           {...register("comment", {
                                                                                                  required: {
                                                                                                         value: true,
                                                                                                         message: "مقدار خالی مجاز نیست!"
                                                                                                  }
                                                                                           })}
                                                                                           className="w-full p-2 border border-neutral-300 rounded-lg mt-2"
                                                                                           placeholder="نظر"
                                                                                           rows={6}
                                                                                    ></textarea>
                                                                                    {errors.comment && (<p className="text-red-500 py-2 text-sm">{errors.comment.message}</p>)}
                                                                                    <button className="w-full p-2 text-center bg-box_primary text-white rounded-lg" type="submit">ثبت</button>
                                                                             </form>
                                                                             <div className="w-full mt-6 space-y-4">
                                                                                    <div className="w-full p-6 bg-box_secondary rounded-xl">
                                                                                           {/* name & date */}
                                                                                           <p className="text-sm">علیرضا - 1404/10/02</p>
                                                                                           {/* body */}
                                                                                           <p className="mt-4">
                                                                                                  جنس عالی بود، بسته‌بندی تمیز، کاملاً راضی‌ام ✅
                                                                                           </p>
                                                                                           {/* replay */}
                                                                                           <div className="mt-4">
                                                                                                  <div className="w-full p-6 bg-box_secondary rounded-xl">
                                                                                                         {/* name & date */}
                                                                                                         <p className="text-sm">علیرضا - 1404/10/02</p>
                                                                                                         {/* body */}
                                                                                                         <p className="mt-4">
                                                                                                                جنس عالی بود، بسته‌بندی تمیز، کاملاً راضی‌ام ✅
                                                                                                         </p>
                                                                                                         {/* replay */}
                                                                                                         <div className="mt-4">
                                                                                                                <div className="w-full p-6 bg-box_secondary rounded-xl">
                                                                                                                       {/* name & date */}
                                                                                                                       <p className="text-sm">علیرضا - 1404/10/02</p>
                                                                                                                       {/* body */}
                                                                                                                       <p className="mt-4">
                                                                                                                              جنس عالی بود، بسته‌بندی تمیز، کاملاً راضی‌ام ✅
                                                                                                                       </p>
                                                                                                                </div>
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div className="w-full p-6 bg-box_secondary rounded-xl">
                                                                                           {/* name & date */}
                                                                                           <p className="text-sm">علیرضا - 1404/10/02</p>
                                                                                           {/* body */}
                                                                                           <p className="mt-4">
                                                                                                  جنس عالی بود، بسته‌بندی تمیز، کاملاً راضی‌ام ✅
                                                                                           </p>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </>
                                                 )

                                          }
                                   </section>
                            )
                     }
                     <layouts.SegustionShose />

                     <div className="w-full my-16"></div>

                     <Footer />
              </>
       )
}
