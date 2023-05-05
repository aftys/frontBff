import { useState } from "react"
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"
import {annonces} from '../../data'

function AnnonceCard(props) {
    const {id,organisme,description}=props.data;

    return (
        <article class=" drop-shadow-md rounded-xl  border border-gray-300 bg-gray-100 p-4">
            <div class="flex items-center gap-4">

                <div>
                    <h3 class="text-lg font-medium text-black hover:underline">Association Mohamadia Food</h3>
                </div>
            </div>
            <ul class="mt-4 space-  y-2">
                <li>
                    <a
                        href="#"
                        class="block h-full rounded-lg  bg-white  border-[1px] shadow-md border-gray-300 p-4 hover:border-black"
                    >
                        <strong class="font-medium text-gray-400">Details</strong>

                        <p class="mt-1 text-xs font-medium text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                            consequuntur deleniti, unde ab ut in!
                        </p>
                    </a>
                </li>
            </ul>
        </article>
    )
}



function AnnonceNav({ setCurrentAssociationType, association }) {
    return (

        <nav className="absolute top-0 bg-gray-100 h-12 w-full flex pt-1 px-1  relative rounded-t-md">
            <motion.div onClick={() => setCurrentAssociationType("enCours")} className={`h-full w-1/4  ${association.enCours && "bg-white text-red-300 rounded-t-md"}  flex items-center justify-center`}>Current</motion.div>
            <motion.div onClick={() => setCurrentAssociationType("nonTraite")} className={`h-full w-1/4  ${association.nonTraite && "bg-white  text-red-300 rounded-t-md"}  flex items-center justify-center`}> Non Traited</motion.div>
            <motion.div onClick={() => setCurrentAssociationType("fini")} className={`h-full w-1/4  ${association.fini && "bg-white  text-red-300 rounded-t-md"}  flex items-center justify-center`}>Finished</motion.div>
            <motion.div onClick={() => setCurrentAssociationType("refuse")} className={`h-full w-1/4  ${association.refuse && "bg-white  text-red-300 rounded-t-md"}  flex items-center justify-center`}>Refused</motion.div>
        </nav>
    )

}


export function AnnoncePage() {
    const initialStates = { refuse: false, enCours: false, fini: false, nonTraite: false }
    const [association, setAssociation] = useState({ refuse: false, enCours: true, fini: false, nonTraite: false });
    function setCurrentAssociationType(link) {
        setAssociation({ ...initialStates, [link]: !association[link] })

    }
    return (

        <div className="relative w-full  max-w-screen-lg bg-white rounded-md drop-shadow-md  overfolw-hidden ">
            <AnnonceNav setCurrentAssociationType={setCurrentAssociationType} association={association} />
            <div className=" grid grid-cols-2  gap-3 p-4">
                {annonces.map((annonce,index)=>(<AnnonceCard data={{...annonce,id:index}}/>))}
            </div>
        </div>
    )
}