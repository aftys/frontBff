import React from 'react';
import { motion } from 'framer-motion'
import { useStateContext } from '../context';


const useClickOutside = (handler) => {
  let domNode = React.useRef();

  React.useEffect(() => {
    let maybeHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};


export const Sidebar = () => {
  const { setActiveMenu } = useStateContext()
  const domNode = useClickOutside(() => {
    setActiveMenu(false);
  });
  const activeLink = "bg-[rgba(229,115,115,0.1)] w-[90%] h-16  rounded-r-full border-[1px] border-red-300 hover:bg-red-100 drop-shadow-md text-center text-red-500 flex items-center pl-6 gap-3"
  const normalLink = "bg-white w-[90%] h-16  rounded-r-full border-[1px] border-gray-300 hover:bg-[rgba(0,0,0,0.1)] drop-shadow-md text-center text-black flex items-center pl-6 gap-3"
  return (
    <motion.div
      animate={{ x: 0, transition: { duration: .3, type: "spring" } }}
      initial={{ x: -300 }}
      exit={{ x: -300 }}
      ref={domNode}

      className="fixed overflow-y-scroll top-0 z-30 min-h-screen w-[300px] bg-white drop-shadow-lg left-0 flex flex-col justify-center items-start text-white py-6 gap-5border-r-[1px] border-gray-300"
    >
      
    </motion.div>
  );
};