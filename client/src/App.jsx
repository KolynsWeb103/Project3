import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/areas/1',
      element: <LocationEvents index={1} />
    },
    {
      path: '/areas/2',
      element: <LocationEvents index={2} />
    },
    {
      path: '/areas/3',
      element: <LocationEvents index={3} />
    },
    {
      path: '/areas/4',
      element: <LocationEvents index={4} />
    },
    {
      path: '/areas/5',
      element: <LocationEvents index={5} />
    },
    {
      path: '/areas/6',
      element: <LocationEvents index={6} />
    },
    {
      path: '/areas/7',
      element: <LocationEvents index={7} />
    },
    {
      path: '/areas/8',
      element: <LocationEvents index={8} />
    },
    {
      path: '/areas/9',
      element: <LocationEvents index={9} />
    },
    {
      path: '/events',
      element: <Events />
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
          <Link to="/events" role="button">Spots</Link>
        </div>
      </header>
    </div>
  )
}

export default App
