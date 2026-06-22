
export default function CartProduct({ id, img, title, summary, rate, price, discount, }) {
       return (
              <div className="min-w-64 max-md:min-w-48 h-96 max-md:w-48 max-md:h-82 relative hover:scale-103 transition-all rounded-xl shadow-[0px_0px_22px_-6px_#758fb5] max-md:shadow-xl">
                     {/* image */}
                     <div className="w-full h-59 max-md:h-42">
                            <img loading="lazy" src={img} className="w-full h-full rounded-t-xl object-cover" alt="" />
                     </div>
                     {/* like */}
                     <div className="size-5 max-md:size-4 cursor-pointer absolute top-3 right-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 23 22" fill="none">
                                   <path d="M16.4531 0C14.3559 0 12.5196 0.980241 11.375 2.63716C10.2304 0.980241 8.39414 0 6.29688 0C4.62742 0.00204519 3.02688 0.723767 1.84639 2.00683C0.665905 3.28989 0.00188169 5.02951 0 6.84403C0 14.5712 10.5412 20.8257 10.9901 21.084C11.1084 21.1532 11.2406 21.1894 11.375 21.1894C11.5094 21.1894 11.6416 21.1532 11.7599 21.084C12.2088 20.8257 22.75 14.5712 22.75 6.84403C22.7481 5.02951 22.0841 3.28989 20.9036 2.00683C19.7231 0.723767 18.1226 0.00204519 16.4531 0ZM11.375 19.2957C9.52047 18.1212 1.625 12.7707 1.625 6.84403C1.62661 5.49784 2.11934 4.20729 2.99514 3.2554C3.87094 2.3035 5.05831 1.76795 6.29688 1.7662C8.27227 1.7662 9.93078 2.90982 10.6234 4.74666C10.6847 4.90863 10.7888 5.04717 10.9226 5.14466C11.0564 5.24216 11.2139 5.29421 11.375 5.29421C11.5361 5.29421 11.6936 5.24216 11.8274 5.14466C11.9612 5.04717 12.0653 4.90863 12.1266 4.74666C12.8192 2.9065 14.4777 1.7662 16.4531 1.7662C17.6917 1.76795 18.8791 2.3035 19.7549 3.2554C20.6307 4.20729 21.1234 5.49784 21.125 6.84403C21.125 12.7619 13.2275 18.1201 11.375 19.2957Z" fill="#444444" />
                            </svg>
                     </div>
                     {/* content */}
                     <div className="w-full rounded-t-2xl backdrop-blur-lg bg-[#ffffff6b] absolute bottom-0 max-md:bottom-1.5 -translate-x-1/2 left-1/2 px-4 py-4 space-y-2 ">
                            {/* title */}
                            <p className="font-main-bold max-md:text-sm">کفش بوکس برند ولنسیا</p>
                            {/* desc */}
                            <p className="font-main text-sm max-md:text-xs text-justify line-clamp-3 ">
                                   لورم ایپسوم متن ساختگی با  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                            {/* price & button */}
                            <div className="w-full h-12 flex max-md:flex-col justify-between items-center font-main">
                                   <div className="w-5/10 h-full flex text-xs items-center gap-x-1.25">
                                          <p className="text-base max">{Number(price).toLocaleString("fa")}</p>
                                          <p>تومان</p>
                                   </div>
                                   <div className="w-4/10 max-md:w-full">
                                          <button className="w-full py-1.5 rounded-lg bg-box_primary text-xs text-white">افزودن به سبد خرید</button>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}
