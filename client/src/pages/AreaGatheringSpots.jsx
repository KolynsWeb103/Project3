import React, { useState, useEffect } from 'react'
import GatheringSpot from '../components/GatheringSpot'
import AreasAPI from '../services/AreasAPI'
import '../css/AreaGatheringSpots.css'

const AreaGatheringSpots = ({ area }) => {
    const [gatheringSpots, setGatheringSpots] = useState([])

    useEffect(() => {
        const fetchGatheringSpots = async () => {
            try {
                const data = await AreasAPI.getAllAreas()
                if (area === null) {
                    setGatheringSpots(data)
                } else {
                    const spotsInArea = data.filter(
                        spot => Number(spot.area) === Number(area)
                    )

                    setGatheringSpots(spotsInArea)
                }
            }
            catch (error) {
                console.error('Error fetching gathering spots:', error)
            }
        }

        fetchGatheringSpots()
    }, [area])

    return (
        <div className='area-gathering-spots'>
            <header>
                <div className='area-info'>
                    <h2>{area === null
                        ? 'All Gathering Spots'
                        : area === 9
                            ? 'Hidden Area'
                            : `Area ${area}`}
                    </h2>
                    <p>
                        {area === null
                            ? 'Gathering spots found across all areas.'
                            : 'Gathering spots found in this area.'}
                    </p>
                </div>
            </header>

            <main className="gathering-spots-list">
                {
                    gatheringSpots.length > 0 ? gatheringSpots.map((gatheringSpot) =>
                        <GatheringSpot
                            key={gatheringSpot.id}
                            area={gatheringSpot.area}
                            position={gatheringSpot.position}
                            type={gatheringSpot.type}
                            condition={gatheringSpot.condition}
                            materials={gatheringSpot.materials}
                        />
                    ) : (
                        <h2 className="empty-message">No gathering spots found in this area!!</h2>
                    )
                }
            </main>
        </div>
    )
}

export default AreaGatheringSpots
