import { useState } from "react"
import { users } from "../../data"
import { OffrePage } from "./Offres"
import { ChatPage } from "./Chat"
import { DetailsPage } from "./Details"
import axios from "axios"

export function Donateur() {

    const initialStates = { offres: false, details: false, chat: false }
    const [navlinks, setnavlinks] = useState({ offres: true, details: false, chat: false });
    const [association, setAssociation] = useState(users[8]);
    function setCurrentNavlinks(link) { setnavlinks({ ...initialStates, [link]: !navlinks[link] }) }
    return (
        <div class="min-h-screen w-screen flex  flex-col items-center relative ">

            <div class="h-[450px] relative w-full flex  flex-col items-center justify-end ">
                <div class="absolute  w-full h-1/2  top-0 bg-gradient-to-t from-white to-gray-200" />
                <div class="absolute w-full h-1/2  bottom-0 bg-white" />
                <div
                    className="w-full absolute  top-[-10px] max-w-screen-lg h-[300px] rounded-b-md drop-shadow-md overflow-hidden  flex items-end justify-center pb-16"
                    style={{ backgroundImage: `url(https://th.bing.com/th/id/R.9a22fe7b349c7bba62fbf0586da04feb?rik=93rfMnXjO%2bVjKA&pid=ImgRaw&r=0)`, backgroundSize: 'cover' }}
                />
                <div className="w-full absolute   top-[300px] max-w-screen-lg rounded-md drop-shadow-md overflow-hidden  flex  flex-col items-center justify-start gap-2">
                    <h1 className="text-3xl font-bold">{association.organisme}</h1>
                    <h2 className="text-gray-500 text-center ">{association.description}</h2>
                </div>

            </div>
            <div className="sticky  z-10 bg-white lg:top-[58px] top-[118px] w-[100%]  flex justify-center  h-[50px] items-center shadow-bottom mb-6">
                <div className="h-full max-w-screen-lg flex w-full  border-t-[2px] border-gray-200   text-lg">
                    <div onClick={() => setCurrentNavlinks("offres")} className={`border-b-4  h-full  w-[100px] text-center flex justify-center items-end pb-2 bg-white ${navlinks.offres ? ("border-red-300 text-red-300 hover:bg-[rgba(252,165,165,0.1)]") : ("border-transparent hover:bg-[rgba(128,128,128,0.1)]")}`}>Offres</div>
                    <div onClick={() => setCurrentNavlinks("details")} className={`border-b-4  h-full  w-[100px] text-center flex justify-center items-end pb-2 bg-white ${navlinks.details ? ("border-red-300 text-red-300 hover:bg-[rgba(252,165,165,0.1)]") : ("border-transparent hover:bg-[rgba(128,128,128,0.1)]")}`}>Details</div>
                    <div onClick={() => setCurrentNavlinks("chat")} className={`border-b-4  h-full  w-[100px] text-center flex justify-center items-end pb-2 bg-white ${navlinks.chat ? ("border-red-300 text-red-300 hover:bg-[rgba(252,165,165,0.1)]") : ("border-transparent hover:bg-[rgba(128,128,128,0.1)]")}`}>Chat</div>
                </div>
            </div>
            {navlinks.offres && <OffrePage />}
            {navlinks.details && <DetailsPage donateur={association} />}
            {navlinks.chat && <ChatPage />}

        </div>
    )
}