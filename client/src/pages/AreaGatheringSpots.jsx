import React, { useState, useEffect } from 'react'
import GatheringSpot from '../components/GatheringSpot'
import AreasAPI from '../services/AreasAPI'
import '../css/AreaGatheringSpots.css'

const conditionOrder = {
    'low-rank': 1,
    'high-rank': 2,
    'g-rank': 3,
    'training': 4,
    'treasure': 5
}

const groupSpotsByAreaAndPosition = (spots) => {
    const grouped = {}

    spots.forEach((spot) => {
        const key = `${spot.area}-${spot.position}`

        if (!grouped[key]) {
            grouped[key] = {
                area: spot.area,
                position: spot.position,
                type: spot.type,
                spots: []
            }
        }

        grouped[key].spots.push(spot)
    })

    return Object.values(grouped).map((group) => ({
        ...group,
        spots: group.spots.sort((a, b) => {
            const aOrder = conditionOrder[a.condition?.toLowerCase()] ?? 999
            const bOrder = conditionOrder[b.condition?.toLowerCase()] ?? 999

            return aOrder - bOrder
        })
    }))
}

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

    const groupedSpots = groupSpotsByAreaAndPosition(gatheringSpots)

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
                    groupedSpots.length > 0 ? groupedSpots.map((group) =>
                        <GatheringSpot
                            key={`${group.area}-${group.position}`}
                            area={group.area}
                            position={group.position}
                            type={group.type}
                            spots={group.spots}
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
