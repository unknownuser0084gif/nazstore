import Navbar from "../shared/layouts/Navbar"
import Footer from "../shared/layouts/Footer"
import NotFoundComponent from "../shared/components/404"

export default function NotFound() {
       return (
              <>
                     <Navbar />
                     <NotFoundComponent />
                     <Footer />
              </>
       )
}
