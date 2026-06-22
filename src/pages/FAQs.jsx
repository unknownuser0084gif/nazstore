import Navbar from "../shared/layouts/Navbar"
import Footer from "../shared/layouts/Footer"
import { PiShoppingCartLight } from "react-icons/pi"
import { Accordion } from "../shared/components/Accordion"
import { AccordionItem } from "../shared/components/AccordionItem"


export default function AboutUs() {
       return (
              <>
                     <Navbar />
                     <section className="py-18 font-main">
                            <div className="w-full text-center">
                                   <h1 className="text-2xl max-md:text-xl font-bold text-text_secondary">موضوع پرسش شما چیست؟</h1>
                                   <p className="mt-1 mb-4 max-md:text-sm">موضوع مورد نظر تان را جستجو کرده یا از بین دسته بندی های زیر انتخاب کنید</p>
                                   <div className="w-114 max-md:w-full max-md:px-8 mx-auto">
                                          <input type="text" className="input-control" placeholder="جستجوی موضوع..." dir="rtl" />
                                   </div>
                            </div>
                            <div className="w-full text-center mt-16">
                                   <h1 className="text-2xl max-md:text-xl font-bold text-text_secondary">دسته بندی پرسش ها</h1>
                                   <div className="w-180 max-md:w-full mx-auto grid grid-cols-5 max-md:grid-cols-3 justify-items-center mt-6 gap-x-2 gap-y-4" dir="rtl">
                                          <div className="w-32 h-24 border border-neutral-300 rounded-lg flex flex-col justify-center items-center gap-y-0.5 text-text_secondary">
                                                 <PiShoppingCartLight className="size-12 " />
                                                 <h3 className="text-base">ورود و ثبت نام</h3>
                                          </div>
                                          <div className="w-32 h-24 border border-neutral-300 rounded-lg flex flex-col justify-center items-center gap-y-0.5 text-text_secondary">
                                                 <PiShoppingCartLight className="size-12 " />
                                                 <h3 className="text-base">خرید محصولات</h3>
                                          </div>
                                          <div className="w-32 h-24 border border-neutral-300 rounded-lg flex flex-col justify-center items-center gap-y-0.5 text-text_secondary">
                                                 <PiShoppingCartLight className="size-12 " />
                                                 <h3 className="text-base">پیگیری سفارش</h3>
                                          </div>
                                          <div className="w-32 h-24 border border-neutral-300 rounded-lg flex flex-col justify-center items-center gap-y-0.5 text-text_secondary">
                                                 <PiShoppingCartLight className="size-12 " />
                                                 <h3 className="text-base">خرید محصولات</h3>
                                          </div>
                                          <div className="w-32 h-24 border border-neutral-300 rounded-lg flex flex-col justify-center items-center gap-y-0.5 text-text_secondary">
                                                 <PiShoppingCartLight className="size-12 " />
                                                 <h3 className="text-base">خرید محصولات</h3>
                                          </div>
                                   </div>
                            </div>
                            <div className="w-full text-center mt-16">
                                   <h1 className="text-2xl max-md:text-xl font-bold text-text_secondary">سوالات متداول</h1>
                                   <p className="mt-1 mb-4 max-md:text-sm">پاسخ سوالات پر تکرار کاربران را در این بخش ببینید</p>
                                   <div className="w-180 max-md:w-full mx-auto rounded-lg max-md:px-4" dir="rtl">
                                          <Accordion>
                                                 <AccordionItem eventKey={1} parentBorder >
                                                        {/* btn */}
                                                        <div className="w-full text-start p-4">
                                                               <p>نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟</p>
                                                        </div>
                                                        {/* content */}
                                                        <div className="text-justify">
                                                               <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. </p>
                                                        </div>
                                                 </AccordionItem>
                                                 <AccordionItem eventKey={2} parentBorder >
                                                        {/* btn */}
                                                        <div className="w-full text-start p-4">
                                                               <p>نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟</p>
                                                        </div>
                                                        {/* content */}
                                                        <div className="text-justify">
                                                               <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. </p>
                                                        </div>
                                                 </AccordionItem>
                                                 <AccordionItem eventKey={3} parentBorder >
                                                        {/* btn */}
                                                        <div className="w-full text-start p-4">
                                                               <p>نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟</p>
                                                        </div>
                                                        {/* content */}
                                                        <div className="text-justify">
                                                               <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. </p>
                                                        </div>
                                                 </AccordionItem>
                                                 <AccordionItem eventKey={4} parentBorder >
                                                        {/* btn */}
                                                        <div className="w-full text-start p-4">
                                                               <p>نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟</p>
                                                        </div>
                                                        {/* content */}
                                                        <div className="text-justify">
                                                               <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. </p>
                                                        </div>
                                                 </AccordionItem>
                                                 <AccordionItem eventKey={5} parentBorder >
                                                        {/* btn */}
                                                        <div className="w-full text-start p-4">
                                                               <p>نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟</p>
                                                        </div>
                                                        {/* content */}
                                                        <div className="text-justify">
                                                               <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. </p>
                                                        </div>
                                                 </AccordionItem>
                                          </Accordion>
                                   </div>
                            </div>
                     </section>
                     <Footer />
              </>
       )
}
