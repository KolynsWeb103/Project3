import React, { useState, useEffect } from 'react'
import '../css/GatheringSpot.css'

const GatheringSpot = (props) => {

    const [gatheringSpot, setGatheringSpot] = useState([])
    const [time, setTime] = useState([])
    const [remaining, setRemaining] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const gatheringSpotData = await GatheringSpotsAPI.getGatheringSpotsById(props.id)
                setGatheringSpot(gatheringSpotData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const result = await dates.formatTime(gatheringSpot.time)
                setTime(result)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [gatheringSpot])

    useEffect(() => {
        (async () => {
            try {
                const timeRemaining = await dates.formatRemainingTime(gatheringSpot.remaining)
                setRemaining(timeRemaining)
                dates.formatNegativeTimeRemaining(remaining, gatheringSpot.id)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [gatheringSpot])

    return (
        <article className='gatheringSpot-information'>
            <img src={gatheringSpot.image} />

            <div className='gatheringSpot-information-overlay'>
                <div className='text'>
                    <h3>{gatheringSpot.title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {gatheringSpot.date} <br /> {time}</p>
                    <p id={`remaining-${gatheringSpot.id}`}>{remaining}</p>
                </div>
            </div>
        </article>
    )
}

export default GatheringSpot
