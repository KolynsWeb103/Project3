import React, { useState } from 'react'
import '../css/GatheringSpot.css'
import item2icon from '../assets/item2icon.json'

const iconImages = import.meta.glob('../assets/icons/*.png', {
  eager: true,
  import: 'default'
})

const itemIconMap = Object.fromEntries(
  item2icon.map(item => [item.name, item.icon])
)

const GatheringSpot = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectedSpot = props.spots[selectedIndex]

  const materials = Array.isArray(selectedSpot.materials)
    ? selectedSpot.materials
    : selectedSpot.materials?.split(',').map(material => material.trim()) || []

  const getIconImage = (material) => {
    const iconName = itemIconMap[material]

    if (!iconName) {
      return null
    }

    return iconImages[`../assets/icons/${iconName}.png`]
  }

  const handleConditionClick = () => {
    setSelectedIndex((prevIndex) => {
      const nextIndex = prevIndex + 1
      return nextIndex >= props.spots.length ? 0 : nextIndex
    })
  }

  return (
    <article className='gathering-spot-information'>
      <div className='gathering-spot-information-overlay'>
        <div className='text'>
          <h3>{props.type}</h3>

          <p>
            <strong>Area:</strong> {props.area}
          </p>

          <p>
            <strong>Position:</strong> {props.position}
          </p>

          <p>
            <strong>Condition:</strong>{' '}
            <button
              className='condition-button'
              onClick={handleConditionClick}
              type='button'
            >
              {selectedSpot.condition}
            </button>
          </p>

          <div className='materials'>
            <strong>Materials:</strong>

            <div className='material-icons'>
              {materials.map((material) => {
                const iconImage = getIconImage(material)

                return (
                  <div className='material-icon' key={material}>
                    {iconImage ? (
                      <img
                        src={iconImage}
                        alt={material}
                        title={material}
                      />
                    ) : (
                      <span className='missing-icon'>?</span>
                    )}

                    <span>{material}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {props.spots.length > 1 && (
            <p className='condition-hint'>
              Click condition to switch
            </p>
          )}
        </div>
      </div>
    </article>
  )
}

export default GatheringSpot
