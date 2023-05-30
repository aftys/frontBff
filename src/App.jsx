import './App.css'
import { Navbar, Sidebar } from './components'
import { useStateContext } from './context'
import { AnimatePresence } from 'framer-motion'
import { registerLicense } from '@syncfusion/ej2-base';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChatRoom } from './components'
import { ListAnnonces ,Association,Users,Annonce,Donateur} from './page'
import { useEffect,useState } from 'react';
import {syncfusionLiscence} from "./data"

registerLicense(syncfusionLiscence)






export default function App() {
  const { setMode } = useStateContext()

  const mode = localStorage.getItem('mode')
  useEffect(() => { setMode(mode) }, [])
  const { activeMenu } = useStateContext()
  return (
    <div className="min-h-screen w-screen bg-gray-200 flex flex-col lg:pt-[70px] pt-[130px] pb-[60px] items-center justify-start gap-4">
      <BrowserRouter>
        <Navbar />
        <AnimatePresence>{activeMenu && <Sidebar />}</AnimatePresence>
        <Routes>
        <Route path="/chatroom/:id"  element={<ChatRoom />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/users/:id" element={<Association />} />
          <Route path="/annonce" element={<ListAnnonces />} />
          <Route path="/annonce/:annonceId" element={<Annonce />} />
          <Route path="/" element={<ListAnnonces />} />
          <Route path="/users" element={<Users />} />
          <Route path="/donateur" element={<Donateur />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
