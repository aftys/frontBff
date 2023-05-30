import React, { useState } from "react";
import { annonces as test } from '../../data';
import {  SearchBar } from "../../components";
import { FilterBar } from "./FilterBar";
import { AnnonceCard } from "./AnnonceCard";
import axios from 'axios'







export function ListAnnonces({ lien }) {
  const [annonces, setAnnonces] = useState([]);
  React.useEffect(
    () => { axios.get("http://localhost:8080/annonces/").then((response)=>{setAnnonces(response.data)}).catch(err=>{}) ;setAnnonces(test)},[]
  )
  

  return (
    <>
      <FilterBar />
      <SearchBar />
      <div className="rounded-xl drop-shadow-lg w-full m-auto flex flex-wrap  justify-center   gap-4 px-[10px]">
        {annonces.map((annonce, index) => (<AnnonceCard key={index} annonce={annonce} />))}
      </div>
    </>
  );

}


