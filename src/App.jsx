import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar, Header, Frame, DataTable } from './components/index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex'>
      <div className='w-[11%]'>
        <Navbar />
      </div>
      <div className='w-[89%]'>
        <Header />
        <div className='p-[32px] bg-gray-100'>
          <Frame />
          <DataTable />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
