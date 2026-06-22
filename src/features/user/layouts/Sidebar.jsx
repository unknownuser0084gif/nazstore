import { LuLayoutDashboard } from "react-icons/lu"
import { AiOutlineOrderedList, AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai"
import { MdOutlineLocationOn } from "react-icons/md"
import { IoTicketOutline } from "react-icons/io5"
import { GrTransaction } from "react-icons/gr"
import { BiExit } from "react-icons/bi"
import { Link, NavLink, useLocation } from "react-router-dom"

export default function Sidebar() {

       const { pathname } = useLocation()
       const navlinkHandler = ({ isActive }) => {
              const classes = isActive ? "text-text_secondary scale-110" : "";
              return classes + " text-lg";
       }

       return (
              <div className="min-w-72 max-md:w-full h-138 mb-4 border border-neutral-300 rounded-xl">
                     {/* profile image */}
                     <div className="flex justify-center w-full pt-8 pb-4">
                            <img loading="lazy" src="/images/me.webp" className="size-24 border-2 border-box_primary rounded-full object-cover" alt="" />
                     </div>
                     {/* name */}
                     <h1 className="text-center text-xl text-text_secondary">مرتضی بحری</h1>
                     {/* options */}
                     <div className="w-full mt-8 px-10 space-y-4 pb-4">
                            {/* dashboard */}
                            <div className="flex justify-start gap-x-3 items-center">
                                   <LuLayoutDashboard className="size-6 text-text_secondary" />
                                   <NavLink
                                          to={"/user-panel"}
                                          className={e => {
                                                 if (pathname.split("/").at(-1) === "user-panel") return "text-text_secondary scale-105 text-lg"; else return "text-lg";
                                          }}
                                   >داشبورد</NavLink>
                            </div>
                            {/* orders */}
                            <div className="flex justify-start gap-x-3 items-center">
                                   <AiOutlineOrderedList className="size-6 text-text_secondary" />
                                   <NavLink to={"/user-panel/orders"} className={navlinkHandler} >سفارشات</NavLink>
                            </div>
                            {/* heart */}
                            <div className="flex justify-start gap-x-3 items-center">
                                   <AiOutlineHeart className="size-6 text-text_secondary" />
                                   <NavLink to={"/user-panel/favorites"} className={navlinkHandler} >مورد علاقه ها</NavLink>
                            </div>
                            {/* addresses */}
                            <div className="flex justify-start gap-x-3 items-center">
                                   <MdOutlineLocationOn className="size-6 text-text_secondary" />
                                   <NavLink to={"/user-panel/addresses"} className={navlinkHandler} >آدرس ها</NavLink>
                            </div>
                            {/* Tickets */}
                            <div className="flex justify-start gap-x-3 items-center">
                                   <IoTicketOutline className="size-6 text-text_secondary" />
                                   <NavLink to={"/user-panel/tickets"} className={navlinkHandler} >تیکت ها</NavLink>
                            </div>
                            {/* Tickets */}
                            <div className="flex justify-start gap-x-3 items-center">
                                   <GrTransaction className="size-6 text-text_secondary" />
                                   <NavLink to={"/user-panel/transactions"} className={navlinkHandler} >تراکنش ها</NavLink>
                            </div>
                            {/* information account */}
                            <div className="flex justify-start gap-x-3 items-center">
                                   <AiOutlineInfoCircle className="size-6 text-text_secondary" />
                                   <NavLink to={"/user-panel/information"} className={navlinkHandler} >اطلاعات حساب</NavLink>
                            </div>
                            {/* exit */}
                            <div className="flex justify-start gap-x-3 items-center">
                                   <BiExit className="size-6 text-text_secondary" />
                                   <NavLink to={"/user-panel"} >خروج</NavLink>
                            </div>
                     </div>
              </div>
       )
}
