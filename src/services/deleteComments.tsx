
export const deleteComments = async ({ videoId, commentId }:any) => {
  const URL = 'http://localhost:8080/api/v1/videos/'

  const response = await fetch(`${URL}${videoId}/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.json()
}
