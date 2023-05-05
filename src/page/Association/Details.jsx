export function DetailsPage() {
    return (
        <div className="relative w-full  max-w-screen-lg bg-white rounded-md drop-shadow-md  overfolw-hidden flex flex-col items center p-3 gap-3 ">
            <h3 className="text-lg">Description</h3>
            <p className="  bg-gray-100  text-gray-500 rounded-lg p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                consequuntur deleniti, unde ab ut in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                consequuntur deleniti, unde ab ut in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                consequuntur deleniti, unde ab ut in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                consequuntur deleniti, unde ab ut in!
            </p>
            <h3 className="text-lg pt-2">Responsbale</h3>
            <p className=" bg-gray-100  text-gray-500 rounded-lg p-3">
                Oussama Aftys
            </p>
            <h3 className="text-lg pt-2">Informations</h3>
            <div className=" bg-gray-100  text-gray-500 rounded-lg p-3 flex flex-col items-center gap-4">
                <div className="w-full flex items-center ">
                    <h3 className="text-black w-1/4">Email</h3>
                    <h3>oussamaaftys@gmail</h3>
                </div>
                <div className="w-full flex items-center">
                    <h3 className="text-black w-1/4">Telephone</h3>
                    <h3>0653236352</h3>
                </div>
                
                <div className="w-full flex items-center">
                    <h3 className="text-black w-1/4">Localisation</h3>
                    <h3>route el JADIDA 7KM, CasaBlanca morocco</h3>
                </div>
                
            </div>
        </div>
    )
}