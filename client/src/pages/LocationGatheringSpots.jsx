import React, { useState, useEffect } from 'react'
import GatheringSpot from '../components/GatheringSpot'
import '../css/LocationGatheringSpots.css'

const LocationGatheringSpots = ({index}) => {
    const [location, setLocation] = useState([])
    const [gatheringSpots, setGatheringSpots] = useState([])

    return (
        <div className='location-gatheringSpots'>
            <header>
                <div className='location-image'>
                    <img src={location.image} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {
                    gatheringSpots && gatheringSpots.length > 0 ? gatheringSpots.map((gatheringSpot, index) =>
                        <GatheringSpot
                            key={gatheringSpot.id}
                            id={gatheringSpot.id}
                            title={gatheringSpot.title}
                            date={gatheringSpot.date}
                            time={gatheringSpot.time}
                            image={gatheringSpot.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No gathering spot found on this area!!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationGatheringSpots
