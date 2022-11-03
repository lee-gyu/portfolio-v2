import { PropsWithChildren } from 'react';
import { motion } from "framer-motion"

import * as scss from "./_app.module.scss";


export const App: React.FC<PropsWithChildren> = ({ children }) => {

  return <div className={scss.app}>
    <header className={scss['app-header']}>
      <div className='m-4'>
        <motion.h1 className='font-bold text-2xl overflow-hidden'
          animate={{
            width: "16ch",
          }}

        >Lee Gyu Cheol</motion.h1>
      </div>
    </header>
    <main className={scss['app-main']}>
      {children}
    </main>
  </div>
}