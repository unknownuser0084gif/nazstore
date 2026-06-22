import { memo, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { off } from "../state/bgHideSlice";


const BgHide = memo(({ trigger = true }) => {

       const styles = useSelector(state => state.bgHide)
       const dispatch = useDispatch()

       return createPortal(
              <div
                     style={styles}
                     onClick={() => dispatch(off())}
                     className="fixed  top-0 left-0 h-dvh w-dvw z-99 bg-[#00000099] transition-all duration-350"
              ></div>
              , document.body
       )
})

export default BgHide;
