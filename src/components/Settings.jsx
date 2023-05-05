import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../context';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../data';
import { default as Button } from './Button';
import {motion} from 'framer-motion';

export const Settings = () => {
  const { setColor, setMode, currentMode, currentColor } = useStateContext();
  return (
    <motion.div
      className="nav-item z-50 absolute border-2 left-1 lg:top-[62px] top-[122px] bg-white  p-8 rounded-xl w-[384px]"
      animate={{ y: 0, opacity: 1, transition: {duration:0.5,type:"spring" } }} initial={{ y: +60, opacity: 0 }} exit={{ y: -60, opacity: 0 }}
    >

      <div className="dark:text-gray-200 items-center">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <p style={{ color: currentColor }} className="font-semibold text-lg dark:text-gray-200">Settings</p>
          </div>
          <Button icon={<MdOutlineCancel />} color={currentColor} bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
        </div>
      </div>
      <div className="border-b-2 border-gray-300 w-full" />
      <div className="flex-col border-t-1 border-color p-4 ml-4">
        <p className="font-semibold text-xl dark:text-gray-600">Theme Option</p>

        <div className="mt-4">
          <input
            type="radio"
            id="light"
            name="theme"
            value="Light"
            className="cursor-pointer text-black"
            onChange={setMode}
            checked={currentMode === 'Light'}
          />
          <label htmlFor="light" className="ml-2 text-md cursor-pointer dark:text-gray-400">
            Light
          </label>
        </div>
        <div className="mt-2">
          <input
            type="radio"
            id="dark"
            name="theme"
            value="Dark"
            onChange={setMode}
            className="cursor-pointer"
            checked={currentMode === 'Dark'}
          />

          <label htmlFor="dark" className="ml-2 text-md cursor-pointer dark:text-gray-400">
            Dark
          </label>
        </div>
      </div>
      <div className="border-b-2 border-gray-300 w-full" />
      <div className="p-4 relative border-t-1 border-color h-[100px] ml-4">
        <p className="font-semibold text-xl dark:text-gray-600">Theme Colors</p>
        <div className="flex gap-3 absolute left-0 bottom-1">
          {themeColors.map((item, index) => (
            <TooltipComponent key={index} content={item.name} position="TopCenter">
              <div
                className="relative mt-2 cursor-pointer flex gap-5 items-center"
                key={item.name}
              >
                <button
                  type="button"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  style={{ backgroundColor: item.color }}
                  onClick={() => setColor(item.color)}
                >
                  <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                </button>
              </div>
            </TooltipComponent>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


