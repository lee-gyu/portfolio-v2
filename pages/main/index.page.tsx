import { NextPage } from 'next/types'

import { motion } from "framer-motion"

import * as scss from "./_main.module.scss"

export const MainPage: NextPage = () => {
  return <>
    <div className={scss['main-wrapper']}>
      <motion.div className={scss['profile-card']}
        whileHover={
          {
            y: "-4px"
          }
        }
        whileTap={
          {
            scale: 1.2
          }
        }>
        <div>
          <h2 className='font-semibold'>Lee Gyu Cheol</h2>
        </div>
      </motion.div>
    </div>
  </>
}