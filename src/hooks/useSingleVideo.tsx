import { useCallback, useEffect, useState } from 'react'
import { Videos } from '../utils/models.d'
import { useFetchVideo } from './useFetchVideo'

export const useSingleVideo = (videoId:string): Videos | null => {
  const { videos } = useFetchVideo()
  const [singleVideo, setSingleVideo] = useState<Videos | null>(null)
  const URL = 'http://localhost:8080/api/v1/videos'

  const getSingleVideo = useCallback(async () => {
    let currentVideo:string | undefined = videoId

    if (!videoId) currentVideo = videos?.[0]?.id


    const response = await fetch(`${URL}/${currentVideo}`, {
      method: 'GET'
    })
    const data = await response.json()
    setSingleVideo(data[0])
  }, [videoId, videos])

  useEffect(() => {
    getSingleVideo()
  }, [getSingleVideo, videoId])

  return singleVideo
}
