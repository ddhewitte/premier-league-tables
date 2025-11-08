import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header & filter */}
          <div className="mb-8">Header</div>

          {/* Standings table */}
          <div className="overflow-x-auto rounded-lg border border-gray-800">Area</div>

          {/* footer */}
          <div className="mt-6 flex flex-wrap gap-6">footer</div>

        </div>
      </div>
    </>
  )
}

export default App
