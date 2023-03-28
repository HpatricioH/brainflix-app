import { useState, useEffect, useCallback } from 'react'
import { fetchVideos } from '../services/fetchVideos'
import { Videos } from '../utils/models.d'

export const useFetchVideo = (videoId:string) => {
  const [videos, setVideos] = useState<Videos[] | null >(null)
  const [singleVideo, setSingleVideo] = useState<Videos | null>(null)
  const [newComment, setNewComment] = useState(false)
  const [deleteComment, setDeleteComment] = useState(false)
  const [loading, setLoading] = useState(false)

  const getVideos = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetchVideos()
      setVideos(response)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [fetchVideos, videoId, videos])

  useEffect(() => {
    getVideos()
    setNewComment(false)
    setDeleteComment(false)
  }, [videoId, newComment, deleteComment])

  // function to get only one video from the array of videos
  const getSingleVideo = useCallback(() => {
    if (videoId && !loading) {
      const video = videos?.find((video: { id: string }) => video.id === videoId)
      setSingleVideo(video as Videos)
    } else {
      setSingleVideo(videos?.[0] as Videos)
    }
  }, [videoId, videos])

  useEffect(() => {
    getSingleVideo()
  }, [getSingleVideo, videoId])

  return { videos, singleVideo, setNewComment, setDeleteComment }
}
