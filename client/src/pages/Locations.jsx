import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import unitygrid from '../assets/unitygrid.jpg'
import '../css/Locations.css'

const Locations = () => {
    const [gatheringSpots, setGatheringSpots] = useState([])
    const [hoveredArea, setHoveredArea] = useState(null)

    useEffect(() => {
        const fetchGatheringSpots = async () => {
            try {
                const data = await LocationsAPI.getAllLocations()
                setGatheringSpots(data)
            }
            catch (error) {
                console.error('Error fetching gathering spots:', error)
            }
        }

        fetchGatheringSpots()
    }, [])

    const getAreaLabel = (areaNumber) => {
        const spotsInArea = gatheringSpots.filter(spot => spot.area === areaNumber)
        return `Area ${areaNumber} (${spotsInArea.length} spots)`
    }

    return (
        <div className='available-locations'>
            <div 
                className='area1-button-overlay'
                style={{ opacity: hoveredArea === 1 ? 1 : 0 }}
            >
                <button>{getAreaLabel(1)}</button>
            </div>

            <div 
                className='area2-button-overlay'
                style={{ opacity: hoveredArea === 2 ? 1 : 0 }}
            >
                <button>{getAreaLabel(2)}</button>
            </div>

            <div 
                className='area3-button-overlay'
                style={{ opacity: hoveredArea === 3 ? 1 : 0 }}
            >
                <button>{getAreaLabel(3)}</button>
            </div>

            <div 
                className='area4-button-overlay'
                style={{ opacity: hoveredArea === 4 ? 1 : 0 }}
            >
                <button>{getAreaLabel(4)}</button>
            </div>

            <svg 
                version="1.1" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                x="0px" 
                y="0px" 
                viewBox="0 0 1000.32 500" 
                xmlSpace="preserve"
            >
                <image 
                    id="background" 
                    xlinkHref={unitygrid} 
                    transform="matrix(0.48 0 0 0.48 0 0)"
                />

                <a href='/areas/1'>
                    <polygon 
                        id="area1"
                        className="clickable-area"
                        onMouseEnter={() => setHoveredArea(1)}
                        onMouseLeave={() => setHoveredArea(null)}
                        points="100,200 200,200 200,300 100,300" 
                    />
                </a>

                <a href='/areas/2'>
                    <polygon 
                        id="area2"
                        className="clickable-area"
                        onMouseEnter={() => setHoveredArea(2)}
                        onMouseLeave={() => setHoveredArea(null)}
                        points="250,200 350,200 350,300 250,300" 
                    />
                </a>

                <a href='/areas/3'>
                    <polygon 
                        id="area3"
                        className="clickable-area"
                        onMouseEnter={() => setHoveredArea(3)}
                        onMouseLeave={() => setHoveredArea(null)}
                        points="400,200 500,200 500,300 400,300" 
                    />
                </a>

                <a href='/areas/4'>
                    <polygon 
                        id="area4"
                        className="clickable-area"
                        onMouseEnter={() => setHoveredArea(4)}
                        onMouseLeave={() => setHoveredArea(null)}
                        points="550,200 650,200 650,300 550,300"
                    />
                </a>
            </svg>
        </div>
    )
}

export default Locations
