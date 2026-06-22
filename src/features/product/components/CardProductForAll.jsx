import { Link } from "react-router-dom";
import FormatingNumber from "../utils/FormatingNumber";
import FormatingPrice from "../utils/FormatingPrice"
import { CiHeart } from "react-icons/ci";
import { useCart } from "../../cart";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"


export default function CardProductForAll({ id, img, title, price = 0, linked, onLike, maxValueForCart, discountPrecent = null, discountedPrice = null }) {

       const { has, add, deleteItem } = useCart()

       return (
              <>
                     <div className="w-72 max-lg:w-full p-2.5 pb-3 rounded-xl shadow-[1px_1px_12px_1px_#3d3d3d47] font-main relative" dir="rtl">
                            {/* discount */}
                            {
                                   discountPrecent && (
                                          <span style={{ clipPath: "circle(97.0% at 0 0)" }} className="bg-teal-100 rounded size-9 text-xs text-center pt-2 pr-1.5 absolute top-0.5 left-0.5">10%</span>
                                   )
                            }
                            {/* img */}
                            <img loading="lazy" src={img} alt="" className="w-full h-54 max-lg:h-46 object-fill max-lg:object-cover rounded-lg" />
                            {/* title & like */}
                            <div className="flex justify-between items-center gap-x-1.5">
                                   <h2 className="text-lg max-lg:text-sm pt-4 pb-4 h-22 max-lg:h-18"><Link className="line-clamp-2" to={"/" + linked}>{title}</Link></h2>
                                   <CiHeart className="size-6 min-w-6 max-lg:size-4 max-lg:min-w-4 cursor-pointer" onClick={onLike} />
                            </div>
                            {/* price & add cart */}
                            <div className="w-full flex items-center gap-x-1 justify-between">
                                   <div className="w-full">
                                          <p className="text-xs"> قیمت</p>
                                          <span className="text-xl max-lg:text-base"><FormatingPrice price={discountedPrice ?? price} tomanSize={window.innerWidth > 758 ? "12px" : "10px"} /></span>
                                          {
                                                 discountedPrice && (
                                                        <span className="text-xs flex gap-x-4">
                                                               <del>{FormatingNumber(price)}</del>
                                                        </span>
                                                 )
                                          }
                                   </div>
                                   <div className="w-16">
                                          {
                                                 !has(id) ? (
                                                        <button onClick={() => add(id, maxValueForCart)} className="w-12 flex justify-center items-center py-2 bg-teal-100 rounded-full cursor-pointer ">
                                                               <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" size="24" className="size-5 fill-text_secondary">
                                                                      <g fill="inherit">
                                                                             <path fillRule="evenodd" clipRule="evenodd" d="M22.995 3.25H19.29l-.455 2.726-.002.01-1.326 7.443-.002.01-.613 3.24-.154.814H3.495v-2H15.08l.234-1.24H4.282l-.232-.673-2.57-7.442L1.02 4.81h15.98l.456-2.726.14-.835h5.398v2Zm-7.31 9.004.97-5.443H3.827l1.88 5.443h9.976Z"></path>
                                                                             <path d="M16.384 21a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM6.745 22.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"></path>
                                                                      </g>
                                                               </svg>
                                                        </button>
                                                 ) : (
                                                        <div className="w-full flex flex-col justify-start items-center">
                                                               <p className="text-sm mb-1">{has(id).quantity}</p>
                                                               <div className="w-full flex justify-center items-center gap-x-2">
                                                                      <AiOutlineMinus className="size-3 cursor-pointer" onClick={() => deleteItem(id)} />
                                                                      <AiOutlinePlus className="size-3 cursor-pointer" onClick={() => add(id, maxValueForCart)} />
                                                               </div>
                                                        </div>
                                                 )
                                          }

                                   </div>
                            </div>
                     </div>
              </>
       )
}
