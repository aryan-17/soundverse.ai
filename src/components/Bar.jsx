import React from 'react';

const Bar = ({selected, setSelected}) => {
    const bar = ["Progress", "Prompt", "Task"];

    const onClickHandler = (ele)=>{
        setSelected(ele);
    }

  return (
    <div className={`flex text-xl gap-x-10 border-[1px] border-[#01BEF4] py-2 px-3 rounded-full h-14 items-center text-center w-1/3 justify-evenly`}>
      {
        bar.map((ele, idx)=>{
            return(
                <div key={idx} className={`${selected === ele ? `bg-[#01BEF4] text-black rounded-full px-4 py-1 font-semibold` : `text-pure-greys-300`} ease-in duration-200 cursor-pointer`} onClick={()=>onClickHandler(ele)}>
                    {ele}
                </div>
            )
        })
      }
    </div>
  )
}

export default Bar
