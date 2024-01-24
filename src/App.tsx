import { FC, JSX, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const  App:FC = ():JSX.Element => {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-zinc-900 w-full flex items-center justify-center flex-col '>
      <div className='flex-col justify-center items-center'>
        <a href="https://vitejs.dev" className='grid place-content-center' target="_blank">
          <img src={viteLogo} className="w-28 h-28" alt="Vite logo" />
        </a>
        <a  href="https://react.dev" target="_blank">
          <img src={reactLogo} className="my-10 w-28 h-28 animate-[spin_4s_linear_infinite]" alt="React logo" />
        </a>
      </div>
      <h1 className='text-gray-100'>Vite + React</h1>
      <div className="flex items-center justify-center flex-col">
        <button className='bg-indigo-600 p-2 text-white rounded-md hover:bg-indigo-500 active:bg-indigo-700 cursor-pointer' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='text-gray-200'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-200">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export  {App}
