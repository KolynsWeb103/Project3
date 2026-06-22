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
      path: '/areas/1',
      element: <AreaGatheringSpots index={1} />
    },
    {
      path: '/areas/2',
      element: <AreaGatheringSpots index={2} />
    },
    {
      path: '/areas/3',
      element: <AreaGatheringSpots index={3} />
    },
    {
      path: '/areas/4',
      element: <AreaGatheringSpots index={4} />
    },
    {
      path: '/areas/5',
      element: <AreaGatheringSpots index={5} />
    },
    {
      path: '/areas/6',
      element: <AreaGatheringSpots index={6} />
    },
    {
      path: '/areas/7',
      element: <AreaGatheringSpots index={7} />
    },
    {
      path: '/areas/8',
      element: <AreaGatheringSpots index={8} />
    },
    {
      path: '/areas/9',
      element: <AreaGatheringSpots index={9} />
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
