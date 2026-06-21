import { pool } from '../config/database.js'

const getGatheringSpots = async (req, res) => {
    try {
        const selectQuery = 'SELECT * FROM gathering_spots ORDER BY id ASC'
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

const getGatheringSpotById = async (req, res) => {
  try {
    const selectQuery = `
      SELECT 
        area,
        position,
        type,
        condition,
        materials
      FROM gathering_spots
      WHERE id = $1
    `

    const results = await pool.query(selectQuery, [req.params.gatheringSpotId])

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export default {
  getGatheringSpots: getGatheringSpots,
  getGatheringSpotById: getGatheringSpotById
}
