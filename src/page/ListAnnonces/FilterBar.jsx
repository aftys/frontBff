import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiHide, BiShow } from 'react-icons/bi'


export function FilterBar() {
  const initialstates = { fini: true, enCours: true, refused: true, nonTraite: true }
  const [filters, setFilters] = useState(initialstates);
  const [show, setShow] = useState(false);
  function setFilter(filter) {
    setFilters({ ...filters, [filter]: !filters[filter] });
  }
  const activelink = "w-full h-12 flex items-center justify-center rounded-lg text-white bg-red-300 shadow-md "
  const normalLink = "w-full h-12 flex items-center justify-center shadow-md bg-gray-100 rounded-lg border-gray-300 border-[1px]"
  return (
    <>
      <motion.div onClick={() => setShow(!show)} className="cursor-pointer bg-white w-[120px] h-[40px] rounded-lg fixed  lg:top-[70px] top-[130px] left-2 z-10 border-[1px] border-gray-300 drop-shadow-md flex flex-col items-center justify-start gap-1 px-2 py-1">
        <div className="flex justify-between items-start text-lg  gap-4  w-full">
          <p>filtrer</p>
          <button class="h-full" >
            {show ? <BiShow class="h-full" /> : <BiHide class="h-full" />}
          </button>

        </div>
      </motion.div>
      <AnimatePresence>

        {
          show && <motion.div
            animate={{ x: 0 }}
            initial={{ x: -140 }}
            exit={{ x: -140 }}
            transition={{ duration: 1, type: "spring" }}
            className="bg-white w-[120px] rounded-lg fixed text-md  lg:top-[123px] top-[183px] left-2 z-10 border-[1px] border-gray-300 drop-shadow-md flex flex-col p-2 gap-2 items-center justify-start"
          >
            <div className={filters.fini ? activelink : normalLink} onClick={() => { setFilter("fini") }}> Fini</div>
            <div className={filters.enCours ? activelink : normalLink} onClick={() => { setFilter("enCours") }}>en Cours</div>
            <div className={filters.refused ? activelink : normalLink} onClick={() => { setFilter("refused") }}>refusé</div>
            <div className={filters.nonTraite ? activelink : normalLink} onClick={() => { setFilter("nonTraite") }}>non Traité</div>
          </motion.div>
        }
      </AnimatePresence>
    </>
  )
}


