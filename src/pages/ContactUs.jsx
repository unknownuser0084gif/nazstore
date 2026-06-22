import React from 'react'
import Navbar from '../shared/layouts/Navbar'
import Footer from '../shared/layouts/Footer'

export default function ContactUs() {
       return (
              <>
                     <Navbar />
                     <section className='py-8 font-main' dir='rtl'>
                            <div className='w-full flex max-md:flex-col gap-6 max-md:px-6'>
                                   <div className='w-full'>
                                          <h1 className='text-2xl text-text_secondary mb-6 font-bold'>در ارتباط باشید</h1>
                                          <form>
                                                 <div className='flex w-full gap-x-4'>
                                                        <input type="text" className='input-control' placeholder='نام شما' />
                                                        <input type="text" className='input-control' placeholder='ایمیل شما' />
                                                 </div>
                                                 <textarea name="" placeholder='پیام شما' className='input-control mt-4' rows={7} id=""></textarea>
                                                 <div className='mt-4 flex items-center justify-between'>
                                                        <p className='text-neutral-600'>ما در سریعترین زمان ممکن پاسخ میدهیم</p>
                                                        <button type='submit' className='px-4 py-2 cursor-pointer bg-box_primary rounded-lg text-white '>ثبت</button>
                                                 </div>
                                          </form>
                                   </div>
                                   <div className='w-full'>
                                          <h1 className='text-2xl text-text_secondary mb-8 font-bold '>تماس با ما</h1>
                                          <div className='w-full space-y-8'>
                                                 <div className='w-full flex justify-between'>
                                                        <p className='text-text_secondary'>آدرس:</p>
                                                        <p>کرمان ، شهر بابک ، خیابان مرکزی</p>
                                                 </div>
                                                 <div className='w-full flex justify-between'>
                                                        <p className='text-text_secondary'>ایمیل:</p>
                                                        <p>folan@gmail.com</p>
                                                 </div>
                                                 <div className='w-full flex justify-between'>
                                                        <p className='text-text_secondary'>تلفن:</p>
                                                        <p>051-32425173</p>
                                                 </div>
                                                 <div className='w-full flex justify-between'>
                                                        <p className='text-text_secondary'>ساعات کاری:</p>
                                                        <p>شنبه تا چهارشنبه - 9 تا 17</p>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </section>
                     <Footer />
              </>
       )
}
