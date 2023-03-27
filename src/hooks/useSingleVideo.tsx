import { useCallback, useEffect, useState } from 'react'
import { addComment } from '../services/addComment'
import { Videos } from '../utils/models.d'
import { useFetchVideo } from './useFetchVideo'

interface ReturnType {
  singleVideo: Videos | null;
  getSingleVideo: () => void;
  addNewComments: (comment: string) => Promise<void>;
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

  const addNewComments = useCallback(async (comment: string) => {
    await addComment({ videoId, comment: comment as string })
    console.log(comment)
  }, [videoId, addComment])

  useEffect(() => {
    getSingleVideo()
  }, [getSingleVideo, videoId, videos, addNewComments])

  return { singleVideo, getSingleVideo, addNewComments }
}
