
export const addComment = async ({ videoId, comment }: any) => {
  const URL = 'http://localhost:8080/api/v1/videos/'

  const response = await fetch(`${URL}${videoId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ comment, name: 'Mohan Muruge', timestamp: Date.now().toString() })
  })

  return response.json()
}
