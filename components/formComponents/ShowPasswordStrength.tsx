import { cn } from '@/lib/utils'
import React from 'react'

interface Props {

  strength: 0 | 1 | 2 | 3
}

const ShowPasswordStrength = ({ strength}:Props) => {
  return (
    <div className="flex gap-4 p-3">
      {Array.from({length: strength + 1}).map((i, index) =>(
        <div key={index} className={cn("h-2 w-20 rounded-md",{
          " bg-black": strength === 0,
          " bg-[#000]": strength === 1,
          " bg-[#0f0f0f]": strength === 2,
          " bg-[#090909]": strength === 3
        })} > 
         </div>
      ))}
      
    </div>
    )
  }


export default ShowPasswordStrength
