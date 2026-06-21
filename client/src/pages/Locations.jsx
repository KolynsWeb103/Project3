import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import bg from '../assets/mtn.png'
import '../css/Locations.css'

const Locations = () => {
    const [gatheringSpots, setGatheringSpots] = useState([])
    const [hoveredArea, setHoveredArea] = useState(null)
    const [labelPosition, setLabelPosition] = useState({ x: 0, y: 0 })

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
        const uniquePositionCount = new Set(
            spotsInArea.map(spot => spot.position)
        ).size
        
        if (areaNumber === 9)
        {
            return `Hidden Area (${uniquePositionCount} spots)`
        }
        return `Area ${areaNumber} (${uniquePositionCount} spots)`
    }

    const handleAreaHover = (areaNumber, x, y) => {
        setHoveredArea(areaNumber)
        setLabelPosition({ x, y })
    }

    return (
        <div className='available-locations'>
            <svg 
                version="1.1" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                x="0px" 
                y="0px" 
                viewBox="0 0 1000.32 700" 
                xmlSpace="preserve"
                onClick={(e) => {
                    const svg = e.currentTarget
                    const point = svg.createSVGPoint()

                    point.x = e.clientX
                    point.y = e.clientY

                    const svgPoint = point.matrixTransform(svg.getScreenCTM().inverse())

                    console.log(`${Math.round(svgPoint.x)},${Math.round(svgPoint.y)}`)
                }}
            >
                <image 
                    id="background" 
                    xlinkHref={bg}
                    x="0"
                    y="10"
                    width="200"
                    height="200"
                    transform="matrix(3.5 0 0 3.5 0 0)"
                    style={{
                        imageRendering: "pixelated"
                    }}
                />

                {hoveredArea && (
                    <g className="svg-area-label">
                        <rect
                        x={labelPosition.x}
                        y={labelPosition.y}
                        width="280"
                        height="55"
                        rx="8"
                        />
                        <text
                        x={labelPosition.x + 140}
                        y={labelPosition.y + 35}
                        textAnchor="middle"
                        >
                        {getAreaLabel(hoveredArea)}
                        </text>
                    </g>
                )}

                <a href='/areas/1'>
                    <polygon 
                        id="area1"
                        className="clickable-area"
                        onMouseEnter={() => handleAreaHover(1, 374,587)}
                        onMouseLeave={() => setHoveredArea(null)}
                        points="280,481 374,481 374,587 280,587" 
                    />
                </a>

                <a href='/areas/2'>
                    <polygon 
                        id="area2"
                        className="clickable-area"
                        onMouseEnter={() => handleAreaHover(2, 167,614)}
                        onMouseLeave={() => setHoveredArea(null)}
                        points="47,484 167,484 167,614 47,614" 
                    />
                </a>

                <a href='/areas/3'>
                    <polygon 
                        id="area3"
                        className="clickable-area"
                        onMouseEnter={() => handleAreaHover(3, 241,448)}
                        onMouseLeave={() => setHoveredArea(null)}
                        points="178,390 241,390 241,448 178,448" 
                    />
                </a>

                <a href='/areas/4'>
                    <polygon 
                        id="area4"
                        className="clickable-area"
                        onMouseEnter={() => handleAreaHover(4, 518,495)}
                        onMouseLeave={() => setHoveredArea(null)}
                        points="424,408 518,408 518,495 424,495"
                    />
                </a>

                <a href='/areas/5'>
                    <polygon 
                        id="area5"
                        className="clickable-area"
                        onMouseEnter={() => handleAreaHover(5, 353,399)}
                        onMouseLeave={() => setHoveredArea(null)}
                        points="273,297 353,297 353,399 273,399"
                    />
                </a>

                <a href='/areas/6'>
                    <polygon 
                        id="area6"
                        className="clickable-area"
                        onMouseEnter={() => handleAreaHover(6, 528,314)}
                        onMouseLeave={() => setHoveredArea(null)}
                        points="420,196 528,196 528,314 420,314"
                    />
                </a>

                <a href='/areas/7'>
                    <polygon 
                        id="area7"
                        className="clickable-area"
                        onMouseEnter={() => handleAreaHover(7, 229,290)}
                        onMouseLeave={() => setHoveredArea(null)}
                        points="150,163 229,163 229,290 150,290"
                    />
                </a>

                <a href='/areas/8'>
                    <polygon 
                        id="area8"
                        className="clickable-area"
                        onMouseEnter={() => handleAreaHover(8, 409,167)}
                        onMouseLeave={() => setHoveredArea(null)}
                        points="308,72 409,72 409,167 308,167"
                    />
                </a>

                <a href='/areas/9'>
                    <polygon 
                        id="area9"
                        className="clickable-area"
                        onMouseEnter={() => handleAreaHover(9, 224,633)}
                        onMouseLeave={() => setHoveredArea(null)}
                        points="178,593 224,593 224,633 178,633"
                    />
                </a>
            </svg>
        </div>
    )
}

export default Locations
