import { Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ProgressBar({ valeurCourant, valeurMax }) {
    const pourcentage = Math.round((valeurCourant / valeurMax) * 100);
    return (
        <div className="h-3 w-full bg-red-100 rounded-full overflow-hidden border-[1px] border-red-300">
            <div
                className="h-3 bg-red-300 rounded-full flex items-center justify-center text-[10px] text-white"
                style={{ width: `${pourcentage}%` }}
            >{valeurCourant}/{valeurMax} Kg</div>
        </div>
    );
}

export function Annonce() {
    return (
        <>
            {/* <ProgressBar valeurMax={45} valeurCourant={10} />
      <ProgressBar valeurMax={55} valeurCourant={10} />
      <ProgressBar valeurMax={35} valeurCourant={10} /> */}
            <div
                className="relative w-full  h-60 max-w-screen-lg bg-white rounded-md drop-shadow-md  overflow-hidden flex flex-col justify-end "
                style={{ backgroundImage: `url(https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F-0001%2F11%2F30%2Ffood-donation-2000.jpg)`, backgroundSize: 'cover' }}
            >
                <div className="w-full h-full bg-gradient-to-t from-white " />
                <div className="w-full h-1/3 bg-white" />
                <div className="absolute w-full mx-auto bottom-5 text-3xl text-gray-500 font-bold flex items-centr justify-center">
                    Le Caravane Basma pour les orphelins

                </div>

            </div>
            <div className="relative w-full  max-w-screen-lg bg-white rounded-md drop-shadow-md  overfolw-hidden flex flex-col items center p-5 gap-3 ">
            <h3 className="text-lg  font-bold">Situation</h3>
                <p className="  bg-gray-100  text-gray-500 rounded-lg p-3">
                   en Cours
                </p>
                <h3 className="text-lg  font-bold">Description</h3>
                <p className="  bg-gray-100  text-gray-500 rounded-lg p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    consequuntur deleniti, unde ab ut in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    consequuntur deleniti, unde ab ut in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    consequuntur deleniti, unde ab ut in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    consequuntur deleniti, unde ab ut in!
                </p>
                <h3 className="text-lg  font-bold pt-2">Association</h3>
               <Link to="/user/3"> <p className=" bg-gray-100  text-gray-500 rounded-lg p-3 cursor-pointer">
                    Association Mohammadia Food
                </p></Link>
                <h3 className="text-lg  font-bold pt-2">Goods</h3>
                <div className=" bg-gray-100  text-gray-500 rounded-lg p-3 flex flex-col items-center gap-4">
                    <div className="w-full flex items-center ">
                        <h3 className="text-black w-1/4">Tomates</h3>
                        <ProgressBar valeurMax={45} valeurCourant={30} />
                    </div>
                    <div className="w-full flex items-center">
                        <h3 className="text-black w-1/4">Potatos</h3>
                        <ProgressBar valeurMax={45} valeurCourant={10} />
                    </div>

                    <div className="w-full flex items-center">
                        <h3 className="text-black w-1/4">Fiches</h3>
                        <ProgressBar valeurMax={45} valeurCourant={40} />
                    </div>

                </div>
            </div>
        </>
    );
}
