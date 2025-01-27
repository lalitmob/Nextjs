import { Features_content as d, uiConstant } from '@/constant'
import React,{useState} from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
const Features = () => {
    const [idx, setIdx] = useState(0)
  return (
    <div className='relative w-full h-screen'>
        <div className='w-full bg-purple-700 h-full '>
            <Image src ={uiConstant.feature_bg} alt ={uiConstant.feature_bg} fill className = "object-cover"/>
        </div>
       <div className=''>
       <div className='absolute flex z-20 top-[28%] w-full bg-transparent '>
            <div className='border w-[50%]'>
                <Image src={d[idx].image} alt={d[idx].image} height={500} width={500}/>
            </div>
            <div className='flex justify-center items-center border w-[45%] text-white-1'>
                <h1>{d[idx].heading}</h1>
            </div>
        </div>
        <div className='absolute top-[50%] right-5 flex flex-col gap-3 z-20'>
        {d.map((_, id) => {
                 const isActive = idx == id;
                 return (
                     <div
                      key={id}
                      onClick={()=>setIdx(id)}
                       className={cn(
                         "flex items-center ml-3 justify-end rounded-full",
                         { "bg-green-400": isActive, "bg-gray-200": !isActive }
                       )}
                     >
                       <i className="bx bx-circle text-sm text-transparent"></i>
                     </div>
                 );
               })}
        </div>
       </div>
    </div>
  )
}

export default Features