type Input = {
    inputValue : string;
    setInputValue : React.Dispatch<React.SetStateAction<string>>;
    
};

export const Input = ({inputValue, setInputValue} : Input) => {
  return (
    <input type="text" className='w-full bg-gray-400 h-10 border rounded-md p-2 ' onChange={(e)=> setInputValue(e.target.value)} />
  )
};
