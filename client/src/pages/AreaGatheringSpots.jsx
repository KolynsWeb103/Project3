import React, { useState, useEffect } from 'react'
import GatheringSpot from '../components/GatheringSpot'
import '../css/AreaGatheringSpots.css'

const AreaGatheringSpots = ({index}) => {
    const [area, setArea] = useState([])
    const [gatheringSpots, setGatheringSpots] = useState([])

    return (
        <div className='area-gatheringSpots'>
            <header>
                <div className='area-image'>
                    <img src={area.image} />
                </div>

                <div className='area-info'>
                    <h2>{area.name}</h2>
                    <p>{area.address}, {area.city}, {area.state} {area.zip}</p>
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

export default AreaGatheringSpots
