export function DetailsPage({donateur}) {
    return (
        <div className="relative w-full  max-w-screen-lg bg-white rounded-md drop-shadow-md  overfolw-hidden flex flex-col items center p-3 gap-3 ">
            <h3 className="text-lg">Description</h3>
            <p className="  bg-gray-100  text-gray-500 rounded-lg p-3">{donateur.description}
            </p>
            <h3 className="text-lg pt-2">Responsbale</h3>
            <p className=" bg-gray-100  text-gray-500 rounded-lg p-3">
            {donateur.prenom} {donateur.nom}
            </p>
            <h3 className="text-lg pt-2">Informations</h3>
            <div className=" bg-gray-100  text-gray-500 rounded-lg p-3 flex flex-col items-center gap-4">
                <div className="w-full flex items-center ">
                    <h3 className="text-black w-1/4">Email</h3>
                    <h3>{donateur.email}</h3>
                </div>
                <div className="w-full flex items-center">
                    <h3 className="text-black w-1/4">Telephone</h3>
                    <h3>{donateur.telephone}</h3>
                </div>
                
                <div className="w-full flex items-center">
                    <h3 className="text-black w-1/4">Localisation</h3>
                    <h3>{donateur.localisation}</h3>
                </div>
                
            </div>
        </div>
    )
}