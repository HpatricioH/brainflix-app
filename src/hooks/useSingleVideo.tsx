import { useCallback, useEffect, useState } from 'react'
import { Videos } from '../utils/models.d'
import { useFetchVideo } from './useFetchVideo'

interface ReturnType {
  singleVideo: Videos | null;
  getSingleVideo: () => void;
  error: string | null;
};

export const useSingleVideo = (videoId:string): ReturnType => {
  const { videos } = useFetchVideo()
  const [singleVideo, setSingleVideo] = useState<Videos | null >(null)
  const [error, setError] = useState<string | null>(null)
  const URL = 'http://localhost:8080/api/v1/videos'

  const getSingleVideo = useCallback(async () => {
    try {
      let currentVideo:string | undefined = videoId

      if (!currentVideo) currentVideo = videos?.[0]?.id

      const response = await fetch(`${URL}/${currentVideo}`)
      const data = await response.json()

      setSingleVideo(data[0])
    } catch (error:any) {
      setError(error.message)
    }
  }, [videoId, videos])

  console.log(singleVideo)

  useEffect(() => {
    getSingleVideo()
  }, [videoId])

  return { singleVideo, getSingleVideo, error }
}
