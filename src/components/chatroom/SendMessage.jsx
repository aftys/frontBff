import React,{ useState }  from 'react';

export const SendMessage = ({setMessages,messages,count,setCount}) => {
    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert('Please enter a valid message')
            return
        }
        // const { uid, displayName,photoURL } =
        // await addDoc(collection(db, 'messages'), {
        //     text: input,
        //     name: displayName,
        //     uid,photoURL,
        //     timestamp: serverTimestamp()
        // })

        const messages3=messages;
        const messaget ={ text:input, uid:1, photoURL:"avatar.jpg" }
        messages3.push(messaget);
        setMessages(messages3);
        setCount(count+1);
        setInput('');
        localStorage.setItem('messages',messages);
    }

    return (
        <form  className="fixed bottom-2 justify-around left-[37%] max-w-screen-md  w-full flex items-center text-lg " onSubmit={sendMessage} >
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type='text'
                placeholder='Message'
                className='w-5/6 h-[40px] text-lg bg-gray-100 text-black outline-none   rounded-r-full pr-[10px] text-center'
            />
            <button  type='submit' className='w-1/6 h-[40px] bg-gray-500  rounded-full text-white flex items-center  justify-center p-3 inline-block disabled:opacity-50 disabled:cursor-not-allowed'>
                Send
            </button>
        </form>
    );
};


export default SendMessage