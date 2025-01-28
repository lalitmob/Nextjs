import { contact_ui } from '@/constant'
import React from 'react'

const Contactform = () => {
  return (
    <div className="absolute right-[15%] top-[20%] w-[500px] h-[650px] bg-white-1 text-black-1 py-2 rounded-xl shadow-lg shadow-black-1 ">
     <div>
       {
        contact_ui.fields.map((data, id)=>(
            <div key={id}>
                <div className='flex'>
                    <label >{data.label}</label>
                    <input type={data.type} />
                </div>
            </div>
        ))
       }
     </div>
    </div>
  )
}

export default Contactform