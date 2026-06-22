import { AiOutlineCloseCircle, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import FormatingPrice from "../../../shared/utils/FormatingPrice"


export default function CartProduct() {
       return (
              <div className="w-full border border-dashed border-box_primary rounded-xl p-4 max-lg:pb-14 relative">
                     {/* close */}
                     <AiOutlineCloseCircle className="size-5 absolute left-2 top-2 text-red-500 cursor-pointer" />
                     {/* image & content */}
                     <div className="w-full flex gap-x-4">
                            {/* image */}
                            <div className="size-52 overflow-hidden rounded-lg">
                                   <img loading="lazy" className="object-cover w-full h-full" src="https://dkstatics-public.digikala.com/digikala-products/35105bd06010caa35d0b6e1d27b496f78c4c7751_1771412925.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90" alt="" />
                            </div>
                            <div className="w-[calc(100%-208px)] py-1">
                                   <h1 className="text-xl">کفش ورزشی کتانی برند</h1>
                                   <h1 className="text-sm line-clamp-2 mt-4">کفش ورزشی کتانی برند نایکی مدل فوتبال 2019 بهترین برند نایک | مناسب استفاده روزمره و پیاده‌روی | دارای لایه هوای قابل‌مشاهده</h1>
                                   <div className="flex items-center gap-x-2 mt-4">
                                          <p>رنگ : </p>
                                          <div className="rounded-full size-4 bg-blue-400"></div>
                                   </div>
                                   <div className="flex items-center gap-x-2 mt-6">
                                          <svg className="size-4" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.4608 1.50732C11.2607 0.539132 12.7446 0.539132 13.5445 1.50732L14.7445 2.95979C15.1677 3.472 15.8176 3.74061 16.4789 3.67664L18.3571 3.49495C19.6102 3.37372 20.6624 4.42666 20.5402 5.67974L20.3597 7.53129C20.2949 8.1958 20.566 8.84883 21.0823 9.2721L22.5232 10.4533C23.4993 11.2534 23.4993 12.7466 22.5232 13.5467L21.0823 14.7279C20.566 15.1512 20.2949 15.8042 20.3597 16.4687L20.5402 18.3203C20.6624 19.5733 19.6102 20.6263 18.3571 20.505L16.4789 20.3234C15.8176 20.2594 15.1677 20.528 14.7445 21.0402L13.5445 22.4927C12.7446 23.4609 11.2607 23.4609 10.4608 22.4927L9.26079 21.0402C8.83761 20.528 8.18769 20.2594 7.52637 20.3234L5.64824 20.505C4.39507 20.6263 3.34293 19.5733 3.4651 18.3203L3.64562 16.4687C3.71041 15.8042 3.43933 15.1512 2.92298 14.7279L1.48208 13.5467C0.505968 12.7466 0.505968 11.2534 1.48208 10.4533L2.92298 9.2721C3.43933 8.84883 3.71041 8.1958 3.64562 7.53129L3.4651 5.67974C3.34293 4.42666 4.39507 3.37372 5.64824 3.49495L7.52637 3.67664C8.18769 3.74061 8.83761 3.472 9.26079 2.95979L10.4608 1.50732Z" stroke="#0055ff" strokeWidth="1.5"></path> <path d="M8.12549 12.7725L10.4136 15.0516C10.8437 15.48 11.5531 15.4296 11.9182 14.9446L15.8801 9.68274" stroke="#0055ff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                                          <p className="text-xs">گارانتی 18 ماهه</p>
                                   </div>
                                   <div className="flex items-center gap-x-2 mt-2">
                                          <svg className="size-4" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.33045 8.38999C0.250452 11.82 9.42048 14.9 9.42048 14.9C9.42048 14.9 12.5005 24.07 15.9305 21.99C19.5705 19.77 23.9305 6.13 21.0505 3.27C18.1705 0.409998 4.55045 4.74999 2.33045 8.38999Z" stroke="#0062ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15.1999 9.12L9.41992 14.9" stroke="#0062ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                          <p className="text-xs">ارسال ۱ روز کاری</p>
                                   </div>
                            </div>
                     </div>
                     {/* quanity btns */}
                     <div className="absolute bottom-4 left-0 flex items-center gap-x-6 px-4">
                            {/* price */}
                            <div className="">
                                   <FormatingPrice className={"text-xl"} price={120000} tomanSize="12px" />
                            </div>
                            <div className="flex items-center gap-x-2.5">
                                   {/* minus */}
                                   <div className="size-7 border border-neutral-400 rounded p-1.5 cursor-pointer">
                                          <AiOutlineMinus className="w-full h-full" />
                                   </div>
                                   {/* count */}
                                   <p>12</p>
                                   {/* plus */}
                                   <div className="size-7 border border-neutral-400 rounded p-1.5 cursor-pointer">
                                          <AiOutlinePlus className="w-full h-full" />
                                   </div>
                            </div>
                     </div>
              </div>
       )
}
