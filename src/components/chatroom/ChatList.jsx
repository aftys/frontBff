import React from 'react'
import { chatData } from '../../data'
import { NavLink } from 'react-router-dom'
import avatar from '../../data/avatar.jpg'

export function ChatList() {
    const activeLink="flex items-center gap-5  border-gray-300 border-y-[1px] border-l-[1px] p-3 leading-8 cursor-pointer hover:bg-[rgba(0,0,0,0.1)] w-full bg-white rounded-l-3xl "
    const normalLink="flex items-center gap-5  border-gray-300 border-r-[1px] p-3 leading-8 cursor-pointer hover:bg-[rgba(0,0,0,0.1)] w-full  rounded-l-3xl "
    return (
            <>
                {/* <div className="border-b-2 border-gray-300 w-full" /> */}
                {chatData?.map((item, index) => (
                    <>
                        <NavLink
                            
                        to={`/chatroom/${index}`} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                            
                            <div className="relative">
                                <img
                                    className="rounded-full h-10 w-10"
                                    src={item.image}
                                    alt={item.message}
                                />
                                <span
                                    style={{ background: item.dotColor }}
                                    className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
                                />
                            </div>
                            <div>
                                <p className="font-semibold dark:text-gray-600 ">{item.message}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p>
                            </div>
                        </NavLink>
                        {/* <div className="border-b-2 border-gray-300 w-full" /> */}
                    </>
                ))}
                {chatData?.map((item, index) => (
                    <>
                        <NavLink
                            
                        to={`/chatroom/${index+12}`} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                            
                            <div className="relative">
                                <img
                                    className="rounded-full h-10 w-10"
                                    src={item.image}
                                    alt={item.message}
                                />
                                <span
                                    style={{ background: item.dotColor }}
                                    className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
                                />
                            </div>
                            <div>
                                <p className="font-semibold dark:text-gray-600 ">{item.message}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p>
                            </div>
                        </NavLink>
                        {/* <div className="border-b-2 border-gray-300 w-full" /> */}
                    </>
                ))}
                {chatData?.map((item, index) => (
                    <>
                        <NavLink
                            
                        to={`/chatroom/${index+6}`} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                            
                            <div className="relative">
                                <img
                                    className="rounded-full h-10 w-10"
                                    src={item.image}
                                    alt={item.message}
                                />
                                <span
                                    style={{ background: item.dotColor }}
                                    className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
                                />
                            </div>
                            <div>
                                <p className="font-semibold dark:text-gray-600 ">{item.message}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p>
                            </div>
                        </NavLink>
                        {/* <div className="border-b-2 border-gray-300 w-full" /> */}
                    </>
                ))}
            </>
    )
}