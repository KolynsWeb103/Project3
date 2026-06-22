import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationGatheringSpots from './pages/LocationGatheringSpots'
import GatheringSpots from './pages/GatheringSpots'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/areas/1',
      element: <LocationGatheringSpots index={1} />
    },
    {
      path: '/areas/2',
      element: <LocationGatheringSpots index={2} />
    },
    {
      path: '/areas/3',
      element: <LocationGatheringSpots index={3} />
    },
    {
      path: '/areas/4',
      element: <LocationGatheringSpots index={4} />
    },
    {
      path: '/areas/5',
      element: <LocationGatheringSpots index={5} />
    },
    {
      path: '/areas/6',
      element: <LocationGatheringSpots index={6} />
    },
    {
      path: '/areas/7',
      element: <LocationGatheringSpots index={7} />
    },
    {
      path: '/areas/8',
      element: <LocationGatheringSpots index={8} />
    },
    {
      path: '/areas/9',
      element: <LocationGatheringSpots index={9} />
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
