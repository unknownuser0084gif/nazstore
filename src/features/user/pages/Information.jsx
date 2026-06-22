import Sidebar from "./../layouts/sidebar"
import Navbar from "../../../shared/layouts/Navbar"
import InputGood from "../../../shared/components/InputGood";
import { AiFillInfoCircle } from "react-icons/ai"
import { MdPhone, MdEmail } from "react-icons/md";
import { GiNewBorn } from "react-icons/gi";
import { BiSolidUser } from "react-icons/bi";


export default function Information() {

       const formHandler = e => {
              e.preventDefault()
              const form = new FormData(e.target)
              const formValues = Object.fromEntries(form)
              console.log(formValues)
       }

       return (
              <>
                     <Navbar />
                     <section className="w-full mt-10 font-main flex max-md:block justify-between max-md:px-8 max-md:pb-4" dir="rtl">
                            {/* sidebar */}
                            <Sidebar />
                            {/* content */}
                            <main className="w-[calc(100%-312px)] max-md:w-full max-md:mt-8 px-4">
                                   <div className="flex justify-between items-center">
                                          <h1 className="text-2xl text-text_secondary font-main-bold flex items-center gap-x-2"><AiFillInfoCircle /> اطلاعات حساب</h1>
                                   </div>
                                   <form onSubmit={formHandler} className="w-full mt-8">
                                          <div className="w-full flex max-lg:flex-col gap-x-8">
                                                 <InputGood
                                                        Icon={BiSolidUser}
                                                        label={"نام و نام خانوادگی"}
                                                        inputName={"name"}
                                                 />
                                                 <InputGood
                                                        inputType="tel"
                                                        className={"max-lg:mt-12"}
                                                        Icon={MdPhone}
                                                        label={"شماره همراه"}
                                                        inputName={"phone"}
                                                 />
                                          </div>
                                          <div className="w-full lg:mt-4 flex max-lg:flex-col gap-x-8">
                                                 <InputGood
                                                        className={"max-lg:mt-12"}
                                                        Icon={MdEmail}
                                                        label={"ایمیل"}
                                                        inputName={"email"}
                                                 />
                                                 <InputGood
                                                        className={"max-lg:mt-12"}
                                                        Icon={GiNewBorn}
                                                        label={"تاریخ تولد"}
                                                        inputName={"born"}
                                                 />
                                          </div>
                                          <button type="submit" className="px-4 py-2 max-lg:w-full text-white bg-box_primary rounded-lg mt-10 ms-auto me-0 block">ثبت اطلاعات</button>
                                   </form>
                            </main>
                     </section>
              </>
       )
}
