import { useRef, useState } from "react"
import Logo from "../../../shared/components/Logo"
import { MdPhone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function EnterPhoneNumber() {

       const [phone, setPhone] = useState("");
       const navigate = useNavigate()

       return (
              <section className="w-full mt-18 max-md:px-4 max-md:mt-24">
                     <div className="w-lg max-md:w-full py-8 shadow-trigger rounded-2xl mx-auto font-main px-6 border border-box_secondary" dir="rtl">
                            <div className="w-full">
                                   <div className="w-full flex justify-center mt-4 mb-12">
                                          <Logo scale={1.8} />
                                   </div>
                                   <h1 className="font-main-bold text-center text-2xl text-text_secondary">ورود شماره همراه</h1>
                                   <div className="w-full mt-8 relative">
                                          <input type="text" className="input-control-2 mt-2 peer ps-12! shadow" name="" id="" onBlur={e => setPhone(e.target.value)} />
                                          <label htmlFor="" className={`text-lg ${phone !== "" ? "-top-2 opacity-100 right-0!" : "top-[55%]"} peer-focus:-top-2 peer-focus:right-0 peer-focus:opacity-100 pointer-events-none absolute -translate-y-1/2 right-12 opacity-70 transition-all`}>شماره همراه </label>
                                          <MdPhone className="absolute top-[55%] size-6 -translate-y-1/2 right-4 text-text_secondary" />
                                   </div>
                                   <button className="mt-6 cursor-pointer rounded-lg py-3 w-full bg-box_primary text-white" onClick={() => navigate("/otp")}>ثبت</button>
                            </div>
                     </div>
              </section>
       )
}