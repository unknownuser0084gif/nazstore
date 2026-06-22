import { motion } from "framer-motion"
import { AiFillHeart } from "react-icons/ai"
import ConvertToPersian from "../../../shared/utils/ConvertToPersian"
import FormattingPrice from "../../../shared/utils/FormatingPrice"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { MdSmsFailed } from "react-icons/md"
import { MdHeartBroken } from "react-icons/md"

export default function Fail() {

       const duration = 10
       const navigate = useNavigate()

       useEffect(() => {
              let timeout = setTimeout(() => {
                     navigate("/user-panel/orders")
              }, duration * 1000)

              return () => clearTimeout(timeout)
       }, [])

       return (
              <section className='w-full my-8 font-main' dir="rtl">
                     {/* head title */}
                     <div className='w-full flex flex-col items-center justify-center p-2'>
                            <svg width="200" height="200" viewBox="0 0 200 200">
                                   {/* Animated progress circle */}
                                   <motion.circle
                                          cx="100"
                                          cy="100"
                                          r="80"
                                          fill="none"
                                          stroke="#cf1212"
                                          strokeWidth="10"
                                          strokeDasharray="502"
                                          initial={{ strokeDashoffset: 0 }}
                                          animate={{ strokeDashoffset: 502 }}
                                          transition={{
                                                 duration: duration,
                                                 ease: "linear",
                                                 times: [0, 1],
                                          }}
                                   />
                                   <path fill='#cf1212' transform='translate(16.5, 16.5) scale(0.163)' d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm127.978 274.82-.034.006c-.023.007-.042.018-.083.059L512 466.745l-127.86-127.86c-.042-.041-.06-.052-.084-.059a.118.118 0 0 0-.07 0c-.022.007-.041.018-.082.059l-45.02 45.019c-.04.04-.05.06-.058.083a.118.118 0 0 0 0 .07l.01.022a.268.268 0 0 0 .049.06L466.745 512l-127.86 127.862c-.041.04-.052.06-.059.083a.118.118 0 0 0 0 .07c.007.022.018.041.059.082l45.019 45.02c.04.04.06.05.083.058a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059L512 557.254l127.862 127.861c.04.041.06.052.083.059a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059l45.02-45.019c.04-.04.05-.06.058-.083a.118.118 0 0 0 0-.07l-.01-.022a.268.268 0 0 0-.049-.06L557.254 512l127.861-127.86c.041-.042.052-.06.059-.084a.118.118 0 0 0 0-.07c-.007-.022-.018-.041-.059-.082l-45.019-45.02c-.04-.04-.06-.05-.083-.058a.118.118 0 0 0-.07 0Z"></path>
                            </svg>
                            <h1 className="mt-8 text-3xl text-red-600">پرداخت شما ناموفق بود</h1>
                            <p className="mt-2 flex gap-x-1 items-center">بعد چند دقیقه مجدد امتحان کنید <MdHeartBroken className="text-red-600" /> </p>
                     </div>
                     {/* checkout detail */}
                     <div className="w-142 mx-auto mt-12" >
                            <h1 className="text-2xl">مشخصات پرداختی</h1>
                            <div className="mt-6 w-full space-y-2.5">
                                   <div className="flex w-full justify-between">
                                          <p>درگاه پرداخت : </p>
                                          <p>بانک ملت</p>
                                   </div>
                                   <div className="flex w-full justify-between">
                                          <p>تاریخ : </p>
                                          <p>{ConvertToPersian("1404/02/29")}</p>
                                   </div>
                                   <div className="flex w-full justify-between">
                                          <p>نوع  پرداخت : </p>
                                          <p>پرداخت آنلاین</p>
                                   </div>
                                   <div className="flex w-full justify-between">
                                          <p>شماره تراکنش : </p>
                                          <p>{ConvertToPersian(1548945641)}</p>
                                   </div>
                                   <div className="flex w-full justify-between">
                                          <p>مقدار پرداختی : </p>
                                          <p><FormattingPrice price={4790000} /> </p>
                                   </div>
                                   <div className="flex w-full justify-between">
                                          <p>وضعیت پرداخت : </p>
                                          <p className="text-red-500">ناموفق</p>
                                   </div>
                            </div>
                     </div>
                     {/* order detail */}
                     <div className="w-142 mx-auto mt-16" >
                            <h1 className="text-2xl">مشخصات سفارش</h1>
                            <div className="mt-6 w-full space-y-2.5">
                                   <div className="flex w-full justify-between">
                                          <p>شماره سفارش : </p>
                                          <p>{ConvertToPersian(7895461230)}</p>
                                   </div>
                                   <div className="flex w-full justify-between">
                                          <p>مقدار تخفیف : </p>
                                          <p><FormattingPrice price={120000} /> </p>
                                   </div>
                                   <div className="flex w-full justify-between">
                                          <p>مقدار پرداخت شده : </p>
                                          <p><FormattingPrice price={4790000} /> </p>
                                   </div>
                                   <div className="flex w-full justify-between">
                                          <p>قیمت کل : </p>
                                          <p><FormattingPrice price={4910000} /> </p>
                                   </div>
                                   <div className="flex w-full justify-between">
                                          <p>وضعیت سفارش : </p>
                                          <p className="text-yellow-600">درحال انجام</p>
                                   </div>
                            </div>
                     </div>
                     <button className="block w-fit px-4 mx-auto mt-12 bg-box_primary py-2 rounded-xl text-white"><Link to={"/user-panel/orders"}>حساب کاربری</Link></button>
              </section>
       )
}
