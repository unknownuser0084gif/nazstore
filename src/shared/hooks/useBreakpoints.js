import { useState } from "react";



export default function useBreakpoints() {

       // define variables
       const [breakpoint, setBreakpoint] = useState(null);
       const checkSize = (w) => {
              if (w < 640) {
                     if (breakpoint != "sm") {
                            setBreakpoint("sm")
                     }
              } else if (w > 640 && w < 768) {
                     if (breakpoint != "md") {
                            setBreakpoint("md")
                     }
              } else if (w > 768 && w < 1024) {
                     if (breakpoint != "lg") {
                            setBreakpoint("lg")
                     }
              } else if (w > 1024 && w < 1280) {
                     if (breakpoint != "xl") {
                            setBreakpoint("xl")
                     }
              } else if (w > 1280 && w < 1536) {
                     if (breakpoint != "xxl") {
                            setBreakpoint("xxl")
                     }
              } else if (w > 1536) {
                     if (breakpoint != "xxxl") {
                            setBreakpoint("xxxl")
                     }
              }
       }

       // actions
       window.addEventListener("resize", () => {
              checkSize(window.innerWidth)
       })
       checkSize(window.innerWidth)

       return breakpoint;

}