
export const fetchVideos = async () => {
  const URL = 'http://localhost:8080/api/v1/videos'

  const response = await fetch(`${URL}`, {
    method: 'GET'
  })
  return await response.json()
}
