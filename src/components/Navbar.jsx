import { useStateContext } from '../context';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { RiNotification3Line } from 'react-icons/ri';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom'
import { Settings, Profile, Notification, ChatModal } from '.';



const activeLink = "border-b-4 border-red-300 h-full text-red-300 w-1/3 text-center flex justify-center items-end pb-2 bg-white hover:bg-[rgba(252,165,165,0.1)]"
const normalLink = "border-b-4  border-transparent h-full w-1/3 text-center flex justify-center items-end pb-2 hover:bg-[rgba(128,128,128,0.1)]"

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
      <motion.button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full p-3 bg-gray-200"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </motion.button>
    </TooltipComponent>
  );

const MyLink = ({ lien, id, name }) => {
    return (
        <NavLink to={`/${lien}`} key={id} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            {name}
        </NavLink>
    )
}



export const Navbar = () => {
    const currentColor = "black"
    const { activeMenu, handleClick, setActiveMenu, isClicked } = useStateContext()
    function handleActiveMenu() { setActiveMenu(!activeMenu) }
    return (
        <div className="fixed  z-20  top-0 left-0   bg-white  drop-shadow-md  flex justify-between items-start  lg:h-[60px] h-[120px] w-full px-6 ">
            <div>
                
                <div className="absolute left-0 right-0 bottom-0 mx-auto    text-lg flex justify-around w-[400px] h-[60px] items-center">
                    <MyLink lien={"annonce"} name={"Annoncement"} id={1} />
                    <MyLink lien={"users"} name={"Users"} id={3}  />
                    <MyLink lien={"chatroom"} name={"Chats"} id={2}  />
                </div>

                <div className="absolute left-6  flex h-[60px]    justify-between items-center w-[250px]">
                    <TooltipComponent content={"profile"} position="BottomCenter">
                        <img onClick={() => { handleClick('profile') }} className={`rounded-full w-12 h-12 border-2 border-[${currentColor}]`} src={"https://th.bing.com/th/id/OIP.B4Y5_MhDT7ZcYEEaLDi-pgHaLH?pid=ImgDet&rs=1"} alt="user-profile" />
                    </TooltipComponent>
                    <NavButton customFunc={() => { handleClick('chat') }} title="Chat" color={currentColor} icon={<BsChatLeft className='hover:fill-red-300' />} />
                    <NavButton customFunc={() => { handleClick('notification') }} title="Notification" color={currentColor} icon={<RiNotification3Line className='hover:fill-red-300' />} />
                    <NavButton customFunc={() => { handleClick('settings') }} title="Settings" color={currentColor} icon={<FiSettings className='hover:fill-red-300' />} />
                </div>
                <motion.div className="absolute h-full right-6  top-2">
                    <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu className='hover:fill-red-300' />} />
                </motion.div>
                <AnimatePresence>
                    {isClicked.settings && <Settings />}
                    {isClicked.chat && <ChatModal />}
                    {isClicked.notification && <Notification />}
                    {isClicked.profile && <Profile />}
                </AnimatePresence>
            </div>
        </div>
    );
};

