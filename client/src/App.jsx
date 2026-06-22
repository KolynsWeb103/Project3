import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Areas from './pages/Areas'
import AreaGatheringSpots from './pages/AreaGatheringSpots'
import GatheringSpots from './pages/GatheringSpots'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Areas />
    },
    {
      path: '/areas/:area',
      element: <GatheringSpots />
    },
    {
      path: '/gatheringSpots',
      element: <GatheringSpots />
    }
  ])

  return (
    <div className="app">
      <main>
        {element}
      </main>

      <header className="main-header">
        <h1>Monster Hunter Freedom Unite Snowy Mountain Gathering Spots</h1>
        <h3>Source: https://github.com/Kolyn090/mhfu-db</h3>

        <div className="header-buttons">
          <Link to="/" role="button">Map</Link>
          <Link to="/gatheringSpots" role="button">Spots</Link>
        </div>
      </header>
    </div>
  )
}

export default App
