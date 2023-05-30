import { useState } from "react"
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"
// import {offres as test} from '../../data'
import { useEffect } from "react"
import axios from "axios"

function OffreCard({offre}) {

    return (
        <article  class=" drop-shadow-md rounded-xl  border border-gray-300 bg-gray-100 p-4">
            <div class="flex items-center gap-4">

                <Link to={`/offre/${1}`}><div>
                    <h3 class="text-lg font-medium text-black hover:underline">{offre.titre}</h3>
                </div></Link>
            </div>
            <ul class="mt-4 space-  y-2">
                <li>
                    <a
                        href="#"
                        class="block h-full rounded-lg  bg-white  border-[1px] shadow-md border-gray-300 p-4 hover:border-black"
                    >
                        <strong class="font-medium text-gray-400">Details</strong>

                        <p class="mt-1 text-xs font-medium text-gray-500">
                           {offre.description}
                        </p>
                    </a>
                </li>
            </ul>
        </article>
    )
}



function OffreNav({ setCurrentAssociationType, association }) {
    return (

        <nav className="absolute top-0 bg-gray-100 h-12 w-full flex pt-1 px-1  relative rounded-t-md">
            <motion.div onClick={() => setCurrentAssociationType("enCours")} className={`h-full w-1/4  ${association.enCours && "bg-white text-red-300 rounded-t-md"}  flex items-center justify-center`}>Current</motion.div>
            <motion.div onClick={() => setCurrentAssociationType("nonTraite")} className={`h-full w-1/4  ${association.nonTraite && "bg-white  text-red-300 rounded-t-md"}  flex items-center justify-center`}> Non Traited</motion.div>
            <motion.div onClick={() => setCurrentAssociationType("fini")} className={`h-full w-1/4  ${association.fini && "bg-white  text-red-300 rounded-t-md"}  flex items-center justify-center`}>Finished</motion.div>
            <motion.div onClick={() => setCurrentAssociationType("refuse")} className={`h-full w-1/4  ${association.refuse && "bg-white  text-red-300 rounded-t-md"}  flex items-center justify-center`}>Refused</motion.div>
        </nav>
    )

}


export function OffrePage() {
    const initialStates = { refuse: false, enCours: false, fini: false, nonTraite: false }
    const [association, setAssociation] = useState({ refuse: false, enCours: true, fini: false, nonTraite: false });
    // const [offres, setOffres] = useState(test);
    function setCurrentAssociationType(link) {
        setAssociation({ ...initialStates, [link]: !association[link] })

    }
    useEffect(
        ()=>{
            // axios.get(`http://localhost:8080/offres/association/${2}`).then(res=>setOffres(res.data)).catch(err=>console.log(err))
        },[]
    )
    return (

        <div className="relative w-full  max-w-screen-lg bg-white rounded-md drop-shadow-md  overfolw-hidden ">
            <OffreNav setCurrentAssociationType={setCurrentAssociationType} association={association} />
            <div className=" grid grid-cols-2  gap-3 p-4">
                {/* {offres.map((offre,index)=>(<OffreCard key={index} offre={offre}/>))} */}
            </div>
        </div>
    )
}