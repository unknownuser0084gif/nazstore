import { Link } from "react-router-dom"

export default function NotFoundComponent() {
       return (
              <section className="pt-18 pb-12">
                     <h1 className="font-main text-4xl md:text-6xl text-center text-text_secondary">صفحه پیدا نشد</h1>
                     <div className="flex items-center justify-center">
                            <h1 className="text-[6rem] text-shadow-[0px_0px_16px_#2b7fff] text-text_secondary font-main font-bold -me-12 max-md:-me-10">{(4).toLocaleString("fa")}</h1>
                            <img loading="lazy" src="/images/404-3d.webp" className="max-md:size-58 size-72 animate-bounce mt-16 max-md:mt-12" style={{ animationDuration: "5s" }} alt="" />
                            <h1 className="text-[6rem] text-shadow-[0px_0px_16px_#2b7fff] text-text_secondary font-main font-bold -ms-12 max-md:-ms-10">{(4).toLocaleString("fa")}</h1>
                     </div>
                     <Link className="my-4 text-center block font-main text-3xl text-text_secondary" to={"/"}>برگشت به خانه</Link>
              </section>
       )
}
