import { Outlet } from "react-router-dom";

export default function CheckoutGuardLayout() {
       return (
              <>
                     {/* guard data */}
                     {console.log("CheckoutGuard Refreshed")}

                     {/* render children pages */}
                     <Outlet />
              </>
       )
}