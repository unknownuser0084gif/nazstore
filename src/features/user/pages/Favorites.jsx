import Sidebar from "./../layouts/Sidebar"
import Navbar from "./../../../shared/layouts/Navbar"
import { AiFillHeart } from "react-icons/ai"
import { CardProductForAll } from "./../../product"

export default function Favorites() {

       return (
              <>
                     <Navbar />
                     <section className="w-full mt-10 font-main flex max-md:block justify-between max-md:px-8 max-md:pb-4" dir="rtl">
                            {/* sidebar */}
                            <Sidebar />
                            {/* content */}
                            <main className="w-[calc(100%-312px)] max-md:w-full max-md:mt-8 px-4">
                                   <div className="flex justify-between items-center">
                                          <h1 className="text-2xl text-text_secondary font-main-bold flex items-center gap-x-2"><AiFillHeart /> محصولات مورد علاقه من</h1>
                                   </div>
                                   <div className="w-full mt-8 grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 justify-items-center gap-y-8">
                                          <CardProductForAll
                                                 key={51}
                                                 id={5}
                                                 linked={"product/" + "folan"}
                                                 onLike={() => console.log("add to cart")}
                                                 maxValueForCart={8 /* prduct quantity in db */}
                                                 price={12700}
                                                 title={"کفش نایک برند متاعی gh-plus"}
                                                 img={"/images/kitReal.png"}
                                          />
                                          <CardProductForAll
                                                 key={25}
                                                 id={5}
                                                 linked={"product/" + "folan"}
                                                 onLike={() => console.log("add to cart")}
                                                 maxValueForCart={8 /* prduct quantity in db */}
                                                 price={12700}
                                                 title={"کفش نایک برند متاعی gh-plus"}
                                                 img={"/images/kitReal.png"}
                                          />
                                          <CardProductForAll
                                                 key={53}
                                                 id={5}
                                                 linked={"product/" + "folan"}
                                                 onLike={() => console.log("add to cart")}
                                                 maxValueForCart={8 /* prduct quantity in db */}
                                                 price={12700}
                                                 title={"کفش نایک برند متاعی gh-plus"}
                                                 img={"/images/kitReal.png"}
                                          />
                                          <CardProductForAll
                                                 key={45}
                                                 id={5}
                                                 linked={"product/" + "folan"}
                                                 onLike={() => console.log("add to cart")}
                                                 maxValueForCart={8 /* prduct quantity in db */}
                                                 price={12700}
                                                 title={"کفش نایک برند متاعی gh-plus"}
                                                 img={"/images/kitReal.png"}
                                          />
                                          <CardProductForAll
                                                 key={55}
                                                 id={5}
                                                 linked={"product/" + "folan"}
                                                 onLike={() => console.log("add to cart")}
                                                 maxValueForCart={8 /* prduct quantity in db */}
                                                 price={12700}
                                                 title={"کفش نایک برند متاعی gh-plus"}
                                                 img={"/images/kitReal.png"}
                                          />
                                   </div>
                            </main>
                     </section>
              </>
       )
}
