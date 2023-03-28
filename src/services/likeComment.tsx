
export const likeComment = async ({ videoId, commentId }: any) => {
  const URL = 'http://localhost:8080/api/v1/videos/'

  const response = await fetch(`${URL}${videoId}/comments/${commentId}/likes`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.json()
}
