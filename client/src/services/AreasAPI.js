const getAllAreas = async () => {
  const response = await fetch('/gatheringSpots')
  const data = await response.json()
  return data
}

const getAreaById = async (id) => {
  const response = await fetch(`/gatheringSpots/${id}`)
  const data = await response.json()
  return data
}

export default {
  getAllAreas,
  getAreaById
}
