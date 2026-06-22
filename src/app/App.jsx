import { useRoutes } from "react-router-dom"
import routes from "./Routes"
import { BgHide } from "../shared"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function App() {

       const defineRoutes = useRoutes(routes)

       return (
              <>
                     {/* Routing */}
                     <section className="container mx-auto">
                            <BgHide />
                            {window.scrollTo({ top: 0, behavior: "smooth" })}
                            {defineRoutes}
                     </section>
              </>
       )
}

export default App
