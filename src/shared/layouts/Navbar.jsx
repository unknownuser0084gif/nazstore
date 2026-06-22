import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Logo from "../components/Logo";
import { useState } from "react";
import { Accordion } from "../components/Accordion";
import { AccordionItem } from "../components/AccordionItem";
import { PiUser } from "react-icons/pi"
import { AiOutlineQuestionCircle, AiOutlineProduct } from "react-icons/ai";

export default function Navbar() {

       const [open, setOpen] = useState(false)
       const logined = true

       return (
              <>
                     <nav className="w-9/10 md:w-full mx-auto h-26 max-md:h-38 flex justify-center items-end ">
                            <div className="w-full h-18 max-md:h-30 shadow-2xl rounded-lg bg-box_secondary md:flex justify-between md:items-center md:px-8" dir="rtl">
                                   {/* logo & search box */}
                                   <div className="w-fit flex gap-x-8 max-md:hidden">
                                          <Logo />
                                          <div className="flex w-72 justify-center items-center h-full">
                                                 <SearchBox />
                                          </div>
                                   </div>
                                   {/* menu (smaller of lg => hidden) */}
                                   <ul className="flex justify-center items-center gap-x-8 h-full w-fit text-text_primary font-main max-lg:hidden">
                                          <li>
                                                 <Link to="/">خانه</Link>
                                          </li>
                                          <li>
                                                 <Link to="/services">خدمات</Link>
                                          </li>
                                          <li>
                                                 <Link to="/contact-us">تماس باما</Link>
                                          </li>
                                          <li>
                                                 <Link to="/faqs">سوالات رایج</Link>
                                          </li>
                                   </ul>
                                   {/* cart */}
                                   <div className="flex gap-x-4 justify-center items-center w-fit h-full font-main max-md:hidden">
                                          <Link to="/cart" className="py-2 px-4 bg-box_primary rounded-lg text-white relative">
                                                 {/* cart quantity */}
                                                 <span className="absolute -top-0.5 -right-0.5 size-4 bg-white rounded-full text-xs  text-black flex justify-center items-center">
                                                        2
                                                 </span>
                                                 <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" size="24" className="size-5 fill-white">
                                                        <g fill="inherit">
                                                               <path fillRule="evenodd" clipRule="evenodd" d="M22.995 3.25H19.29l-.455 2.726-.002.01-1.326 7.443-.002.01-.613 3.24-.154.814H3.495v-2H15.08l.234-1.24H4.282l-.232-.673-2.57-7.442L1.02 4.81h15.98l.456-2.726.14-.835h5.398v2Zm-7.31 9.004.97-5.443H3.827l1.88 5.443h9.976Z"></path>
                                                               <path d="M16.384 21a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM6.745 22.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"></path>
                                                        </g>
                                                 </svg>
                                          </Link>
                                          <div className="w-fit bg-white flex rounded-xl">
                                                 {
                                                        logined ? (
                                                               <>
                                                                      <Link to="/sign-up" className="px-4 py-2">ثبت نام</Link>
                                                                      <Link to="/sign-in" className="px-4 py-2 bg-box_primary rounded-xl text-white">ورود</Link>
                                                               </>
                                                        ) : (
                                                               <Link to={"/user-panel"} className="p-2 rounded-lg bg-box_primary">
                                                                      <PiUser className="text-white text-2xl" />
                                                               </Link>
                                                        )
                                                 }
                                          </div>
                                   </div>
                                   {/* ----responsive design---- */}
                                   <div className="w-full h-1/2 md:hidden flex px-6 items-center">
                                          {/* bar */}
                                          <div className="w-14 h-10 bg-white rounded-lg flex justify-center items-center" onClick={() => setOpen(true)}>
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full cursor-pointer rotate-y-180" viewBox="0 0 24 24" fill="none" onClick={() => setOpen(prev => !prev)}>
                                                        <path d="M4 6H20M4 12H14M4 18H9" className="stroke-text_secondary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                 </svg>
                                          </div>
                                          {/* logo */}
                                          <div className="flex justify-center items-center w-full h-full font-main-bold gap-x-1 text-2xl">
                                                 <p className="text-text_secondary">ناز</p>
                                                 <p className="text-text_primary">استور</p>
                                          </div>
                                          {/* cart */}
                                          <div className="w-14 h-10 bg-white rounded-lg flex justify-center items-center p-1 relative">
                                                 <span className="absolute -top-1.5 -right-1.5 size-4 rounded-full text-xs border border-text_secondary text-black flex justify-center items-center">
                                                        2
                                                 </span>
                                                 <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" size="24" className="w-full h-full fill-text_secondary ">
                                                        <g fill="inherit">
                                                               <path fillRule="evenodd" clipRule="evenodd" d="M22.995 3.25H19.29l-.455 2.726-.002.01-1.326 7.443-.002.01-.613 3.24-.154.814H3.495v-2H15.08l.234-1.24H4.282l-.232-.673-2.57-7.442L1.02 4.81h15.98l.456-2.726.14-.835h5.398v2Zm-7.31 9.004.97-5.443H3.827l1.88 5.443h9.976Z"></path>
                                                               <path d="M16.384 21a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM6.745 22.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"></path>
                                                        </g>
                                                 </svg>
                                          </div>
                                   </div>
                                   {/* search box */}
                                   <div className="w-full h-1/2 md:hidden flex px-6 mt-2">
                                          <SearchBox />
                                   </div>
                            </div>
                     </nav>
                     {/* bottom menu */}
                     <div className="w-full mt-4 py-2 px-2 font-main max-md:hidden" dir="rtl">
                            <ul className="w-full flex gap-x-12 ">
                                   <li>
                                          <div className="hover:bg-box_primary hover:text-white rounded-xl px-2 py-2 transition-all duration-300 relative z-2 group">
                                                 <p>دسته بندی</p>
                                                 <div className="w-fit h-fit shadow-[3px_3px_14px_-5px_#616161] mt-2 bg-white rounded-xl transition-all opacity-0 absolute top-12 pointer-events-none group-hover:top-8 group-hover:pointer-events-auto group-hover:opacity-100">
                                                        <div className="text-text_primary px-8 py-12 flex gap-x-4">
                                                               {/* men */}
                                                               <div className="w-36 space-y-4">
                                                                      <h3 className="w-full text-2xl pb-2">مردانه</h3>
                                                                      <ul className="w-full space-y-4">
                                                                             <li>کفش رانینگ</li>
                                                                             <li>کفش پیاده روی</li>
                                                                             <li>کفش کتونی</li>
                                                                             <li>کفش تمرینی</li>
                                                                      </ul>
                                                               </div>
                                                               {/* women */}
                                                               <div className="w-36 space-y-4">
                                                                      <h3 className="w-full text-2xl pb-2">زنانه</h3>
                                                                      <ul className="w-full space-y-4">
                                                                             <li>کفش اسپرت</li>
                                                                             <li>کفش راحتی</li>
                                                                             <li>کفش ورزشی</li>
                                                                      </ul>
                                                               </div>
                                                               {/* kids */}
                                                               <div className="w-36 space-y-4">
                                                                      <h3 className="w-full text-2xl pb-2">بچگانه</h3>
                                                                      <ul className="w-full space-y-4">
                                                                             <li>کفش مدرسه</li>
                                                                             <li>کفش راحتی</li>
                                                                             <li>کفش ورزشی</li>
                                                                             <li>کفش خونه</li>
                                                                      </ul>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </li>
                                   <li>
                                          <div className="hover:bg-box_primary hover:text-white rounded-xl px-2 py-2 transition-all duration-300 relative z-2 group">
                                                 <p>کیت های ورزشی</p>
                                                 <div className="w-fit h-fit  shadow-[3px_3px_14px_-5px_#616161] mt-2 bg-white rounded-xl transition-all opacity-0 absolute  top-12 pointer-events-none group-hover:top-8 group-hover:pointer-events-auto group-hover:opacity-100">
                                                        <div className="w-64 h-fit text-text_primary py-6 px-4">
                                                               <h1 className="text-xl mb-3">کیت های فوتبالی</h1>
                                                               <div className="space-y-2">
                                                                      <h3>کیت تیم های اسپانیا</h3>
                                                                      <h3>کیت تیم های ایرانی</h3>
                                                                      <h3>کیت تیم های آمریکایی</h3>
                                                               </div>
                                                               <h1 className="text-xl mt-6 mb-3">کیت های بسکتبالی</h1>
                                                               <div className="space-y-2">
                                                                      <h3>کیت تیم های اسپانیا</h3>
                                                                      <h3>کیت تیم های ایرانی</h3>
                                                                      <h3>کیت تیم های آمریکایی</h3>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </li>
                                   <li>
                                          <div className="hover:bg-box_primary hover:text-white rounded-xl px-2 py-2 transition-all duration-300 relative z-2 group">
                                                 <p>برند ها</p>
                                                 <div className="w-fit h-fit shadow-[3px_3px_14px_-5px_#616161] mt-2 bg-white rounded-xl transition-all opacity-0 absolute  top-12 pointer-events-none group-hover:top-8 group-hover:pointer-events-auto group-hover:opacity-100">
                                                        <div className="w-44 h-fit text-text_primary py-6 px-4 space-y-4">
                                                               <h3 className="text-lg">مادرید کامپنی</h3>
                                                               <h3 className="text-lg">اسپرت ایران</h3>
                                                               <h3 className="text-lg">اسپرت پوش</h3>
                                                               <h3 className="text-lg">تک پوش</h3>
                                                        </div>
                                                 </div>
                                          </div>
                                   </li>
                                   <li>
                                          <div className="hover:bg-box_primary hover:text-white rounded-xl px-2 py-2 transition-all duration-300 relative z-2 group">
                                                 <p>لوازم ورزشی</p>
                                                 <div className="w-fit h-fit shadow-[3px_3px_14px_-5px_#616161] mt-2 bg-white rounded-xl transition-all opacity-0 absolute  top-12 pointer-events-none group-hover:top-8 group-hover:pointer-events-auto group-hover:opacity-100">
                                                        <div className="w-64 h-fit text-text_primary py-6 px-4">
                                                               <h1 className="text-xl mb-3">دمبل و کش ورزشی</h1>
                                                               <div className="space-y-2">
                                                                      <h3>کیت تیم های اسپانیا</h3>
                                                                      <h3>کیت تیم های ایرانی</h3>
                                                                      <h3>کیت تیم های آمریکایی</h3>
                                                               </div>
                                                               <h1 className="text-xl mt-6 mb-3">نیمکت و دستگاه</h1>
                                                               <div className="space-y-2">
                                                                      <h3>کیت تیم های اسپانیا</h3>
                                                                      <h3>کیت تیم های ایرانی</h3>
                                                                      <h3>کیت تیم های آمریکایی</h3>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </li>
                            </ul>
                     </div>
                     {/* ///////------nav modal------///// */}
                     <div
                            className={`${open ? "opacity-100" : "opacity-0 pointer-events-none"} fixed w-full h-dvh transition-all font-main inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-99999`}
                            onClick={() => setOpen(false)}
                            dir="rtl"
                     >
                            <div
                                   className={`${open ? "top-0" : "top-4"} w-88 max-h-9/10 scrollbar-hidden bg-white transition-all  text-black  rounded-2xl shadow-lg py-8 px-6 max-w-lg relative overflow-auto`}
                                   onClick={(e) => e.stopPropagation()}
                            >
                                   {/* close btn */}
                                   <button className="absolute top-2 right-1 text-black cursor-pointer px-1.5 rounded-full " onClick={() => setOpen(false)}>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="fill-box_primary size-6" viewBox="0 0 32 32" version="1.1">
                                                 <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z" />
                                          </svg>
                                   </button>
                                   {/* container */}
                                   <div className="w-full -mt-2">
                                          {/* logo */}
                                          <div className="flex justify-center"> <Logo scale={1.5} /> </div>
                                          <hr className="mb-4 mt-6" />
                                          {/* profile */}
                                          <div className="w-full py-4 bg-box_secondary rounded-xl flex justify-start items-center gap-x-4 px-6">
                                                 <div className="size-7">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-box_primary" viewBox="0 0 16 16" ><script xmlns="" id="eppiocemhmnlbhjplcgkofciiegomcon" /><script xmlns="" /><script xmlns="" />
                                                               <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" />
                                                               <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" />
                                                        </svg>
                                                 </div>
                                                 <div className="">
                                                        {
                                                               logined ? (
                                                                      <p><Link to={"/user-panel"}>مرتضی بحری</Link></p>
                                                               ) : (
                                                                      <div>
                                                                             <p className="text-xs">خوش آمدید</p>
                                                                             <p className="text-lg text-text_secondary -mt-1.5"><Link to={"/sign-in"}>ورود</Link> / <Link to={"/sign-up"}>ثبت نام</Link></p>
                                                                      </div>
                                                               )
                                                        }
                                                 </div>
                                          </div>
                                          {/* menu */}
                                          <div className="mt-4 space-y-3">
                                                 {/* categories */}
                                                 <div className=" bg-box_secondary rounded p-1.5">
                                                        <Accordion >
                                                               <AccordionItem eventKey="mainCategories" >
                                                                      {/* btn */}
                                                                      <div className="flex items-center py-2 px-1 gap-x-2">
                                                                             {/* icon */}
                                                                             <svg xmlns="http://www.w3.org/2000/svg" className="size-5 stroke-text_secondary" viewBox="-0.5 0 25 25" fill="none"  >
                                                                                    <path d="M19 3.32001H16C14.8954 3.32001 14 4.21544 14 5.32001V8.32001C14 9.42458 14.8954 10.32 16 10.32H19C20.1046 10.32 21 9.42458 21 8.32001V5.32001C21 4.21544 20.1046 3.32001 19 3.32001Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                    <path d="M8 3.32001H5C3.89543 3.32001 3 4.21544 3 5.32001V8.32001C3 9.42458 3.89543 10.32 5 10.32H8C9.10457 10.32 10 9.42458 10 8.32001V5.32001C10 4.21544 9.10457 3.32001 8 3.32001Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                    <path d="M19 14.32H16C14.8954 14.32 14 15.2154 14 16.32V19.32C14 20.4246 14.8954 21.32 16 21.32H19C20.1046 21.32 21 20.4246 21 19.32V16.32C21 15.2154 20.1046 14.32 19 14.32Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                                    <path d="M8 14.32H5C3.89543 14.32 3 15.2154 3 16.32V19.32C3 20.4246 3.89543 21.32 5 21.32H8C9.10457 21.32 10 20.4246 10 19.32V16.32C10 15.2154 9.10457 14.32 8 14.32Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                             </svg>
                                                                             {/* name */}
                                                                             <p className="">دسته بندی</p>
                                                                      </div>
                                                                      {/* content */}
                                                                      <div>
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
                                                               </AccordionItem>
                                                        </Accordion>
                                                 </div>
                                                 {/* favorite */}
                                                 <div className="flex items-center gap-x-2 bg-box_secondary rounded p-1.5">
                                                        {/* icon */}
                                                        <AiOutlineProduct className="size-5 text-text_secondary" />
                                                        {/* name */}
                                                        <p><Link to={"/products"}>محصولات</Link></p>
                                                 </div>
                                                 {/* faqs */}
                                                 <div className="flex items-center gap-x-2 bg-box_secondary rounded p-1.5">
                                                        {/* icon */}
                                                        <AiOutlineQuestionCircle className="size-5 text-text_secondary" />
                                                        {/* name */}
                                                        <p><Link to={"/faqs"}>سوالات رایج</Link></p>
                                                 </div>
                                                 {/* about */}
                                                 <div className="flex items-center gap-x-2 bg-box_secondary rounded p-1.5">
                                                        {/* icon */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 stroke-text_secondary" viewBox="0 0 24 24" fill="none" >
                                                               <circle cx="12" cy="12" r="10" stroke="" strokeWidth="1.5" />
                                                               <path d="M12 17V11" stroke="" strokeWidth="1.5" strokeLinecap="round" />
                                                               <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="" />
                                                        </svg>
                                                        {/* name */}
                                                        <p><Link to={"/services"}>خدمات ما</Link></p>
                                                 </div>
                                                 {/* cart */}
                                                 <div className="flex items-center gap-x-2 bg-box_secondary rounded p-1.5">
                                                        {/* icon */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 stroke-text_secondary" viewBox="0 0 24 24" fill="none"  >
                                                               <path d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19" stroke="" strokeWidth="1.5" strokeLinecap="round" />
                                                               <path opacity="0.5" d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="" strokeWidth="1.5" />
                                                               <path opacity="0.5" d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="" strokeWidth="1.5" />
                                                               <path d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5" stroke="" strokeWidth="1.5" />
                                                        </svg>
                                                        {/* name */}
                                                        <p><Link to={"/cart"}>سبد  خرید</Link></p>
                                                 </div>
                                                 {/* conatct */}
                                                 <div className="flex items-center gap-x-2 bg-box_secondary rounded p-1.5">
                                                        {/* icon */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 fill-text_secondary" viewBox="0 0 24 24" fill="none" >
                                                               <path fillRule="evenodd" clipRule="evenodd" d="M22.75 7C22.75 3.82436 20.1756 1.25 17 1.25C13.8243 1.25 11.25 3.82436 11.25 7C11.25 7.91847 11.4659 8.78866 11.8504 9.56061C11.859 9.5779 11.8623 9.5918 11.8634 9.6002C11.8639 9.60415 11.8638 9.60649 11.8638 9.60744L11.5662 10.7195C11.2878 11.7601 12.2398 12.7122 13.2805 12.4338L14.3925 12.1362C14.3911 12.1366 14.3916 12.1363 14.3925 12.1362C14.3935 12.1362 14.3958 12.1361 14.3998 12.1366C14.4082 12.1376 14.4221 12.141 14.4394 12.1496C15.2113 12.5341 16.0815 12.75 17 12.75C20.1756 12.75 22.75 10.1756 22.75 7ZM14.3935 12.136L14.3925 12.1362L14.3935 12.136ZM17 2.75C19.3472 2.75 21.25 4.65279 21.25 7C21.25 9.34721 19.3472 11.25 17 11.25C16.3188 11.25 15.677 11.0903 15.1081 10.8069C14.7889 10.6479 14.3977 10.5821 14.0058 10.6869L13.06 10.94L13.313 9.99416C13.4179 9.60224 13.352 9.2111 13.193 8.89186C12.9097 8.32298 12.75 7.68122 12.75 7C12.75 4.65279 14.6528 2.75 17 2.75Z" fill="" />
                                                               <path fillRule="evenodd" clipRule="evenodd" d="M3.00745 6.4069C4.68752 4.72683 7.52266 4.85455 8.69248 6.95067L9.34149 8.1136C10.1054 9.48242 9.77987 11.2095 8.66157 12.3415C8.64668 12.3619 8.56774 12.4768 8.55791 12.6776C8.54536 12.9339 8.63639 13.5267 9.55482 14.4452C10.4729 15.3633 11.0656 15.4545 11.3221 15.4421C11.5231 15.4323 11.6381 15.3533 11.6585 15.3384C12.7905 14.2201 14.5176 13.8946 15.8864 14.6585L17.0493 15.3075C19.1454 16.4773 19.2731 19.3125 17.5931 20.9925C16.6944 21.8912 15.4995 22.6897 14.0953 22.7429C12.0144 22.8218 8.55913 22.2844 5.13735 18.8626C1.71556 15.4408 1.17818 11.9856 1.25706 9.90468C1.3103 8.50048 2.10879 7.30556 3.00745 6.4069ZM7.38265 7.68167C6.78363 6.60832 5.17394 6.36173 4.06811 7.46756C3.29276 8.24291 2.7887 9.09872 2.75599 9.9615C2.6902 11.6968 3.11864 14.7226 6.19801 17.802C9.27737 20.8813 12.3031 21.3098 14.0385 21.244C14.9013 21.2113 15.7571 20.7072 16.5324 19.9319C17.6382 18.826 17.3916 17.2163 16.3183 16.6173L15.1554 15.9683C14.432 15.5646 13.4158 15.7023 12.7025 16.4156C12.6325 16.4856 12.1864 16.9018 11.395 16.9403C10.5847 16.9797 9.604 16.6157 8.49416 15.5058C7.38395 14.3956 7.02003 13.4146 7.0597 12.6043C7.09846 11.8128 7.51468 11.3672 7.58432 11.2975C8.29764 10.5842 8.43539 9.56801 8.03166 8.8446L7.38265 7.68167Z" fill="" />
                                                        </svg>
                                                        {/* name */}
                                                        <p><Link to={"/contact-us"}>تماس با ما</Link></p>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </>
       )
}