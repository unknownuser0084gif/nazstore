import CartProductVert from "../components/CartProductVert"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function BestShoes() {

       return (
              <>
                     {/* {console.log(sizes)} */}
                     <div className="w-full h-112 max-md:h-124 bg-box_secondary mt-20 rounded-xl relative">
                            <div className="w-full flex justify-between items-center px-8 py-6" dir="rtl">
                                   {/* title */}
                                   <div className="w-fit flex justify-center gap-1 font-main-bold text-xl max-md:text-base" dir="rtl">
                                          <p className="text-text_primary">بهترین</p>
                                          <p className="text-text_secondary">کفش ها</p>
                                   </div>
                                   {/* buttons */}
                                   <div className="w-fit px-2 flex justify-center gap-x-2 text-text_secondary">
                                          <button className=" px-4 shadow-xl bg-white rounded-full p-2.5 cursor-pointer">
                                                 <Link to={"/products"} className="font-main">مشاهده بیشتر</Link>
                                          </button>
                                          <button className="prevEl1 size-circle max-md:size-circle-md bg-white rounded-full p-2 cursor-pointer">
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none" >
                                                        <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="" className="fill-text_secondary" />
                                                 </svg>
                                          </button>
                                          <button className="nextEl1 size-circle max-md:size-circle-md bg-white rounded-full p-2 cursor-pointer">
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none">
                                                        <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="" className="fill-text_secondary" />
                                                 </svg>
                                          </button>
                                   </div>
                            </div>
                            <div className="w-full overflow-x-auto scrollbar-hidden flex px-6 gap-x-8" dir="rtl">
                                   <div className="min-w-44 h-78 max-md:absolute max-md:bottom-4 max-md:w-[calc(100%-48px)] max-md:h-18 rounded-xl shadow-xl bg-[linear-gradient(315deg,#8effff,#0095ff8c,#ffc3c3)] relative text-2xl font-main-bold">
                                          <p className="absolute top-[calc(50%-3rem)] left-[calc(50%+1.5rem)] -translate-1/2 text-3xl max-md:text-xl max-md:hidden">کفش</p>
                                          <p className="absolute top-[calc(50%+0.5rem)] left-1/2 -translate-1/2 text-white text-5xl max-md:text-3xl max-md:hidden">پارتی</p>
                                          <div className="flex justify-center items-center w-full h-full -mt-1 md:hidden gap-x-2">
                                                 <p className="text-2xl">کفش</p>
                                                 <p className="text-white text-4xl">پارتی</p>
                                          </div>
                                   </div>
                                   <div className="md:w-[70%] lg:w-[78%] xl:w-[83%] max-md:w-full">
                                          <Swiper
                                                 slidesPerView={2}
                                                 slidesPerGroup={1}
                                                 navigation={{
                                                        nextEl: ".nextEl1",
                                                        prevEl: ".prevEl1"
                                                 }}
                                                 className="w-full h-full"
                                                 modules={[Navigation]}
                                                 breakpoints={
                                                        {
                                                               768: {
                                                                      slidesPerView: 2,
                                                                      slidesPerGroup: 1
                                                               },
                                                               1024: {
                                                                      slidesPerView: 3,
                                                                      slidesPerGroup: 2
                                                               },
                                                               1280: {
                                                                      slidesPerView: 4,
                                                                      slidesPerGroup: 2
                                                               },
                                                               1460: {
                                                                      slidesPerView: 5,
                                                                      slidesPerGroup: 2
                                                               }
                                                        }
                                                 }
                                          >
                                                 <SwiperSlide>
                                                        <div className="w-full h-full flex justify-center items-center">
                                                               <CartProductVert
                                                                      id={4}
                                                                      title={"کیت استقلال"}
                                                                      img={"/images/p2.png"}
                                                                      price={500000}
                                                                      discountPercent={10}
                                                                      discountedPrice={450000}
                                                                      link={"/product/" + "کیت استقلال"}
                                                               />
                                                        </div>
                                                 </SwiperSlide>
                                                 <SwiperSlide>
                                                        <div className="w-full h-full flex justify-center items-center">
                                                               <CartProductVert
                                                                      id={4}
                                                                      title={"کیت اینتر"}
                                                                      img={"/images/p3.png"}
                                                                      price={500000}
                                                                      discountPercent={10}
                                                                      discountedPrice={450000}
                                                                      link={"/product/" + "کیت اینتر"}
                                                               />
                                                        </div>
                                                 </SwiperSlide>
                                                 <SwiperSlide>
                                                        <div className="w-full h-full flex justify-center items-center">
                                                               <CartProductVert
                                                                      id={4}
                                                                      title={"کیت بارسلونا"}
                                                                      img={"/images/p6.jpg"}
                                                                      price={500000}
                                                                      discountPercent={10}
                                                                      discountedPrice={450000}
                                                                      link={"/product/" + "کیت بارسلونا"}
                                                               />
                                                        </div>
                                                 </SwiperSlide>
                                                 <SwiperSlide>
                                                        <div className="w-full h-full flex justify-center items-center">
                                                               <CartProductVert
                                                                      id={4}
                                                                      title={"کیت پرسپولیس"}
                                                                      img={"/images/p4.png"}
                                                                      price={500000}
                                                                      discountPercent={10}
                                                                      discountedPrice={450000}
                                                                      link={"/product/" + "کیت پرسپولیس"}
                                                               />
                                                        </div>
                                                 </SwiperSlide>
                                                 <SwiperSlide>
                                                        <div className="w-full h-full flex justify-center items-center">
                                                               <CartProductVert
                                                                      id={4}
                                                                      title={"کیت استقلال"}
                                                                      img={"/images/p2.png"}
                                                                      price={500000}
                                                                      discountPercent={10}
                                                                      discountedPrice={450000}
                                                                      link={"/product/" + "کیت استقلال"}
                                                               />
                                                        </div>
                                                 </SwiperSlide>
                                                 <SwiperSlide>
                                                        <div className="w-full h-full flex justify-center items-center">
                                                               <CartProductVert
                                                                      id={4}
                                                                      title={"کیت اینتر"}
                                                                      img={"/images/p3.png"}
                                                                      price={500000}
                                                                      discountPercent={10}
                                                                      discountedPrice={450000}
                                                                      link={"/product/" + "کیت اینتر"}
                                                               />
                                                        </div>
                                                 </SwiperSlide>
                                                 <SwiperSlide>
                                                        <div className="w-full h-full flex justify-center items-center">
                                                               <CartProductVert
                                                                      id={4}
                                                                      title={"کیت بارسلونا"}
                                                                      img={"/images/p6.jpg"}
                                                                      price={500000}
                                                                      discountPercent={10}
                                                                      discountedPrice={450000}
                                                                      link={"/product/" + "کیت بارسلونا"}
                                                               />
                                                        </div>
                                                 </SwiperSlide>
                                                 <SwiperSlide>
                                                        <div className="w-full h-full flex justify-center items-center">
                                                               <CartProductVert
                                                                      id={4}
                                                                      title={"کیت پرسپولیس"}
                                                                      img={"/images/p4.png"}
                                                                      price={500000}
                                                                      discountPercent={10}
                                                                      discountedPrice={450000}
                                                                      link={"/product/" + "کیت پرسپولیس"}
                                                               />
                                                        </div>
                                                 </SwiperSlide>
                                          </Swiper>
                                   </div>
                            </div>
                     </div>
              </>
       )
}
