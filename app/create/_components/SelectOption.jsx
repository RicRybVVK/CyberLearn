import Image from 'next/image'
import React, { useState } from 'react'

function SelectOption({selectedStudyType}) {
    const Options=[
        {
            name:'Security Awareness',
            icon:'/exam_1.png'
        },
        {
            name:'Compliance Training',
            icon:'/practice.png'
        },
        {
            name:'Phishing Simulation',
            icon:'/code.png'
        },
    ]
    const [selectedOption,setSelectedOption]=useState();

  return (
    <div>
        <h2 className='text-center mb-2 text-lg'>Pick a category to start creating interactive cybersecurity modules</h2>
        <div className='grid grid-cols-3 gap-4 mt-5'>
            {Options.map((option,index)=>(
                <div 
                    key={index}
                    className={`group relative p-[2px] rounded-xl transition-all
                    ${
                        option?.name === selectedOption 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                        : 'hover:bg-gradient-to-r from-purple-500/30 to-pink-500/30'
                    }`}
                >
                    <div
                        className={`w-full h-full flex flex-col items-center justify-center p-4
                        bg-white rounded-xl cursor-pointer transition-all
                        ${option?.name === selectedOption 
                            ? 'border-2 border-transparent'
                            : 'border hover:border-transparent'
                        }`}
                        onClick={() => {
                            setSelectedOption(option.name);
                            selectedStudyType(option.name);
                        }}
                    >
                        <Image 
                            src={option.icon} 
                            alt={option.name} 
                            width={50} 
                            height={50}
                            className='transition-opacity group-hover:opacity-80'
                        />
                        <h2 className='text-sm mt-2 text-center'>{option.name}</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SelectOption