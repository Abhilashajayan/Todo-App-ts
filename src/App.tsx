import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Input } from './Components/input';
import { Button } from './Components/Button';

type Item = {
  title : string, 
  id: string,
}[];

const  App : React.FC=()=> {
  
const[items,setItems] = useState<Item>([])
const[inputvalue, setInputValue] = useState<string>("")


const handlesubmit =(e : React.FormEvent) => {
  e.preventDefault();
  setItems((prev )=> [...prev,{title : inputvalue , id:Date.now().toString()}]);
  setInputValue("");
}

const handleDelete = (id : string) =>{
  setItems((prev )=> prev.filter((data) => data.id !== id))
}



  return (
    <div className='bg-navy-blue h-screen w-screen fixed flex flex-col justify-center items-center'>
       <div className='flex '>
           <h1 className='text-blue-200 text-4xl p-5'>Todo App</h1>
       </div>
      <div className='flex items-center flex-col'>
         <form onSubmit={handlesubmit}>
           <Input  inputValue={inputvalue} setInputValue={setInputValue} />
            <Button  className={'px-4 mt-2 py-2 bg-electric-blue w-full  rounded-md '} >ADD</Button>
         
         </form>
      </div>

      <div className='mt-3  max-w-[240px] w-full  h-[200px]  overflow-y-auto'>
      {items.map((data, key)  => (
         <div key={data.id} className='py-2 mt-1 text-blue-200 border rounded flex'>
           <p className='ml-2'>{data.title}</p>
            <Button onClick={()=> handleDelete(data.id)}  className={`ms-auto mr-2`}>
               <FontAwesomeIcon icon={faTrashCan} />
             </Button>
         </div>
        ))}
      </div>
    </div>

  )
}

export default App