import Navbar from "../../../shared/layouts/Navbar"
import Footer from "../../../shared/layouts/Footer"
import { BiTrashAlt } from "react-icons/bi"
import CartProduct from "../components/CartProduct"
import FormatingPrice from "../../../shared/utils/FormatingPrice"
import { Link } from "react-router-dom"


export default function TotalProducts() {
       return (
              <>
                     <Navbar />
                     <section className="w-full mb-14 mt-8 font-main max-md:px-4" dir="rtl">
                            {/* broadcrump */}
                            <div className="w-full">
                                   <div className="w-full overflow-x-auto scrollbar-hidden">
                                          <nav className="flex py-4" aria-label="Breadcrumb">
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
                                   <hr className="border-dashed" />
                            </div>
                            {/* container */}
                            <div className="w-full mt-12 flex max-md:block gap-x-4">
                                   <div className="w-6/10 max-md:w-full">
                                          {/* titles */}
                                          <div className="flex justify-between items-center">
                                                 <h3 className="text-xl">سبد خرید <span className="mx-1">({3} مورد)</span></h3>
                                                 <p className="text-sm flex items-center gap-x-1 text-red-500 cursor-pointer">حذف همه <BiTrashAlt /></p>
                                          </div>
                                          {/* container */}
                                          <div className="w-full mt-6 space-y-4">
                                                 <CartProduct />
                                                 <CartProduct />
                                                 <CartProduct />
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
                                                               <Link to={"/checkout"} className="w-full block">ثبت سفارش</Link>
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
