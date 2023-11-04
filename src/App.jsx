import { useState } from "react"


function App() {
  const [color,setColor]=useState('black')
  return (
    <div style={{backgroundColor:color}}
      className="w-full h-screen flex justify-center items-end"
    >
      <div className="m-9 p-4 rounded-md" style={{backgroundColor:'white'}}>
        <button style={{backgroundColor:'red'}}
          className='rounded-lg p-1 w-16 text-white font-bold mx-4' onClick={()=>setColor('red')}
        >
          Red
        </button>
        <button style={{backgroundColor:'green'}}
          className='rounded-lg p-1 w-16 text-white font-bold mx-4' onClick={()=>setColor('green')}
        >
          Green
        </button>
        <button style={{backgroundColor:'blue'}}
          className='rounded-lg p-1 w-16 text-white font-bold mx-4' onClick={()=>setColor('blue')}
        >
          Blue
        </button>
        <button style={{backgroundColor:'orange'}}
          className='rounded-lg p-1 w-16 text-white font-bold mx-4' onClick={()=>setColor('orange')}
        >
          Orange
        </button>
        <button style={{backgroundColor:'purple'}}
          className='rounded-lg p-1 w-16 text-white font-bold mx-4' onClick={()=>setColor('purple')}
        >
          Purple
        </button>
        <button style={{backgroundColor:'pink'}}
          className='rounded-lg p-1 w-16 text-white font-bold mx-4' onClick={()=>setColor('pink')}
        >
          Pink
        </button>
        <button style={{backgroundColor:'brown'}}
          className='rounded-lg p-1 w-16 text-white font-bold mx-4' onClick={()=>setColor('brown')}
        >
          Brown
        </button>
      </div>
    </div>
  )
}

export default App
