import Sidebar from "./../layouts/sidebar"
import Navbar from "../../../shared/layouts/Navbar"
import { RiTicket2Fill } from "react-icons/ri"

export default function Tickets() {
       return (
              <>
                     <Navbar />
                     <section className="w-full mt-10 font-main flex max-md:block justify-between max-md:px-8 max-md:pb-4" dir="rtl">
                            {/* sidebar */}
                            <Sidebar />
                            {/* content */}
                            <main className="w-[calc(100%-312px)] max-md:w-full max-md:mt-8 px-4">
                                   <div className="flex justify-between items-center">
                                          <h1 className="text-2xl text-text_secondary font-main-bold flex items-center gap-x-2"><RiTicket2Fill /> تیکت ها</h1>
                                   </div>
                            </main>
                     </section>
              </>
       )
}
