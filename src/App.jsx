import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor] = useState('#2d3748')

  return (
    <div className='h-screen flex justify-center items-center' style={{backgroundColor: color}}>
      <div className='inline-block space-x-4 size-fit rounded-4xl p-2 text-xl font-bold'>
        <button className='inline-block p-1.5 border-3 rounded-3xl bg-violet-800 text-white' onClick={() => setColor('#8F00FF')}>Violet</button>
        <button className='inline-block p-1.5 border-3 rounded-3xl bg-indigo-800 text-white' onClick={() => setColor('indigo')}>Indigo</button>
        <button className='inline-block p-1.5 border-3 rounded-3xl bg-blue-800 text-white' onClick={() => setColor('blue')}>Blue</button>
        <button className='inline-block p-1.5 border-3 rounded-3xl bg-green-800 text-white' onClick={() => setColor('green')}>Green</button>
        <button className='inline-block p-1.5 border-3 rounded-3xl bg-yellow-800 text-white' onClick={() => setColor('yellow')}>Yellow</button>
        <button className='inline-block p-1.5 border-3 rounded-3xl bg-orange-800 text-white' onClick={() => setColor('orange')}>Orange</button>
        <button className='inline-block p-1.5 border-3 rounded-3xl mr-2 bg-red-800 text-white' onClick={() => setColor('red')}>Red</button>
      </div>
    </div>
  )
}

export default App
