import Sidebar from "./../layouts/sidebar"
import Navbar from "./../../../shared/layouts/Navbar"
import { BiLocationPlus } from "react-icons/bi"
import { HiLocationMarker } from "react-icons/hi"
import { GrLocationPin } from "react-icons/gr"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { useDelete } from "./../../../shared/hooks/useSwal"

export default function Addresses() {

       const deleteItem = useDelete()
       const deleteHandler = (addId) => {
              console.log(addId)
              deleteItem(({ isConfirmed }) => console.log("modal action : ", isConfirmed))
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
                                          <h1 className="text-2xl text-text_secondary font-main-bold flex items-center gap-x-2"><HiLocationMarker /> آدرس های من</h1>
                                          <button className="px-4 py-2 bg-box_primary text-white rounded-lg cursor-pointer flex items-center gap-x-2"><BiLocationPlus className="size-6" />افزودن ادرس جدید </button>
                                   </div>
                                   <div className="w-full mt-8 space-y-4">
                                          {/* items */}
                                          <div className="w-full border border-box_primary rounded-xl p-4 relative">
                                                 <h3 className="text-text_secondary text-lg flex items-center font-bold gap-x-2"><GrLocationPin /> آدرس خونمون </h3>
                                                 <div className="mt-6 space-y-3 text-sm">
                                                        <p>استان تهران خیابون ازادی کوچه معین بلوار ازادی میلان گلستان دست راست پلاک 53</p>
                                                        <div className="flex gap-x-3">
                                                               <p>استان : تهران</p>-
                                                               <p>شهر : مشهد</p>
                                                        </div>
                                                        <p>کد پستی : 9163165478</p>
                                                        <p>گیرنده : محمد علی بانی</p>
                                                        <p>شماره تماس : 09023319893</p>
                                                 </div>
                                                 {/* buttons */}
                                                 <div className="absolute bottom-0 left-0 p-2 space-y-2">
                                                        <button onClick={() => deleteHandler(5)} className="w-20 ps-2 py-1 text-sm bg-red-700 text-white rounded-lg cursor-pointer flex items-center gap-x-1"><AiOutlineDelete className="size-4" />حذف </button>
                                                        <button className="w-20 ps-2 py-1 text-sm bg-yellow-600 text-white rounded-lg cursor-pointer flex items-center gap-x-1"><AiOutlineEdit className="size-4" />ویرایش </button>
                                                 </div>
                                          </div>
                                          {/* items */}
                                          <div className="w-full border border-box_primary rounded-xl p-4 relative">
                                                 <h3 className="text-text_secondary text-lg flex items-center font-bold gap-x-2"><GrLocationPin /> آدرس شرکت تقی آباد </h3>
                                                 <div className="mt-6 space-y-3 text-sm">
                                                        <p>استان تهران خیابون ازادی کوچه معین بلوار ازادی میلان گلستان دست راست پلاک 53</p>
                                                        <div className="flex gap-x-3">
                                                               <p>استان : تهران</p>-
                                                               <p>شهر : مشهد</p>
                                                        </div>
                                                        <p>کد پستی : 9163165478</p>
                                                        <p>گیرنده : محمد علی بانی</p>
                                                        <p>شماره تماس : 09023319893</p>
                                                 </div>
                                                 {/* buttons */}
                                                 <div className="absolute bottom-0 left-0 p-2 space-y-2">
                                                        <button onClick={() => deleteHandler(5)} className="w-20 ps-2 py-1 text-sm bg-red-700 text-white rounded-lg cursor-pointer flex items-center gap-x-1"><AiOutlineDelete className="size-4" />حذف </button>
                                                        <button className="w-20 ps-2 py-1 text-sm bg-yellow-600 text-white rounded-lg cursor-pointer flex items-center gap-x-1"><AiOutlineEdit className="size-4" />ویرایش </button>
                                                 </div>
                                          </div>
                                   </div>
                            </main>
                     </section>
              </>
       )
}
