import { Link } from "react-router-dom"
import ButtonTextSec from "../../../shared/components/ButtonTextSec"
import formatNum from "../utils/FormatingNumber"
import FormatingPrice from "../utils/FormatingPrice"

export default function CartProduct({ id, img, title, summary, rate, price, discountPercent, discountedPrice }) {
       return (
              <div className="rounded-lg overflow-hidden w-92 h-56 bg-white flex shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                     {/* image */}
                     <Link to={`/product/${title}`} className="w-6/10 h-full">
                            <img loading="lazy" src={img} className="w-full h-full object-contain" alt="" />
                     </Link>
                     {/* content */}
                     <div className="w-4/10 h-full font-main px-2 py-4">
                            <p className="text-sm line-clamp-2">{title}</p>
                            <p className="text-xs text-neutral-500 mt-2 line-clamp-2">{summary}</p>
                            <div className={`px-4 flex justify-between ${discountPercent ? "mt-4" : "mt-8"}`} dir="ltr">
                                   <p>{formatNum(rate)} ⭐</p>
                                   {discountPercent && <p className="text-text_secondary">{formatNum(discountPercent)} %</p>}
                            </div>
                            <p className="text-end text-text_secondary px-4"><FormatingPrice price={discountPercent ? discountedPrice : price} /> </p>
                            {discountPercent && (<del className="block text-end px-4 text-text_secondary text-xs"><FormatingPrice tomanSize="12px" price={price} /> </del>)}
                            <ButtonTextSec text={"افزودن به سبد خرید"} className="w-9/10 py-1.5 mt-1 rounded-lg text-xs" />
                     </div>
              </div>
       )
}