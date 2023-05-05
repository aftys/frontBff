import React from 'react';
import { motion } from 'framer-motion';
import { useStateContext } from '../context';
import { userProfileData } from '../data';
import { MdOutlineCancel } from 'react-icons/md';
import { default as Button } from './Button'
export const Profile = () => {

  const { currentColor } = useStateContext();
  return (
    <motion.div
      className="nav-item z-50 absolute border-2 left-1 lg:top-[62px] top-[122px] bg-white  p-6 rounded-xl "
      animate={{ y: 0, opacity: 1, transition: { default: { duration: 1, ease: [0, 0.71, 0.2, 1.01] } } }} initial={{ y: +60, opacity: 0 }} exit={{ y: -60, opacity: 0 }}
    >
      <div className="flex justify-between items-center">
        <p style={{ color: currentColor }} className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color={currentColor}
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={"avatar.jpg"}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-600">Oussama AFTYS </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> oussamaaftys@gmail.com </p>
        </div>
      </div>
      <div>
      <div className="border-b-2 border-gray-300 w-full" />
        {userProfileData.map((item, index) => (
          <>
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-[rgba(0,0,0,0.1)] cursor-pointer ">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-600 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
          <div className="border-b-2 border-gray-300 w-full" />
          </>
        ))}
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </motion.div >
  );
};


