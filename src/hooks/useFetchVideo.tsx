import { useState, useEffect, useCallback } from 'react'
import { fetchVideos } from '../services/fetchVideos'
import { Videos } from '../utils/models.d'

export const useFetchVideo = () => {
  const [videos, setVideos] = useState<Videos[] | null >(null)

  const getVideos = useCallback(async () => {
    const response = await fetchVideos()
    setVideos(response)
  }, [])
  
  useEffect(() => {
    getVideos()
   }, [])

  return {videos}
}
