import { signupModel } from '@/constant'
import React from 'react'

const Authmodel = () => {
  return (
    <div className='absolute min-w-[500px] h-[600px]'>
        <h1>{signupModel.heading}</h1>
        <div>
            {
                signupModel.fields.map((data, id)=>(
                    <div key={id}>
                     <input type={data.type} placeholder={data.placeholder}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Authmodel