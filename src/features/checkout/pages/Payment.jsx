import Navbar from "../../../shared/layouts/Navbar"
import Footer from "../../../shared/layouts/Footer"
import { Link } from "react-router-dom"
import FormatingPrice from "../../../shared/utils/FormatingPrice"
import { MdLocalAtm } from "react-icons/md"
import { RiDiscountPercentFill } from "react-icons/ri"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { GrLocationPin } from "react-icons/gr"
import ConvertToPersian from "../../../shared/utils/ConvertToPersian"
import { useState } from "react"

export default function Payment() {

       const [payWith, setPayWith] = useState(1)

       return (
              <>
                     <Navbar />
                     <section className="w-full mb-14 mt-8 font-main max-md:px-4" dir="rtl">
                            {/* container */}
                            <div className="w-full mt-12 flex max-md:block gap-x-4">
                                   <div className="w-6/10 max-md:w-full">
                                          {/* titles */}
                                          <div className="flex justify-between items-center mt-8">
                                                 <h3 className="text-xl text-text_secondary font-main-bold flex gap-x-1.5 items-center" dir="ltr">انتخاب روش پرداخت <MdLocalAtm className="size-7" /></h3>
                                          </div>
                                          {/* container */}
                                          <div className="w-full mt-6 space-y-4">
                                                 {/* item */}
                                                 <div className="w-full border border-box_primary rounded-xl p-4 relative ">
                                                        <div className="flex gap-x-2">
                                                               <label
                                                                      htmlFor="1"
                                                                      className="flex flex-row items-center gap-2.5 text-black"
                                                               >
                                                                      <input id="1" type="radio" name="pStatus" className="peer hidden" onChange={() => setPayWith(1)} checked={payWith === 1 && true} />
                                                                      <div
                                                                             htmlFor="1"
                                                                             className="h-5 w-5 flex rounded-md border border-neutral-400 bg-transparent peer-checked:bg-box_primary transition duration-200"
                                                                      >
                                                                      </div>
                                                                      پرداخت اینترنتی (درگاه بانکی)
                                                               </label>
                                                        </div>
                                                 </div>
                                                 {/* item */}
                                                 <div className="w-full border border-box_primary rounded-xl p-4 relative flex justify-between">
                                                        <div className="flex gap-x-2">
                                                               <label
                                                                      htmlFor="2"
                                                                      className="flex flex-row items-center gap-2.5 text-black"
                                                               >
                                                                      <input id="2" type="radio" name="pStatus" className="peer hidden" onChange={() => setPayWith(2)} checked={payWith === 2 && true} />
                                                                      <div
                                                                             htmlFor="2"
                                                                             className="h-5 w-5 flex rounded-md border border-neutral-400 bg-transparent peer-checked:bg-box_primary transition duration-200"
                                                                      >
                                                                      </div>
                                                                      پرداخت اعتباری (اقساطی)
                                                               </label>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="mt-12 rounded-xl opacity-90">
                                                 {/* titles */}
                                                 <div className="flex justify-between items-center">
                                                        <h3 className="text-xl text-text_secondary font-main-bold flex gap-x-1.5 items-center" dir="ltr">اطلاعات سفارش <AiOutlineInfoCircle className="size-6 text-text_secondary" /></h3>
                                                 </div>
                                                 {/* container */}
                                                 <div className="w-full mt-6 space-y-4">
                                                        <div className="w-full border border-box_primary rounded-xl p-4 relative">
                                                               <h3 className="text-text_secondary text-lg flex items-center font-bold gap-x-2"><GrLocationPin /> آدرس شرکت تقی آباد </h3>
                                                               <div className="mt-6 space-y-3 text-sm">
                                                                      <p>استان تهران خیابون ازادی کوچه معین بلوار ازادی میلان گلستان دست راست پلاک 53</p>
                                                                      <p>شماره تماس : 09023319893</p>
                                                               </div>
                                                        </div>
                                                        <div className="w-full border border-box_primary rounded-lg">
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
                                                        <div className="w-full border border-box_primary rounded-xl p-4 relative flex justify-between">
                                                               <div className="flex gap-x-2">
                                                                      <p> پست ملی (ارسال طی 6 الی 8 روز کاری)</p>
                                                               </div>
                                                               <p><FormatingPrice price={125000} tomanSize="12px" className={"text-xl"} /> </p>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                                   <div className="w-4/10 max-md:w-full px-8 max-md:mt-12">
                                          <div className="w-full sticky top-8 border p-4 rounded-xl border-neutral-300">
                                                 {/* title */}
                                                 <div className="w-full">
                                                        <h3 className="text-lg">قیمت کالاها  </h3>
                                                 </div>
                                                 {/* all and discount and finally price  */}
                                                 <div className="w-full mt-6">
                                                        <div className="flex justify-between">
                                                               <p>جمع کل : </p>
                                                               <p><FormatingPrice price={2512600} className={"text-lg"} tomanSize="12px" /> </p>
                                                        </div>
                                                        <div className="flex justify-between my-2">
                                                               <p>تخفیف : </p>
                                                               <p><FormatingPrice price={1234500} className={"text-lg"} tomanSize="12px" /> </p>
                                                        </div>
                                                        <hr />
                                                        <div className="flex justify-between my-2 font-semibold">
                                                               <p>قیمت نهایی : </p>
                                                               <p><FormatingPrice price={1496100} className={"text-xl"} tomanSize="12px" /> </p>
                                                        </div>
                                                        <button className="w-full py-2 bg-box_primary text-white rounded-lg mt-6 cursor-pointer">
                                                               {/* THERE SHOULD BE NO LINK HERE ! */}
                                                               <p>{payWith === 1 ? "پرداخت بانکی" : "پرداخت اعتباری"}</p>
                                                        </button>
                                                 </div>
                                                 {/* discount input */}
                                                 <div className="w-full mt-4">
                                                        <label className="relative flex items-center gap-x-2 text-lg" htmlFor="1232">
                                                               <RiDiscountPercentFill className="size-5 text-text_secondary" />
                                                               <p>کد تخفیف</p>
                                                        </label>
                                                        <div className="mt-2 flex items-center gap-x-4">
                                                               <input type="text" id="1232" className="input-control" />
                                                               <button className="px-4 py-2 bg-box_primary rounded-lg text-white cursor-pointer">اعمال</button>
                                                        </div>
                                                 </div>
                                          </div>

                                   </div>
                            </div>
                     </section>
                     <Footer />
              </>
       )
}
