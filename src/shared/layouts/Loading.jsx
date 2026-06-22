import { useEffect, useRef, useState } from 'react'
import Logo from "../components/Logo"
import { motion } from "framer-motion"

export default function Loading() {

       const [time, setTime] = useState(0);
       let timeout = null;
       useEffect(() => {
              timeout = setInterval(() => {
                     setTime(prev => prev + 1)
              }, 500);

              return () => clearInterval(timeout);
       }, [])

       const spin1 = useRef()
       const spin2 = useRef()
       const spin3 = useRef()

       useEffect(() => {
              switch (time) {
                     case 0: {
                            // spin1
                            spin1.current.style.top = "3rem"
                            spin1.current.style.left = "0"
                            // spin3
                            spin3.current.style.top = "-3rem"
                            spin3.current.style.left = "5rem"
                            break;
                     }
                     case 1: {
                            // spin1
                            spin1.current.style.top = "3rem"
                            spin1.current.style.left = "2.5rem"
                            // spin3
                            spin3.current.style.top = "-3rem"
                            spin3.current.style.left = "0rem"
                            break;
                     }
                     case 2: {
                            // spin1
                            spin1.current.style.top = "0rem"
                            spin1.current.style.left = "2.5rem"
                            // spin3
                            spin3.current.style.top = "0rem"
                            spin3.current.style.left = "0rem"
                            // spin2
                            spin2.current.style.top = "0rem"
                            spin2.current.style.left = "5rem"
                            break;
                     }
                     case 3: {
                            // spin3
                            spin3.current.style.top = "3rem"
                            spin3.current.style.left = "0rem"
                            // spin2
                            spin2.current.style.top = "-3rem"
                            spin2.current.style.left = "5rem"
                            break;
                     }
                     case 4: {
                            // spin2
                            spin2.current.style.top = "-3rem"
                            spin2.current.style.left = "2.5rem"
                            // spin3
                            spin3.current.style.top = "3rem"
                            spin3.current.style.left = "5rem"
                            break;
                     }
                     case 5: {
                            // spin1
                            spin1.current.style.top = "0rem"
                            spin1.current.style.left = "0rem"
                            // spin3
                            spin3.current.style.top = "0rem"
                            spin3.current.style.left = "5rem"
                            // spin2
                            spin2.current.style.top = "0rem"
                            spin2.current.style.left = "2.5rem"
                            break
                     }
                     case 6: {
                            setTime(0)
                            break
                     }
              }
       }, [time])

       return (
              <motion.div
                     initial={{
                            opacity: 0,
                            y: -10
                     }}
                     animate={{
                            opacity: 1,
                            y: 0
                     }}
                     transition={{
                            duration: 0.35
                     }}
                     className='fixed top-0 left-0 w-full h-dvh flex flex-col justify-center items-center '
              >
                     <Logo scale={2} className='mb-16' />
                     <div className='relative w-28.5 h-8' >
                            <div className='size-8 bg-box_primary rounded-full absolute top-0 left-0 transition-all ease-out duration-500' ref={spin1}></div>
                            <div className='size-8 bg-box_primary rounded-full absolute top-0 left-10 transition-all ease-out duration-500' ref={spin2}></div>
                            <div className='size-8 bg-box_primary rounded-full absolute top-0 left-20 transition-all ease-out duration-500' ref={spin3}></div>
                     </div>
              </motion.div>
       )
}
