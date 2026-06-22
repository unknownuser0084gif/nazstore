import Sidebar from "./../layouts/Sidebar"
import Navbar from "../../../shared/layouts/Navbar"
import { GrTransaction } from "react-icons/gr"
import convertToP from "./../../../shared/utils/ConvertToPersian"
import FormatingPrice from "./../../../shared/utils/FormatingPrice"

export default function Transactions() {
       return (
              <>
                     <Navbar />
                     <section className="w-full mt-10 font-main flex max-md:block justify-between max-md:px-8 max-md:pb-4" dir="rtl">
                            {/* sidebar */}
                            <Sidebar />
                            {/* content */}
                            <main className="w-[calc(100%-312px)] max-md:w-full max-md:mt-8 px-4">
                                   <div className="flex justify-between items-center">
                                          <h1 className="text-2xl text-text_secondary font-main-bold flex items-center gap-x-2"><GrTransaction /> تراکنش ها</h1>
                                   </div>
                                   {/* desktop */}
                                   <div className="w-full mt-4 hidden md:block">
                                          {/* head title */}
                                          <div className="w-full py-6 flex">
                                                 <p className="text-center text-sm w-full">شماره سفارش</p>
                                                 <p className="text-center text-sm w-full">تاریخ</p>
                                                 <p className="text-center text-sm w-full">وضعیت</p>
                                                 <p className="text-center text-sm w-full">نوع پرداخت</p>
                                                 <p className="text-center text-sm w-full">قیمت</p>
                                          </div>
                                          {/* content */}
                                          <div className="w-full space-y-4">
                                                 {/* item */}
                                                 <div className="w-full border border-neutral-300 py-8 flex rounded-lg">
                                                        <p className="text-center text-sm w-full">{convertToP(516684651)}</p>
                                                        <p className="text-center text-sm w-full">{convertToP("1404/02/25")}</p>
                                                        <p className="text-center text-sm w-full text-green-600">پرداخت موفق</p>
                                                        <p className="text-center text-sm w-full text-neutral-400">پرداخت اقساطی</p>
                                                        <p className="text-center text-base w-full"><FormatingPrice price={1524000} tomanSize="12px" /></p>
                                                 </div>
                                                 {/* item */}
                                                 <div className="w-full border border-neutral-300 py-8 flex rounded-lg">
                                                        <p className="text-center text-sm w-full">{convertToP(416565651)}</p>
                                                        <p className="text-center text-sm w-full">{convertToP("1404/02/25")}</p>
                                                        <p className="text-center text-sm w-full text-red-600">پرداخت ناموفق</p>
                                                        <p className="text-center text-sm w-full text-neutral-400">پرداخت انلاین</p>
                                                        <p className="text-center text-base w-full"><FormatingPrice price={12345600} tomanSize="12px" /></p>
                                                 </div>
                                                 {/* item */}
                                                 <div className="w-full border border-neutral-300 py-8 flex rounded-lg">
                                                        <p className="text-center text-sm w-full">{convertToP(31256421)}</p>
                                                        <p className="text-center text-sm w-full">{convertToP("1404/02/25")}</p>
                                                        <p className="text-center text-sm w-full text-yellow-600">درحال پرداخت</p>
                                                        <p className="text-center text-sm w-full text-neutral-400">پرداخت کیف پول</p>
                                                        <p className="text-center text-base w-full"><FormatingPrice price={12300} tomanSize="12px" /></p>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* mobile */}
                                   <div className="w-full mt-4 block md:hidden space-y-8">
                                          {/* item */}
                                          <div className="w-full border border-neutral-300">
                                                 <div className="w-full flex p-4 justify-between">
                                                        <p>شماره سفارش:</p>
                                                        <p>{convertToP(516684651)}</p>
                                                 </div>
                                                 <div className="w-full flex p-4 justify-between">
                                                        <p>تاریخ:</p>
                                                        <p>{convertToP("1404/02/08")}</p>
                                                 </div>
                                                 <div className="w-full flex p-4 justify-between">
                                                        <p>وضعیت:</p>
                                                        <p className="text-sm text-green-600">پرداخت موفق</p>
                                                 </div>
                                                 <div className="w-full flex p-4 justify-between">
                                                        <p>نوع پرداخت:</p>
                                                        <p className="text-sm text-neutral-400">پرداخت اقساطی</p>
                                                 </div>
                                                 <div className="w-full flex p-4 justify-between">
                                                        <p>قیمت:</p>
                                                        <p><FormatingPrice price={1524000} tomanSize="12px" /></p>
                                                 </div>
                                          </div>
                                          {/* item */}
                                          <div className="w-full border border-neutral-300">
                                                 <div className="w-full flex p-4 justify-between">
                                                        <p>شماره سفارش:</p>
                                                        <p>{convertToP(516684651)}</p>
                                                 </div>
                                                 <div className="w-full flex p-4 justify-between">
                                                        <p>تاریخ:</p>
                                                        <p>{convertToP("1404/02/08")}</p>
                                                 </div>
                                                 <div className="w-full flex p-4 justify-between">
                                                        <p>وضعیت:</p>
                                                        <p className="text-sm text-green-600">پرداخت موفق</p>
                                                 </div>
                                                 <div className="w-full flex p-4 justify-between">
                                                        <p>نوع پرداخت:</p>
                                                        <p className="text-sm text-neutral-400">پرداخت اقساطی</p>
                                                 </div>
                                                 <div className="w-full flex p-4 justify-between">
                                                        <p>قیمت:</p>
                                                        <p><FormatingPrice price={1524000} tomanSize="12px" /></p>
                                                 </div>
                                          </div>
                                          {/* item */}
                                          <div className="w-full border border-neutral-300">
                                                 <div className="w-full flex p-4 justify-between">
                                                        <p>شماره سفارش:</p>
                                                        <p>{convertToP(516684651)}</p>
                                                 </div>
                                                 <div className="w-full flex p-4 justify-between">
                                                        <p>تاریخ:</p>
                                                        <p>{convertToP("1404/02/08")}</p>
                                                 </div>
                                                 <div className="w-full flex p-4 justify-between">
                                                        <p>وضعیت:</p>
                                                        <p className="text-sm text-green-600">پرداخت موفق</p>
                                                 </div>
                                                 <div className="w-full flex p-4 justify-between">
                                                        <p>نوع پرداخت:</p>
                                                        <p className="text-sm text-neutral-400">پرداخت اقساطی</p>
                                                 </div>
                                                 <div className="w-full flex p-4 justify-between">
                                                        <p>قیمت:</p>
                                                        <p><FormatingPrice price={1524000} tomanSize="12px" /></p>
                                                 </div>
                                          </div>
                                   </div>
                            </main>
                     </section>
              </>
       )
}
