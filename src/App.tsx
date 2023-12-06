import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


const  App : React.FC=()=> {

const[items,setItems] = useState<string[]>([])
const[inputvalue, setInputValue] = useState<string>("")

const handlesubmit =(e : React.FormEvent)=> {
  e.preventDefault();
  setItems((prev)=> [...prev,inputvalue]);
  setInputValue("");
  console.log("data");
}


  return (
    <div className='bg-navy-blue h-screen w-screen fixed flex flex-col justify-center items-center'>
       <div className='flex '>
           <h1 className='text-blue-200 text-4xl p-5'>Todo App</h1>
       </div>
      <div className='flex items-center flex-col'>
         <form onSubmit={handlesubmit}>
           <input type="text" className='w-full bg-gray-400 h-10 border rounded-md p-2 ' onChange={(e)=> setInputValue(e.target.value)} />
         
         <button type='submit' className='px-4 mt-2 py-2 bg-electric-blue w-full  rounded-md'>ADD</button>
         </form>
      </div>

      <div className='mt-3  max-w-[240px] w-full  h-[200px]  overflow-y-auto'>
      {items.map((data, key) => (
         <div key={key} className='py-2 mt-1 text-blue-200 border rounded flex'>
           <p className='ml-2'>{data}</p>
            <button className='ms-auto mr-2'>
               <FontAwesomeIcon icon={faTrashCan} />
             </button>
         </div>
        ))}
      </div>
    </div>

  )
}

export default App