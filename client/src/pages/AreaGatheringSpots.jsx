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

const normalizeCondition = (condition) => {
    return condition
        ?.toLowerCase()
        .replaceAll(' ', '-')
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
            const aOrder = conditionOrder[normalizeCondition(a.condition)] ?? 999
            const bOrder = conditionOrder[normalizeCondition(b.condition)] ?? 999

            return aOrder - bOrder
        })
    }))
}

const AreaGatheringSpots = ({ area }) => {
    const [allGatheringSpots, setAllGatheringSpots] = useState([])
    const [selectedArea, setSelectedArea] = useState('all')

    useEffect(() => {
        const fetchGatheringSpots = async () => {
            try {
                const data = await AreasAPI.getAllAreas()
                setAllGatheringSpots(data)
            }
            catch (error) {
                console.error('Error fetching gathering spots:', error)
            }
        }

        fetchGatheringSpots()
    }, [])

    const areas = [...new Set(allGatheringSpots.map(spot => spot.area))]
        .sort((a, b) => Number(a) - Number(b))

    const visibleSpots = area !== null
        ? allGatheringSpots.filter(
            spot => Number(spot.area) === Number(area)
        )
        : selectedArea === 'all'
            ? allGatheringSpots
            : allGatheringSpots.filter(
                spot => Number(spot.area) === Number(selectedArea)
            )

    const groupedSpots = groupSpotsByAreaAndPosition(visibleSpots)

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

                {area === null && (
                    <div className='area-filter'>
                        <label htmlFor='area-filter'>
                            Filter by Location:
                        </label>

                        <select
                            id='area-filter'
                            value={selectedArea}
                            onChange={(event) => setSelectedArea(event.target.value)}
                        >
                            <option value='all'>All Areas</option>

                            {areas.map((areaNumber) => (
                                <option key={areaNumber} value={areaNumber}>
                                    {Number(areaNumber) === 9
                                        ? 'Hidden Area'
                                        : `Area ${areaNumber}`}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
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
