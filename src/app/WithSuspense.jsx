import { Suspense } from 'react'
import { motion } from 'framer-motion'
import Loading from '../shared/layouts/Loading'

export default function withSuspense(Component) {
       return (
              <>
                     <Suspense fallback={<Loading />}>
                            <motion.div
                                   className='relative'
                                   initial={{
                                          opacity: 0,
                                          top: "0.5rem"
                                   }}
                                   animate={{
                                          opacity: 1,
                                          top: 0
                                   }}
                                   transition={{
                                          ease: [0.13, 0.82, 0.28, 1],
                                          duration: 0.75
                                   }}
                            >
                                   <Component />
                            </motion.div>
                     </Suspense>
              </>
       )
}
