import { useCallback, useEffect, useState } from 'react'
import { Videos } from '../utils/models.d'
import { useFetchVideo } from './useFetchVideo'

interface ReturnType {
  singleVideo: Videos | null;
  getSingleVideo: () => void;
};

export const useSingleVideo = (videoId: string): ReturnType => {
  const [singleVideo, setSingleVideo] = useState<Videos | null>(null)
  const { videos } = useFetchVideo()

  const getSingleVideo = useCallback(() => {
    if (videoId) {
      const video = videos?.find(video => video.id === videoId)
      setSingleVideo(video as Videos)
    } else {
      setSingleVideo(videos?.[0] as Videos)
    }
  }, [videos, videoId])

  useEffect(() => {
    getSingleVideo()
  }, [getSingleVideo, singleVideo])

  return { singleVideo, getSingleVideo }
}
