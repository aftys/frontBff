import React, { useState } from "react";
// import { annonces } from '../../data';
import { AnnonceCard, SearchBar } from "../../components";
import { FilterBar } from "./FilterBar";
import axios from 'axios'







export function ListAnnonces({ lien }) {
  const [annonces, setAnnonces] = useState([]);
  React.useEffect(
    () => { axios.get("http://172.16.5.50:8080/annonces/get-all").then((response)=>{setAnnonces(response.data)}).catch(err=>{})},[]
  )
  

  return (
    <>
      <FilterBar />
      <SearchBar />
      <div className="rounded-xl drop-shadow-lg w-full m-auto flex flex-wrap  justify-center   gap-4 px-[10px]">
        {annonces.map((annonce, index) => (<AnnonceCard key={index} data={{...annonce,id:index}} />))}
      </div>
    </>
  );

}


