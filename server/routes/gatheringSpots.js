import express from 'express'
import GatheringSpotController from '../controllers/gatheringSpots.js'

const router = express.Router()

router.get('/', GatheringSpotController.getGatheringSpots)

router.get('/:gatheringSpotId', GatheringSpotController.getGatheringSpotById)

export default router
