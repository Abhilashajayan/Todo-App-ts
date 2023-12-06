import React, { useState } from 'react'



const  App : React.FC=()=> {

const[items,setItems] = useState<string>()


  return (
    <div className='bg-navy-blue h-screen w-screen fixed flex flex-col justify-center items-center'>
       <div className='flex '>
           <h1 className='text-blue-200 text-4xl p-5'>Todo App</h1>
       </div>
      <div className='flex items-center flex-col'>
         <form>
           <input type="text" className='w-60 bg-gray-400 h-10 border rounded-md p-2 ' />
         </form>
         <button className='px-4 mt-2 py-2 bg-electric-blue w-full  rounded-md'>ADD</button>
      </div>

      <div className='mt-3  max-w-[240px] w-full  h-[200px]  overflow-y-auto'>
        <div className='py-2 text-blue-200 border  rounded flex'>
            <p >hello</p>
            <button className='ms-auto mr-2'>i</button>
        </div>
      </div>
    </div>

  )
}

export default App