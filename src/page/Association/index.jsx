import { useState } from "react"
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"

import { AnnoncePage } from "./Annonces"
import { ChatPage } from "./Chat"
import { DetailsPage } from "./Details"






export function Association() {
    const initialStates = { annonces: false, details: false, chat: false }
    const [navlinks, setnavlinks] = useState({ annonces: true, details: false, chat: false });
    function setCurrentNavlinks(link) {
        setnavlinks({ ...initialStates, [link]: !navlinks[link] })

    }

    return (
        <>

            <div class="h-[440px] relative w-full flex items-center justify-center shadow-bottom">
                <div class="absolute  w-full h-1/2  top-0 bg-gradient-to-t from-white to-gray-200" />
                <div class="absolute w-full h-1/2  bottom-0 bg-white" />
                <div
                    className="w-full absolute  top-[-10px] max-w-screen-lg h-[300px] rounded-b-md drop-shadow-md overflow-hidden  flex items-end justify-center pb-16"
                    style={{ backgroundImage: `url(https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F-0001%2F11%2F30%2Ffood-donation-2000.jpg)`, backgroundSize: 'cover' }}
                />
                <div className="w-full absolute   top-[300px] max-w-screen-lg rounded-md drop-shadow-md overflow-hidden  flex  flex-col items-center justify-start gap-2">
                    <h1 className="text-3xl font-bold">Association Grand Ismailia</h1>
                    <h2 className="text-gray-500 ">une association pour le collecte des dons alimentaires pour les orphelins</h2>
                </div>
                <div id={"fixedHeader"} className="absolute left-0 right-0 bottom-0 mx-auto  border-t-[2px] border-gray-200   text-lg flex justify-start w-full max-w-screen-lg h-[50px] items-center">
                    <div onClick={() => setCurrentNavlinks("annonces")} className={`border-b-4  h-full  w-[100px] text-center flex justify-center items-end pb-2 bg-white ${navlinks.annonces ? ("border-red-300 text-red-300 hover:bg-[rgba(252,165,165,0.1)]") : ("border-transparent hover:bg-[rgba(128,128,128,0.1)]")}`}>Annonces</div>
                    <div onClick={() => setCurrentNavlinks("details")} className={`border-b-4  h-full  w-[100px] text-center flex justify-center items-end pb-2 bg-white ${navlinks.details ? ("border-red-300 text-red-300 hover:bg-[rgba(252,165,165,0.1)]") : ("border-transparent hover:bg-[rgba(128,128,128,0.1)]")}`}>Details</div>
                    <div onClick={() => setCurrentNavlinks("chat")} className={`border-b-4  h-full  w-[100px] text-center flex justify-center items-end pb-2 bg-white ${navlinks.chat ? ("border-red-300 text-red-300 hover:bg-[rgba(252,165,165,0.1)]") : ("border-transparent hover:bg-[rgba(128,128,128,0.1)]")}`}>Chat</div>
                </div>
            </div>
            {navlinks.annonces && <AnnoncePage />}
            {navlinks.details && <DetailsPage />}
            {navlinks.chat && <ChatPage />}
        </>
    )
}