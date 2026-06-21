const getAllLocations = async () => {
  const response = await fetch('/gatheringSpots')
  const data = await response.json()
  return data
}

const getLocationById = async (id) => {
  const response = await fetch(`/gatheringSpots/${id}`)
  const data = await response.json()
  return data
}

export default {
  getAllLocations,
  getLocationById
}
