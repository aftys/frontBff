import { Divider } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { annonces } from '../../data'
import { Association } from "../Association";


const listOffres = [
    {
        id: 1,
        donateur:"Test",
        marchandise:[
            {
                name:"Tomatos",
                valeurCourant:34,
                valeurMax:45

            },
            {
                name:"Potatos",
                valeurCourant:11,
                valeurMax:34

            },
            {
                name:"Sardine",
                valeurCourant:66,
                valeurMax:100

            }
        ]
    },{
        id: 2,
        donateur:"Test",
        marchandise:[
            {
                name:"Tomatos",
                valeurCourant:34,
                valeurMax:45

            },
            {
                name:"Potatos",
                valeurCourant:11,
                valeurMax:34

            },
            {
                name:"Sardine",
                valeurCourant:66,
                valeurMax:100

            }
        ]
    },{
        id: 3,
        donateur:"Test",
        marchandise:[
            {
                name:"Tomatos",
                valeurCourant:34,
                valeurMax:45

            },
            {
                name:"Potatos",
                valeurCourant:11,
                valeurMax:34

            },
            {
                name:"Sardine",
                valeurCourant:66,
                valeurMax:100

            }
        ]
    },


]

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
    const { annonceId } = useParams()
    const [annonce, setAnnonce] = useState(annonces[1])
    //{ titre: "le caravane basma", status: true, association: { imageUrl: "", organisme: "hi hi" } }
    const [show, setShow] = useState(false)

    useEffect(() => {
        // axios.get(`http://localhost:8080/annonce/${annonceId}`).then((res)=>setAnnonce(res.data)).catch((err)=>console.log(err))
        // setAnnonce({titre:"le caravane basma",association:{imageUrl:""}})
    }, [])



    return (
        <>


            {show && (
                <>
                    <div className="fixed z-40 h-screen w-screen backdrop-blur-sm"></div>
                    <div className="fixed w-[300px] h-[200px]  top-[250px] bg-white drop-shadow-md border-2 border-gray-100 rounded-md m-auto z-50 p-5 text-lg text-gray-500 flex justify-center">
                        Voulez vous vraiment confirmer la publication de cette annonce?
                        <button onClick={() => { setAnnonce({ ...annonce, etat: false, }); setShow(false) }} className="bg-red-300 absolute bottom-10 right-10 h-8  w-16 text-center flex items-center p-4  drop-shadow-md rounded-full  text-white">Non</button>
                        <button onClick={() => { setAnnonce({ ...annonce, etat: "encours", }); setShow(false) }} className="bg-red-300 absolute bottom-10 left-10 h-8 w-16 text-center flex items-center p-4 drop-shadow-md rounded-full  text-white">Oui</button>

                    </div>
                </>
            )
            }
            <div
                className="relative w-full  h-60 max-w-screen-lg bg-white rounded-md drop-shadow-md  overflow-hidden flex flex-col justify-end "
                style={{ backgroundImage: `url(https://th.bing.com/th/id/R.eb1aee124dc9a459b58c9c866b7fe385?rik=xD0s2lH3Ua%2bZcA&pid=ImgRaw&r=0)`, backgroundSize: 'cover' }}
            >
                <div className="w-full h-full bg-gradient-to-t from-white " />
                <div className="w-full h-1/3 bg-white" />
                <div className="absolute w-full mx-auto bottom-5 text-3xl text-gray-500 font-bold flex items-centr justify-center">
                    {annonce.titre}
                </div>

            </div>
            <div className="relative w-full  max-w-screen-lg bg-white rounded-md drop-shadow-md  overfolw-hidden flex flex-col p-5 gap-3 ">
                <h3 className="text-lg  font-bold">Situation</h3>
                <p className="relative   bg-gray-100  text-gray-500 rounded-lg p-3 h-[50px]">
                    {/* {annonce.status ? "non traitée" : "en Cours"} */}
                    {annonce.etat === "encours" && "en Cours"}
                    {annonce.etat === "nontraite" && "non Traitée"}
                    {annonce.etat === "nontraite" && (
                        <>
                            <button onClick={() => { setShow(true) }} className="bg-red-300 absolute top-2 right-20 h-8 text-center flex items-center p-2 font-bold drop-shadow-md rounded-full  text-white">Approuver</button>
                            <button className="bg-red-300 absolute top-2 right-1  h-8 text-center flex items-center p-2 font-bold drop-shadow-md rounded-full  text-white">Rejeter</button>
                        </>)}
                </p>
                <h3 className="text-lg  font-bold">Description</h3>
                <p className="  bg-gray-100  text-gray-500 rounded-lg p-3">
                    {annonce.description}
                </p>
                <h3 className="text-lg  font-bold pt-2">Association</h3>
                <Link to={`/users/${annonce.association}`}> <p className=" bg-gray-100  text-gray-500 rounded-lg p-3 cursor-pointer">
                    {annonce.association}
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

            <div className="relative w-full    max-w-screen-lg bg-white rounded-md drop-shadow-md  overfolw-hidden flex flex-col p-5 gap-3 ">
                <h3 className="text-lg  font-bold">Offres</h3>
                {
                    listOffres.map((offre) => {
                        return (
                            <div className=" bg-gray-100  text-gray-500 rounded-lg p-3 flex flex-col items-center gap-4">
                                <div className="w-full flex items-center flex-start ">
                                    <h3 className="text-black w-1/4">Donateur</h3>
                                    <p className="text-start w-full bg-white p-2 rounded-lg">{offre.donateur}</p>
                                </div>
                                {offre.marchandise.map((mar)=>(<div className="w-full flex items-center ">
                                    <h3 className="text-black w-1/4">{mar.name}</h3>
                                    <ProgressBar valeurMax={mar.valeurMax} valeurCourant={mar.valeurCourant} />
                                </div>))}
                                

                            </div>
                        )
                    })
                }

            </div>
        </>
    );
}

