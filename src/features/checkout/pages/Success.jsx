import { motion } from "framer-motion"
import { AiFillHeart } from "react-icons/ai"
import ConvertToPersian from "./../../../shared/utils/ConvertToPersian"
import FormattingPrice from "./../../../shared/utils/FormatingPrice"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Success() {

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
                                          stroke="#4caf50"
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
                                   <circle fill="#4CAF50" cx="100" cy="100" r="74"></circle>
                                   <polygon transform='translate(28, 28) scale(3)' fill="#fff" points="34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"></polygon>
                            </svg>
                            <h1 className="mt-8 text-3xl text-green-600">پرداخت شما موفق بود</h1>
                            <p className="mt-2 flex gap-x-1 items-center">از خرید شما متشکریم <AiFillHeart className="text-green-600" /> </p>
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
                                          <p className="text-green-500">موفق</p>
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
