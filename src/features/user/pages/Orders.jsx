import Sidebar from "./../layouts/Sidebar"
import Navbar from "../../../shared/layouts/Navbar"
import { BiListPlus } from "react-icons/bi"
import convertTpPersian from "./../../../shared/utils/ConvertToPersian"
import FormatingPr from "./../../../shared/utils/FormatingPrice"
import { BsArrowLeft } from "react-icons/bs"
import ConvertToPersian from "./../../../shared/utils/ConvertToPersian"

export default function Dashboard() {

       return (
              <>
                     <Navbar />
                     <section className="w-full mt-10 mb-6 font-main flex max-md:block justify-between max-md:px-8 max-md:pb-4" dir="rtl">
                            {/* sidebar */}
                            <Sidebar />
                            {/* content */}
                            <main className="w-[calc(100%-312px)] max-md:w-full max-md:mt-8 px-4">
                                   <div className="flex justify-between items-center">
                                          <h1 className="text-2xl text-text_secondary font-main-bold flex items-center gap-x-2"><BiListPlus /> سفارشات</h1>
                                   </div>
                                   <div className="w-full mt-8 space-y-4">
                                          {/* items */}
                                          <div className="w-full border border-neutral-300 rounded-lg">
                                                 {/* titles */}
                                                 <div className="py-6">
                                                        <ul className="flex max-md:flex-col max-md:gap-4 divide-x divide-neutral-300 max-lg:text-sm">
                                                               <li className="w-full flex justify-center items-center flex-col gap-y-2 text-center">
                                                                      <p className="text-neutral-500">شماره سفارش</p>
                                                                      <p>{convertTpPersian(416541651)}</p>
                                                               </li>
                                                               <li className="w-full flex justify-center items-center flex-col gap-y-2 text-center">
                                                                      <p className="text-neutral-500">مبلغ کل</p>
                                                                      <p><FormatingPr price={125000000} tomanSize="16px" /> </p>
                                                               </li>
                                                               <li className="w-full flex justify-center items-center flex-col gap-y-2 text-center">
                                                                      <p className="text-neutral-500">تاریخ ثبت سفارش</p>
                                                                      <p>{convertTpPersian("1404/02/22")} </p>
                                                               </li>
                                                               <li className="w-full flex justify-center items-center flex-col gap-y-2 text-center">
                                                                      <p className="text-neutral-500">وضعیت</p>
                                                                      <p className="text-green-600">تحویل شده</p>
                                                               </li>
                                                               <li className="w-full flex justify-center items-center flex-col gap-y-2 text-center">
                                                                      <p className="flex items-center gap-x-2 text-lg text-text_secondary">جزئیات <BsArrowLeft /></p>
                                                               </li>
                                                        </ul>
                                                 </div>
                                                 {/* content */}
                                                 <div className="py-4 px-4 flex flex-wrap gap-6">
                                                        <div className="w-26 h-32 relative">
                                                               <p className="absolute top-1 left-1 text-neutral-500 bg-white rounded-full size-6 flex justify-center items-center">
                                                                      <span>{ConvertToPersian(12)}</span>
                                                               </p>
                                                               <img loading="lazy" src="/images/box.webp" alt="" className="border border-neutral-300 rounded-lg" />
                                                               <div className="w-full flex flex-wrap mt-2 justify-center px-4">
                                                                      <div className="size-4 rounded-full bg-amber-300"></div>
                                                               </div>
                                                        </div>
                                                        <div className="w-26 h-32 relative">
                                                               <p className="absolute top-1 left-1 text-neutral-500 bg-white rounded-full size-6 flex justify-center items-center">
                                                                      <span>{ConvertToPersian(12)}</span>
                                                               </p>
                                                               <img loading="lazy" src="/images/shoe.png" alt="" className="border border-neutral-300 rounded-lg" />
                                                               <div className="w-full flex flex-wrap mt-2 justify-center px-4">
                                                                      <div className="size-4 rounded-full bg-amber-300"></div>
                                                               </div>
                                                        </div>
                                                        <div className="w-26 h-32 relative">
                                                               <p className="absolute top-1 left-1 text-neutral-500 bg-white rounded-full size-6 flex justify-center items-center">
                                                                      <span>{ConvertToPersian(12)}</span>
                                                               </p>
                                                               <img loading="lazy" src="/images/smart-watch.webp" alt="" className="border border-neutral-300 rounded-lg" />
                                                               <div className="w-full flex flex-wrap mt-2 justify-center px-4">
                                                                      <div className="size-4 rounded-full bg-amber-300"></div>
                                                               </div>
                                                        </div>
                                                        <div className="w-26 h-32 relative">
                                                               <p className="absolute top-1 left-1 text-neutral-500 bg-white rounded-full size-6 flex justify-center items-center">
                                                                      <span>{ConvertToPersian(12)}</span>
                                                               </p>
                                                               <img loading="lazy" src="/images/shoe.webp" alt="" className="border border-neutral-300 rounded-lg" />
                                                               <div className="w-full flex flex-wrap mt-2 justify-center px-4">
                                                                      <div className="size-4 rounded-full bg-amber-300"></div>
                                                               </div>
                                                        </div>
                                                        <div className="w-26 h-32 relative">
                                                               <p className="absolute top-1 left-1 text-neutral-500 bg-white rounded-full size-6 flex justify-center items-center">
                                                                      <span>{ConvertToPersian(12)}</span>
                                                               </p>
                                                               <img loading="lazy" src="/images/shoe.png" alt="" className="border border-neutral-300 rounded-lg" />
                                                               <div className="w-full flex flex-wrap mt-2 justify-center px-4">
                                                                      <div className="size-4 rounded-full bg-amber-300"></div>
                                                               </div>
                                                        </div>
                                                        <div className="w-26 h-32 relative">
                                                               <p className="absolute top-1 left-1 text-neutral-500 bg-white rounded-full size-6 flex justify-center items-center">
                                                                      <span>{ConvertToPersian(12)}</span>
                                                               </p>
                                                               <img loading="lazy" src="/images/smart-watch.webp" alt="" className="border border-neutral-300 rounded-lg" />
                                                               <div className="w-full flex flex-wrap mt-2 justify-center px-4">
                                                                      <div className="size-4 rounded-full bg-amber-300"></div>
                                                               </div>
                                                        </div>
                                                        <div className="w-26 h-32 relative">
                                                               <p className="absolute top-1 left-1 text-neutral-500 bg-white rounded-full size-6 flex justify-center items-center">
                                                                      <span>{ConvertToPersian(12)}</span>
                                                               </p>
                                                               <img loading="lazy" src="/images/shoe.webp" alt="" className="border border-neutral-300 rounded-lg" />
                                                               <div className="w-full flex flex-wrap mt-2 justify-center px-4">
                                                                      <div className="size-4 rounded-full bg-amber-300"></div>
                                                               </div>
                                                        </div>
                                                        <div className="w-26 h-32 relative">
                                                               <p className="absolute top-1 left-1 text-neutral-500 bg-white rounded-full size-6 flex justify-center items-center">
                                                                      <span>{ConvertToPersian(12)}</span>
                                                               </p>
                                                               <img loading="lazy" src="/images/shoe.png" alt="" className="border border-neutral-300 rounded-lg" />
                                                               <div className="w-full flex flex-wrap mt-2 justify-center px-4">
                                                                      <div className="size-4 rounded-full bg-amber-300"></div>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                          {/* items */}
                                          <div className="w-full border border-neutral-300 rounded-lg">
                                                 {/* titles */}
                                                 <div className="py-6">
                                                        <ul className="flex max-md:flex-col max-md:gap-4 divide-x divide-neutral-300 max-lg:text-sm">
                                                               <li className="w-full flex justify-center items-center flex-col gap-y-2 text-center">
                                                                      <p className="text-neutral-500">شماره سفارش</p>
                                                                      <p>{convertTpPersian(416541651)}</p>
                                                               </li>
                                                               <li className="w-full flex justify-center items-center flex-col gap-y-2 text-center">
                                                                      <p className="text-neutral-500">مبلغ کل</p>
                                                                      <p><FormatingPr price={125000000} tomanSize="16px" /> </p>
                                                               </li>
                                                               <li className="w-full flex justify-center items-center flex-col gap-y-2 text-center">
                                                                      <p className="text-neutral-500">تاریخ ثبت سفارش</p>
                                                                      <p>{convertTpPersian("1404/02/22")} </p>
                                                               </li>
                                                               <li className="w-full flex justify-center items-center flex-col gap-y-2 text-center">
                                                                      <p className="text-neutral-500">وضعیت</p>
                                                                      <p className="text-green-600">تحویل شده</p>
                                                               </li>
                                                               <li className="w-full flex justify-center items-center flex-col gap-y-2 text-center">
                                                                      <p className="flex items-center gap-x-2 text-lg text-text_secondary">جزئیات <BsArrowLeft /></p>
                                                               </li>
                                                        </ul>
                                                 </div>
                                                 {/* content */}
                                                 <div className="py-4 px-4 flex flex-wrap gap-6">
                                                        <div className="w-26 h-32 relative">
                                                               <p className="absolute top-1 left-1 text-neutral-500 bg-white rounded-full size-6 flex justify-center items-center">
                                                                      <span>{ConvertToPersian(12)}</span>
                                                               </p>
                                                               <img loading="lazy" src="/images/box.webp" alt="" className="border border-neutral-300 rounded-lg" />
                                                               <div className="w-full flex flex-wrap mt-2 justify-center px-4">
                                                                      <div className="size-4 rounded-full bg-amber-300"></div>
                                                               </div>
                                                        </div>
                                                        <div className="w-26 h-32 relative">
                                                               <p className="absolute top-1 left-1 text-neutral-500 bg-white rounded-full size-6 flex justify-center items-center">
                                                                      <span>{ConvertToPersian(12)}</span>
                                                               </p>
                                                               <img loading="lazy" src="/images/shoe.png" alt="" className="border border-neutral-300 rounded-lg" />
                                                               <div className="w-full flex flex-wrap mt-2 justify-center px-4">
                                                                      <div className="size-4 rounded-full bg-amber-300"></div>
                                                               </div>
                                                        </div>
                                                        <div className="w-26 h-32 relative">
                                                               <p className="absolute top-1 left-1 text-neutral-500 bg-white rounded-full size-6 flex justify-center items-center">
                                                                      <span>{ConvertToPersian(12)}</span>
                                                               </p>
                                                               <img loading="lazy" src="/images/smart-watch.webp" alt="" className="border border-neutral-300 rounded-lg" />
                                                               <div className="w-full flex flex-wrap mt-2 justify-center px-4">
                                                                      <div className="size-4 rounded-full bg-amber-300"></div>
                                                               </div>
                                                        </div>
                                                        <div className="w-26 h-32 relative">
                                                               <p className="absolute top-1 left-1 text-neutral-500 bg-white rounded-full size-6 flex justify-center items-center">
                                                                      <span>{ConvertToPersian(12)}</span>
                                                               </p>
                                                               <img loading="lazy" src="/images/shoe.webp" alt="" className="border border-neutral-300 rounded-lg" />
                                                               <div className="w-full flex flex-wrap mt-2 justify-center px-4">
                                                                      <div className="size-4 rounded-full bg-amber-300"></div>
                                                               </div>
                                                        </div>
                                                        <div className="w-26 h-32 relative">
                                                               <p className="absolute top-1 left-1 text-neutral-500 bg-white rounded-full size-6 flex justify-center items-center">
                                                                      <span>{ConvertToPersian(12)}</span>
                                                               </p>
                                                               <img loading="lazy" src="/images/shoe.png" alt="" className="border border-neutral-300 rounded-lg" />
                                                               <div className="w-full flex flex-wrap mt-2 justify-center px-4">
                                                                      <div className="size-4 rounded-full bg-amber-300"></div>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </main>
                     </section>
              </>
       )
}
