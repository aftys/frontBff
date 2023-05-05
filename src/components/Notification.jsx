import React from 'react';
import { motion } from 'framer-motion';
import { useStateContext } from '../context';
import Button from './Button';
import {MdOutlineCancel} from 'react-icons/md'
import { chatData } from '../data';






export const Notification = () => {
  const { currentColor } = useStateContext()
  return (
    <motion.div
      className="nav-item z-50 absolute border-2 left-1 lg:top-[62px] top-[122px] bg-white  p-8 rounded-xl "
      animate={{ y: 0, opacity: 1, transition: { default: { duration: 1, ease: [0, 0.71, 0.2, 1.01] } } }} initial={{ y: +60, opacity: 0 }} exit={{ y: -60, opacity: 0 }}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p style={{ color: currentColor }} className="font-semibold text-lg dark:text-gray-200">Messages</p>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color={ currentColor }
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="mt-5  w-full flex flex-col items-start justify-around">
        <div className="border-b-2 border-gray-300 w-full" />
        {chatData?.map((item, index) => (
          <>
            <div key={index} className="flex items-center gap-5  p-3 leading-8 cursor-pointer hover:bg-[rgba(0,0,0,0.1)] w-full">
              <div className="relative">
                <img
                  className="rounded-full h-10 w-10"
                  src={item.image}
                  alt={item.message}
                />
                <span
                  style={{ background: item.dotColor }}
                  className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
                />
              </div>
              <div>
                <p className="font-semibold dark:text-gray-600 ">{item.message}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p>
              </div>
            </div>
            <div className="border-b-2 border-gray-300 w-full" />
          </>
        ))}


      </div>

    </motion.div>
  );
};


