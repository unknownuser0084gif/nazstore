import Navbar from "../../../shared/layouts/Navbar"
import Footer from "../../../shared/layouts/Footer"
import { Link } from "react-router-dom"
import FormatingPrice from "../../../shared/utils/FormatingPrice"
import { HiLocationMarker } from "react-icons/hi"
import { GrLocationPin } from "react-icons/gr"
import { GiConfirmed } from "react-icons/gi"
import { SiTransmission } from "react-icons/si"

export default function Checkout() {
       return (
              <>
                     <Navbar />
                     <section className="w-full mb-14 mt-8 font-main max-md:px-4" dir="rtl">
                            {/* container */}
                            <div className="w-full mt-12 flex max-md:block gap-x-4">
                                   <div className="w-6/10 max-md:w-full">
                                          {/* titles */}
                                          <div className="flex justify-between items-center">
                                                 <h3 className="text-xl text-text_secondary font-main-bold flex gap-x-1 items-center" dir="ltr">انتخاب آدرس <HiLocationMarker /></h3>
                                          </div>
                                          {/* container */}
                                          <div className="w-full mt-6 space-y-4">
                                                 {/* item */}
                                                 <div className="w-full border border-box_primary rounded-xl p-4 relative">
                                                        <h3 className="text-text_secondary text-lg flex items-center font-bold gap-x-2"><GrLocationPin /> آدرس شرکت تقی آباد </h3>
                                                        <div className="mt-6 space-y-3 text-sm">
                                                               <p>استان تهران خیابون ازادی کوچه معین بلوار ازادی میلان گلستان دست راست پلاک 53</p>
                                                               <p>شماره تماس : 09023319893</p>
                                                        </div>
                                                        <GiConfirmed className="size-10 text-green-700 bg-white absolute -top-2 -left-2 p-px" />
                                                 </div>
                                                 {/* item */}
                                                 <div className="w-full border border-box_primary rounded-xl p-4 relative">
                                                        <h3 className="text-text_secondary text-lg flex items-center font-bold gap-x-2"><GrLocationPin /> آدرس خونه </h3>
                                                        <div className="mt-6 space-y-3 text-sm">
                                                               <p>استان تهران خیابون ازادی کوچه معین بلوار ازادی میلان گلستان دست راست پلاک 53</p>
                                                               <p>شماره تماس : 09023319893</p>
                                                        </div>
                                                 </div>
                                          </div>
                                          {/* titles */}
                                          <div className="flex justify-between items-center mt-8">
                                                 <h3 className="text-xl text-text_secondary font-main-bold flex gap-x-1.5 items-center" dir="ltr">انتخاب روش ارسال <SiTransmission /></h3>
                                          </div>
                                          {/* container */}
                                          <div className="w-full mt-6 space-y-4">
                                                 {/* item */}
                                                 <div className="w-full border border-box_primary rounded-xl p-4 relative flex justify-between">
                                                        <div className="flex gap-x-2">
                                                               <label
                                                                      htmlFor="1"
                                                                      className="flex flex-row items-center gap-2.5 text-black"
                                                               >
                                                                      <input id="1" type="radio" name="pStatus" className="peer hidden" />
                                                                      <div
                                                                             htmlFor="1"
                                                                             className="h-5 w-5 flex rounded-md border border-neutral-400 bg-transparent peer-checked:bg-box_primary transition duration-200"
                                                                      >
                                                                      </div>
                                                                      پست پیشتاز (ارسال طی 2 الی 5 روز کاری)
                                                               </label>
                                                        </div>
                                                        <p><FormatingPrice price={125000} tomanSize="12px" className={"text-xl"} /> </p>
                                                 </div>
                                                 {/* item */}
                                                 <div className="w-full border border-box_primary rounded-xl p-4 relative flex justify-between">
                                                        <div className="flex gap-x-2">
                                                               <label
                                                                      htmlFor="2"
                                                                      className="flex flex-row items-center gap-2.5 text-black"
                                                               >
                                                                      <input id="2" type="radio" name="pStatus" className="peer hidden" />
                                                                      <div
                                                                             htmlFor="2"
                                                                             className="h-5 w-5 flex rounded-md border border-neutral-400 bg-transparent peer-checked:bg-box_primary transition duration-200"
                                                                      >
                                                                      </div>
                                                                      پست ملی(ارسال طی 6 الی 8 روز کاری)
                                                               </label>
                                                        </div>
                                                        <p><FormatingPrice price={125000} tomanSize="12px" className={"text-xl"} /> </p>
                                                 </div>
                                          </div>
                                   </div>
                                   <div className="w-4/10 max-md:w-full px-8 max-md:mt-12">
                                          <div className="w-full sticky top-8 border p-4 rounded-xl border-neutral-300">
                                                 {/* title */}
                                                 <div className="w-full">
                                                        <h3 className="text-lg">قیمت کالاها <span className="px-1">({3} مورد)</span></h3>
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
                                                               <Link to={"/checkout/payment"} className="w-full block">تسویه نهایی</Link>
                                                        </button>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </section>
                     <Footer />
              </>
       )
}
