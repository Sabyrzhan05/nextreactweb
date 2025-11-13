'use client'

import { div } from "framer-motion/client";
import { useState } from "react";

export default function Home() {

  const color: string[] = ["bg-green-300", "bg-blue-300", "bg-white"]
  const [index, setIndex] = useState<number>(0)

  const [digit,setDigit] = useState<number>(0)

  const increment = () => {
    setDigit(digit + 2)
  }

  const decrement = () => {
  setDigit(digit - 4)
}

  const changeColor = () => {
    if (index < color.length) {
      setIndex(index + 1)
    } 
    else {
      setIndex(0)
    }
  }

  return (
    <div className={`mt-4 flex flex-col min-h-screen gap-2 items-center justify-center ${color[index]}`}>
      
      <h1 className="text-[20px]">Hello world</h1>
      <h1 className="text-[20px]">{digit}</h1>
      <button className="w-[120px] bg-yellow-400 hover:bg-red-300 rounded-xl" onClick={increment}>+</button>
      <button className="w-[120px] bg-yellow-400 hover:bg-red-300 rounded-xl" onClick={decrement}>-</button>
      <button className="w-[120px] bg-yellow-400 hover:bg-red-300 rounded-xl" onClick={changeColor}>Change color</button>
    
    
    <h1 className="text-2xl font-bold mb-1 hover:text-gray-400 animate-bounce mt-10">Check new cars</h1>
    <h1 className="text-2xl font-bold mb-0 hover:text-gray-400 animate-bounce">⬇️</h1>

    <div className="perspective-distant mt-20">
      <iframe src="https://www.youtube.com/embed/O5b0ymlw98M?si=Isrvp1nFh3Am_U6m" className="mx-auto rounded shadow-2xl w-[80%] h-[80%] aspect-video rotate-x-40 rotate-z-20 transform-3d"></iframe>

    </div>
    </div>

)
}
