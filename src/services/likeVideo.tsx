
export const likeVideo = async ({ videoId }:any) => {
  const URL = 'http://localhost:8080/api/v1/videos/'

  const response = await fetch(`${URL}${videoId}/likes`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.json()
}
