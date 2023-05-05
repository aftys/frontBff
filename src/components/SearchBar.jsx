import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from 'react-icons/fa';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


export const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [show, setShow] = useState(false)

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (


    <div className="fixed right-20 h-11 top-2  z-40  flex  column-reverse items-center bg-gray-200 rounded-full px-4 py-2">
      <AnimatePresence>
        {show && <motion.input
          initial={{ width: 0 }}
          animate={{ width: "140px" }}
          transition={{ type: "easeIn" }}
          exit={{ width: 0 }}
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
          className="flex-grow mr-2  w-[140px] bg-transparent outline-none"
        />}
      </AnimatePresence>
      <TooltipComponent content="Click to open" position="BottomCenter" >
        <FaSearch onClick={() => setShow(!show)} className="text-gray-500 " />
      </TooltipComponent>
    </div>
  );
};