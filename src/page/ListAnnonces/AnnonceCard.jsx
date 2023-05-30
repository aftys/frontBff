import React from 'react'
import { Link } from 'react-router-dom'

export function AnnonceCard({annonce}) {
    return (
        <article class="rounded-xl max-w-[400px] border border-gray-300 bg-white p-4">
            <div class="flex items-center gap-4">
                <img
                    alt="Developer"
                    src={annonce.imageUrl}
                    class="h-16 w-16 rounded-full object-cover border border-gray-500"
                />
                <div>
                    <Link to={`/annonce/${annonce.titre}`}><h3 class="text-lg font-medium text-black hover:underline">{annonce.titre}</h3></Link>
                    <Link to={`/users/${annonce.association}`}><h2 href="#" class="p-1 leading-none text-xs font-medium text-gray-500 hover:underline">{annonce.association}</h2></Link>
                </div>
            </div>
            <ul class="mt-4 space-y-2">
                <li>
                    <a
                        href="#"
                        class="block h-full rounded-lg  bg-gray-100  border-[1px] shadow-md border-gray-300 p-4 hover:border-black"
                    >
                        <strong class="font-medium text-gray-400">Details</strong>

                        <p class="mt-1 text-xs font-medium text-gray-500">
                            {annonce.description}
                        </p>
                    </a>
                </li>
            </ul>
        </article>
    )
}