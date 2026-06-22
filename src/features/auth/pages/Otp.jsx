import { useEffect, useRef, useState } from "react"
import Logo from "../../../shared/components/Logo"
import useTimer from "../hooks/useTimer";
import { useNavigate } from "react-router-dom";

export default function Otp() {

       const [next, setNext] = useState(1);

       const timerElement = useRef();

       const timer = useTimer()
       const navigate = useNavigate()

       const input1 = useRef()
       const input2 = useRef()
       const input3 = useRef()
       const input4 = useRef()

       useEffect(() => {
              timer(180, timerElement);
       }, [])

       useEffect(() => {
              switch (next) {
                     case 1: {
                            if (!input1.current) return
                            input1.current.focus()
                            input1.current.select()
                            break;
                     }
                     case 2: {
                            if (!input2.current) return
                            input2.current.focus()
                            input2.current.select()
                            break;
                     }
                     case 3: {
                            if (!input3.current) return
                            input3.current.focus()
                            input3.current.select()
                            break;
                     }
                     case 4: {
                            if (!input4.current) return
                            input4.current.focus()
                            input4.current.select()
                            break;
                     }
              }
       }, [next])

       return (
              <section className="w-full mt-24 max-md:px-4 max-md:mt-24">
                     <div className="w-lg max-md:w-full py-8 shadow-trigger rounded-2xl mx-auto font-main px-6 border border-box_secondary" dir="rtl">
                            <div className="w-full">
                                   <div className="w-full flex justify-center mt-4 mb-12">
                                          <Logo scale={1.8} />
                                   </div>
                                   <h1 className="font-main-bold text-center text-2xl text-text_secondary">تایید شماره همراه</h1>
                                   <p className="mt-8">کد ارسال شده به شماره <span dir="ltr" className="mx-1">0912***6789</span> را وارد کنید</p>
                                   <div className="w-full mt-6 mb-8 flex justify-center gap-x-8" dir="ltr">
                                          <input className="input-control size-12! text-center" onFocus={e => e.target.select()} onChange={e => setNext(2)} ref={input1} />
                                          <input className="input-control size-12! text-center" onFocus={e => e.target.select()} onChange={e => setNext(3)} ref={input2} />
                                          <input className="input-control size-12! text-center" onFocus={e => e.target.select()} onChange={e => setNext(4)} ref={input3} />
                                          <input className="input-control size-12! text-center" onFocus={e => e.target.select()} ref={input4} />
                                   </div>
                                   <button className="mt-0 cursor-pointer rounded-lg py-2 w-full bg-box_primary text-white" onClick={() => navigate("/change-password")}>ثبت</button>
                            </div>
                            <div className="w-full mt-6 flex justify-center gap-x-1 text-lg">
                                   <p className="text-text_secondary" ref={timerElement}>03:00</p>
                                   <p>مانده تا ارسال مجدد</p>
                            </div>
                     </div>
              </section>
       )
}