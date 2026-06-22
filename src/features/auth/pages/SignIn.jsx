import { useRef, useState } from "react"
import Logo from "./../../../shared/components/Logo"
import { MdPhone, MdOutlinePassword } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SignIn() {

       const [phone, setPhone] = useState("");
       const [passFocus, setPassFocus] = useState(false);
       const [password, setPassword] = useState("");

       return (
              <section className="w-full mt-18 max-md:px-4 max-md:mt-24">
                     <div className="w-lg max-md:w-full py-8 shadow-trigger rounded-2xl mx-auto font-main px-6 border border-box_secondary" dir="rtl">
                            <div className="w-full">
                                   <div className="w-full flex justify-center mt-4 mb-12">
                                          <Logo scale={1.8} />
                                   </div>
                                   <h1 className="font-main-bold text-center text-2xl text-text_secondary">فرم ورود</h1>
                                   <div className="w-full mt-8 relative">
                                          <input type="text" className="input-control-2 mt-2 peer ps-12! shadow" name="" id="" onBlur={e => setPhone(e.target.value)} />
                                          <label htmlFor="" className={`text-lg ${phone !== "" ? "-top-2 opacity-100 right-0!" : "top-[55%]"} peer-focus:-top-2 peer-focus:right-0 peer-focus:opacity-100 pointer-events-none absolute -translate-y-1/2 right-12 opacity-70 transition-all`}>شماره همراه </label>
                                          <MdPhone className="absolute top-[55%] size-6 -translate-y-1/2 right-4 text-text_secondary" />
                                   </div>
                                   <div className={`${(!passFocus && !password) ? "mt-4" : "mt-12"} w-full relative transition-all`}>
                                          <input type="text" className="input-control-2 peer ps-12! mt-2 shadow" name="" id="" onBlur={e => { setPassword(e.target.value); setPassFocus(false) }} onFocus={e => setPassFocus(true)} />
                                          <label htmlFor="" className={`text-lg ${password !== "" ? "-top-3 opacity-100 right-0!" : "top-[55%]"} peer-focus:-top-3 peer-focus:right-0 peer-focus:opacity-100 pointer-events-none absolute  -translate-y-1/2 right-12 opacity-70 transition-all`}>رمز ورود</label>
                                          <MdOutlinePassword className="absolute top-[55%] size-6 -translate-y-1/2 right-4 text-text_secondary" />
                                   </div>
                                   <div className="flex justify-between items-center mt-10">
                                          <div className="flex items-center gap-x-2">
                                                 <input type="checkbox" className="ui-checkbox" />
                                                 <label htmlFor="">بخاطر بسپار</label>
                                          </div>
                                          <p className="text-text_secondary ">
                                                 <Link to={"/enter-phone-number"}> رمز رو فراموش کردی؟</Link>
                                          </p>
                                   </div>
                                   <button className="mt-6 cursor-pointer rounded-lg py-3 w-full bg-box_primary text-white" >ورود</button>
                            </div>
                            <div className="flex justify-center mt-4">
                                   <p>آیا حسابی ندارید؟</p>
                                   <p className="text-text_secondary"><Link to={"/sign-up"}>ساخت حساب</Link></p>
                            </div>
                            <div>
                                   <p className="text-center mt-4 underline text-text_secondary"><Link to={"/user-panel"}>صفحه حساب کاربری</Link></p>
                            </div>
                     </div>
              </section>
       )
}