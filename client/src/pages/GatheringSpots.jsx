import { useParams } from 'react-router-dom'
import AreaGatheringSpots from '../pages/AreaGatheringSpots'

const GatheringSpots = () => {
  const { area } = useParams()

  return (
    <div>
      <AreaGatheringSpots area={area ? Number(area) : null} />
    </div>
  )
}

export default GatheringSpots
