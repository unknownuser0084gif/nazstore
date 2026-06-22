import { Link } from "react-router-dom"
import CartProductHor from "../components/CartProductHor"

export default function NewProducts() {
       return (
              <>
                     <div className="w-full h-fit pb-8 bg-box_secondary mt-18 rounded-xl">
                            <div className="w-full flex justify-between items-center px-8 py-6" dir="rtl">
                                   {/* title */}
                                   <div className="w-fit flex justify-center gap-1 font-main-bold text-xl max-md:text-base" dir="rtl">
                                          <p className="text-text_primary">محصولات جدید</p>
                                          <p className="text-text_secondary">امسال</p>
                                   </div>
                                   {/* buttons */}
                                   <div className="w-fit px-2 flex justify-center gap-x-2 text-text_secondary text-base max-md:text-sm">
                                          <button className="py-2 px-4 bg-box_primary rounded-full text-white font-main">
                                                 <Link to={"/products"}>مشاهده بیشتر</Link>
                                          </button>
                                   </div>
                            </div>
                            <div className="w-full grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 place-items-center gap-y-10" dir="rtl">
                                   <CartProductHor
                                          id={5}
                                          title={"کیت رئال مادرید برند مادرید کامپنی"}
                                          summary={"توضیحاتی کمتر برای این کف ین اینف ین این تقطه"}
                                          img={"/images/kitReal.png"}
                                          rate={2.8}
                                          price={320000}
                                   />
                                   <CartProductHor
                                          img={"/images/shoe.png"}
                                          price={120000}
                                          id={5}
                                          title={"کیت رئال مادرید برند مادرید کامپنی"}
                                          summary={"توضیحاتی کمتر برای این کف ین اینف ین این تقطه"}
                                          rate={4.9}
                                          discountPercent={10}
                                          discountedPrice={108000}
                                   />
                                   <CartProductHor
                                          id={5}
                                          title={"کیت رئال مادرید برند مادرید کامپنی"}
                                          summary={"توضیحاتی کمتر برای این کف ین اینف ین این تقطه"}
                                          img={"/images/kitReal.png"}
                                          rate={2.8}
                                          price={320000}
                                   />
                                   <CartProductHor
                                          img={"/images/shoe.png"}
                                          price={120000}
                                          id={5}
                                          title={"کیت رئال مادرید برند مادرید کامپنی"}
                                          summary={"توضیحاتی کمتر برای این کف ین اینف ین این تقطه"}
                                          rate={4.9}
                                          discountPercent={10}
                                          discountedPrice={108000}
                                   />
                                   <CartProductHor
                                          id={5}
                                          title={"کیت رئال مادرید برند مادرید کامپنی"}
                                          summary={"توضیحاتی کمتر برای این کف ین اینف ین این تقطه"}
                                          img={"/images/kitReal.png"}
                                          rate={2.8}
                                          price={320000}
                                   />
                                   <CartProductHor
                                          img={"/images/shoe.png"}
                                          price={120000}
                                          id={5}
                                          title={"کیت رئال مادرید برند مادرید کامپنی"}
                                          summary={"توضیحاتی کمتر برای این کف ین اینف ین این تقطه"}
                                          rate={4.9}
                                          discountPercent={10}
                                          discountedPrice={108000}
                                   />
                            </div>
                     </div>
              </>
       )
}
