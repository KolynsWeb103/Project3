import React from 'react'
import '../css/GatheringSpot.css'

const GatheringSpot = (props) => {
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

          <p>
            <strong>Materials:</strong> {props.materials}
          </p>
        </div>
      </div>
    </article>
  )
}

export default GatheringSpot
