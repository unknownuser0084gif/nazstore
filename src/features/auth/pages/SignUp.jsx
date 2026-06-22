import { useEffect, useState } from "react"
import Logo from "../../../shared/components/Logo"
import { MdPhone, MdOutlinePassword } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useAddUser } from "../hooks/useRegister";
import { notifySuccess, notifyError } from "../../../shared/utils/Tostify"

export default function SignUp() {

       const [userName, setUserName] = useState("");
       const [phone, setPhone] = useState("");
       const [phoneFocus, setPhoneFocus] = useState(false);
       const [password, setPassword] = useState("");
       const [passFocus, setPassFocus] = useState(false);

       const { isPending, mutate, data } = useAddUser()

       const { register, formState: { errors }, handleSubmit } = useForm({
              mode: "onChange"
       })

       useEffect(() => {
              if (!data) return;
              if (data.status === 200) {
                     notifySuccess(data.message)
              } else {
                     notifyError(data.message)
              }
       }, [data])

       return (
              <section className="w-full mt-12 max-md:px-4 max-md:mt-24">
                     <div className="w-lg max-md:w-full py-8 shadow-trigger rounded-2xl mx-auto font-main px-6 border border-box_secondary" dir="rtl">
                            <form className="w-full relative" onSubmit={handleSubmit(values => mutate(values))} autoComplete="off">
                                   <div className="w-full flex justify-center mt-4 mb-12">
                                          <Logo scale={1.8} />
                                   </div>
                                   <h1 className="font-main-bold text-center text-2xl text-text_secondary">فرم ثبت نام</h1>

                                   <div className="w-full mt-8 relative">
                                          <input
                                                 {...register("username", {
                                                        required: {
                                                               value: true,
                                                               message: "این فیلد الزامیه!"
                                                        },
                                                        minLength: {
                                                               value: 3,
                                                               message: "حداقل 3 حرف لازمه"
                                                        }
                                                 })}
                                                 type="text" className="input-control-2 mt-2 peer ps-12! shadow" id="" onBlur={e => setUserName(e.target.value)} />
                                          <label htmlFor="" className={`text-lg ${userName !== "" ? "-top-2 opacity-100 right-0!" : "top-[55%]"} peer-focus:-top-2 peer-focus:right-0 peer-focus:opacity-100 pointer-events-none absolute -translate-y-1/2 right-12 opacity-70 transition-all`}>نام کاربری </label>
                                          <AiOutlineUser className="absolute top-[55%] size-6 -translate-y-1/2 right-4 text-text_secondary" />
                                          <p className="absolute -bottom-6 text-sm left-0 text-red-600">{errors.username ? errors.username.message : ""}</p>
                                   </div>

                                   <div className={`${(!phoneFocus && !phone) ? "mt-4" : "mt-12"} w-full relative transition-all`}>
                                          <input
                                                 {...register("phone", {
                                                        required: {
                                                               value: true,
                                                               message: "این فیلد الزامیه!"
                                                        },
                                                        pattern: {
                                                               value: /^09[0-9]{9}$/,
                                                               message: "شماره موبایل صحیح نیست"
                                                        }
                                                 })}
                                                 type="text" className="input-control-2 peer ps-12! mt-2 shadow" name="phone" id="" onBlur={e => { setPhone(e.target.value); setPhoneFocus(false) }} onFocus={e => setPhoneFocus(true)} />
                                          <label htmlFor="" className={`text-lg ${phone !== "" ? "-top-3 opacity-100 right-0!" : "top-[55%]"} peer-focus:-top-3 peer-focus:right-0 peer-focus:opacity-100 pointer-events-none absolute  -translate-y-1/2 right-12 opacity-70 transition-all`}>شماره همراه</label>
                                          <MdPhone className="absolute top-[55%] size-6 -translate-y-1/2 right-4 text-text_secondary" />
                                          <p className="absolute -bottom-6 text-sm left-0 text-red-600">{errors.phone ? errors.phone.message : ""}</p>
                                   </div>

                                   <div className={`${(!passFocus && !password) ? "mt-4" : "mt-12"} w-full relative transition-all`}>
                                          <input
                                                 {...register("password", {
                                                        required: {
                                                               value: true,
                                                               message: "این فیلد الزامیه!"
                                                        },
                                                        pattern: {
                                                               value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@#%*]).{8,}$/,
                                                               message: "رمز عبور باید حداقل ۸ کاراکتر، شامل حرف بزرگ، عدد و یکی از کاراکترهای (@،#،%،*) باشد."
                                                        }
                                                 })}
                                                 type="text" className="input-control-2 peer ps-12! mt-2 shadow" name="password" id="" onBlur={e => { setPassword(e.target.value); setPassFocus(false) }} onFocus={e => setPassFocus(true)} />
                                          <label htmlFor="" className={`text-lg ${password !== "" ? "-top-3 opacity-100 right-0!" : "top-[55%]"} peer-focus:-top-3 peer-focus:right-0 peer-focus:opacity-100 pointer-events-none absolute  -translate-y-1/2 right-12 opacity-70 transition-all`}>رمز ورود</label>
                                          <MdOutlinePassword className="absolute top-[55%] size-6 -translate-y-1/2 right-4 text-text_secondary" />
                                          <p className="absolute -bottom-6 max-sm:-bottom-11 text-sm left-0 text-red-600">{errors.password ? errors.password.message : ""}</p>
                                   </div>

                                   <button
                                          type="submit"
                                          disabled={isPending}
                                          className={`${errors.password ? "mt-12" : "mt-8"} ${isPending && "opacity-80"} cursor-pointer rounded-lg py-3 w-full bg-box_primary text-white`}
                                   >
                                          {isPending ? "درحال بارگزاری..." : "ثبت نام"}
                                   </button>
                            </form>
                            <div className="flex justify-center mt-4">
                                   <p>آیا حسابی دارید؟</p>
                                   <p className="text-text_secondary"><Link to={"/sign-in"}>ورود به اکانت</Link></p>
                            </div>
                            <div>
                                   <p className="text-center mt-4 underline text-text_secondary"><Link to={"/user-panel"}>صفحه حساب کاربری</Link></p>
                            </div>
                     </div>
              </section >
       )
}