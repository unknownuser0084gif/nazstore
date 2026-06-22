import CartProductVert from "../components/CartProductVert"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function KitParty() {

       return (
              <>
                     <div className="w-full h-112 max-md:h-124 bg-box_secondary mt-20 rounded-xl relative">
                            <div className="w-full flex justify-between items-center px-8 py-6" dir="rtl">
                                   {/* title */}
                                   <div className="w-fit flex justify-center gap-1 font-main-bold text-xl max-md:text-base" dir="rtl">
                                          <p className="text-text_primary">کیت های</p>
                                          <p className="text-text_secondary">ورزشی</p>
                                   </div>
                                   {/* buttons */}
                                   <div className="w-fit px-2 flex justify-center gap-x-2 text-text_secondary">
                                          <button className=" px-4 shadow-xl bg-white rounded-full p-2.5 cursor-pointer">
                                                 <Link to={"/products"} className="font-main">مشاهده بیشتر</Link>
                                          </button>
                                          <button className="prevEl1 size-circle max-md:size-circle-md bg-white rounded-full p-2 cursor-pointer">
                                                 <IoIosArrowForward className="w-full h-full" />
                                          </button>
                                          <button className="nextEl1 size-circle max-md:size-circle-md bg-white rounded-full p-2.5 cursor-pointer">
                                                 <IoIosArrowBack className="w-full h-full" />
                                          </button>
                                   </div>
                            </div>
                            <div className="w-full overflow-x-auto scrollbar-hidden flex px-6 gap-x-8" dir="rtl">
                                   <div className="min-w-44 h-78 max-md:absolute max-md:bottom-4 max-md:w-[calc(100%-48px)] max-md:h-18 rounded-xl shadow-xl bg-[linear-gradient(315deg,#8effff,#0095ff8c,#ffc3c3)] relative text-2xl font-main-bold">
                                          <p className="absolute top-[calc(50%-3rem)] left-[calc(50%+1.5rem)] -translate-1/2 text-3xl max-md:text-xl max-md:hidden">کیت</p>
                                          <p className="absolute top-[calc(50%+0.5rem)] left-1/2 -translate-1/2 text-white text-5xl max-md:text-3xl max-md:hidden">پارتی</p>
                                          <div className="flex justify-center items-center w-full h-full -mt-1 md:hidden gap-x-2">
                                                 <p className="text-2xl">کیت</p>
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
                                                                      slidesPerView: 2
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
