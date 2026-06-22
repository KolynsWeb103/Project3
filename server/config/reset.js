import { pool } from './database.js'
import './dotenv.js'
import gatheringSpotData from '../data/gatheringSpots.js'

const createGatheringSpotsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS gathering_spots;

        CREATE TABLE IF NOT EXISTS gathering_spots (
            id VARCHAR(255) PRIMARY KEY,
            area INTEGER NOT NULL,
            position INTEGER NOT NULL,
            type VARCHAR(255) NOT NULL,
            condition VARCHAR(255) NOT NULL,
            materials TEXT[] NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 gathering_spots table created successfully')
    } catch (err) {
        console.error('⚠️ error creating gathering_spots table', err)
    }
}

const seedGatheringSpotsTable = async () => {
    await createGatheringSpotsTable()

    gatheringSpotData.forEach((spot) => {
        const insertQuery = {
            text: `
                INSERT INTO gathering_spots 
                (id, area, position, type, condition, materials) 
                VALUES ($1, $2, $3, $4, $5, $6)
            `
        }

        const values = [
            spot.id,
            spot.area,
            spot.position,
            spot.type,
            spot.condition,
            spot.materials
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting gathering spot', err)
                return
            }

            console.log(`✅ ${spot.id} added successfully`)
        })
    })
}

seedGatheringSpotsTable()
