import React, { useRef, useState } from 'react';
import { IoArrowRedo } from 'react-icons/io5';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import AiImage from '../aiImage.svg'
const Prompt = ({ setPoints, setDays, task, setTask }) => {
  const refPrompt = useRef(null);
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([]);

  const sendHandler = async () => {
    try {
      setLoading(true);
      const body = {
        prompt: refPrompt.current.value,
        action: 'generate_music',
        userId: '668bbc297949e891e777bd95',
        projectId: '668d3631afb046d1538ba51c',
        speech_url: null,
        speech_enabled: false,
      };
      setChat(prev => [...prev, refPrompt.current.value]);
      const response = await axios.post('https://assistant.soundverse.ai/chat', body);
      console.log(response.data.reply);
      setChat(prev => [...prev, response.data.reply]);
      setTask(true);
      refPrompt.current.value = '';
      if (!task) {
        setDays((prev) => prev + 1);
        setPoints((prev) => prev + 50);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-2/5 h-2/3 flex flex-col justify-between overflow-y-scroll'>
      <div className='h-full'>{

        chat.map((ele, idx) => {
          if (idx % 2 === 1) {
            return (
              <div key={idx} className='flex'>
                <div className='w-1/4 grid items-center justify-center'>
                  <img src={AiImage} alt="" />
                </div>
                <div className='w-3/4'>
                  {ele}
                </div>
              </div>
            )
          }
          return (
            <div key={idx} className='flex flex-row-reverse my-5'>
              <div className='w-1/4 grid items-center justify-center'>
                <img src={AiImage} alt="" />
              </div>
              <div className='w-3/4 text-right items-center flex justify-end'>
                {ele}
              </div>
            </div>
          )
        })

      }</div>
      <div className='h-1/5 flex justify-between border-2 border-blue-600 rounded-lg'>
        <input
          type='text'
          placeholder='Type your prompt'
          className='w-full m-2 !bg-black border-none text-white'
          ref={refPrompt}
        />
        <button
          onClick={sendHandler}
          className='mr-5 bg-[#512CAC] my-2 rounded-lg px-3 text-xl'
        >
          {loading ? (
            <div className='flex items-center'>
              <ClipLoader size={20} color='#01BEF4' />
            </div>
          ) : (
            <IoArrowRedo className='text-[#01BEF4]' />
          )}
        </button>
      </div>
    </div >
  );
};

export default Prompt;
