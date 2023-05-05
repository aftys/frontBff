import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStateContext } from '../../context';

const auth = { uid: 1, image: "avatar.jpg" };

export const Message = ({ message, scroll }) => {
  const { text, uid, photoURL } = message;
  const { currentColor } = useStateContext();
  const sent = (uid === auth.uid);
  useEffect(() => { scroll.current.scrollIntoView({ behavior: 'smooth' }) }, []);

  return (
    <div 
      className={`flex items-start  relative justify-start gap-3  px-4 ${sent ? 'flex-row-reverse' : ''}`} >
      {/* <img src={photoURL || 'anonymos.jpeg'} className="w-10 h-10 rounded-full" /> */}
      <motion.div

        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          },
          scale: {
            type: "easeIn",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
        style={{ backgroundColor:sent ? currentColor : "gray",maxWidth: "200px",wordWrap:"break-word"}}
        className={!sent ?
          ` leading-6 text-white ma px-4 flex justify-center items-center rounded-r-full rounded-bl-full ` :
          ` leading-6 text-white px-4 flex justify-center items-center rounded-l-full rounded-br-full ml-4`
        }>
        {text}
      </motion.div>
    </div>
  )
};
