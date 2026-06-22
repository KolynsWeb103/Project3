import React from 'react'
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
  const materials = Array.isArray(props.materials)
    ? props.materials
    : props.materials?.split(',').map(material => material.trim()) || []

  const getIconImage = (material) => {
    const iconName = itemIconMap[material]

    if (!iconName) {
      return null
    }

    return iconImages[`../assets/icons/${iconName}.png`]
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
            <strong>Condition:</strong> {props.condition}
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
        </div>
      </div>
    </article>
  )
}

export default GatheringSpot
