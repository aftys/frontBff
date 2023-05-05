import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Message, SendMessage, ChatList } from '.'
import {over} from 'stompjs';
import SockJS from 'sockjs-client';


var stompClient=null;

export const ChatRoom = () => {
    const messages2 = [
        { text: "hi ", uid: 1, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 2, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 1, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 2, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 1, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 2, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 1, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 2, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 1, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 2, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 1, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 2, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 1, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 2, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 1, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 2, photoURL: "avatar.jpg" },

        { text: "hi ", uid: 1, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 2, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 1, photoURL: "avatar.jpg" },
        { text: "hi ", uid: 2, photoURL: "avatar.jpg" },

    ]

    const [messages, setMessages] = useState(messages2);
    const [count, setCount] = useState(1);
    const scroll = useRef();
    


    return (
        < >
            <div className=" fixed left-[12%] bg-gray-100 scrollbar-hide py-2  h-[90%] w-1/4   rounded-l-lg overflow-y-auto pl-2 flex flex-col justify-start ">
                <ChatList />
            </div>
               <main class="fixed left-[37%] bg-white  h-[90%]   w-1/2 pt-[30px] rounded-r-lg overflow-y-auto flex flex-col justify-start gap-5">
                {messages &&
                    messages.map((message) => (
                        <Message key={message.id} message={message} scroll={scroll} />
                    ))}
                <span ref={scroll} class="h-10 w-10 mb-[100px]"></span>
            </main>
            <SendMessage setMessages={setMessages} messages={messages} count={count} setCount={setCount} />

        </>
    );
};


