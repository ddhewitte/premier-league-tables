import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Standings from './components/Standings'
import Footer from './components/Footer'
import { getStandingData } from './services/standingService'

function App() {
  const [standing, setStanding] = useState([]);

  useEffect(() => {
    const fetchStanding = async() => {
      try{
        const res = await getStandingData();
        setStanding(res.data.standings);
      }catch{
        console.log('Error when fetch data!');
      }
    }
    fetchStanding();
  }, []);

  const sortBy = (item) => {
    console.log(item);
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-7xl mx-auto">
          <Header sortBy={sortBy}/>
          <Standings data={standing}/>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
