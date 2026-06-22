import { Outlet } from "react-router-dom";

export default function UserGuardLayout() {
       return (
              <>
                     {/* guard data */}
                     {/* ... */}
                     {console.log("userGard Refreshed")}

                     {/* render children pages */}
                     <Outlet />
              </>
       )
}


