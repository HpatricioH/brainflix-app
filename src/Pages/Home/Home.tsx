import { useParams } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { VideoInformation } from '../../Components/VideoInformation/VideoInformation'
import { AddComment } from '../../Components/AddComment/AddComment'
import { CommentsCard } from '../../Components/CommentsCard/CommentsCard'
import { NextVideos } from '../../Components/NextVideos/NextVideos'
import { useFetchVideo } from '../../hooks/useFetchVideo'

const VideoPlayer = lazy(async () =>
  await import('../../Components/VideoPlayer/VideoPlayer')
    .then(({ VideoPlayer }) => ({ default: VideoPlayer }))
)

export const Home = () => {
  const { videoId } = useParams<{ videoId?: string }>()
  const {
    singleVideo,
    setNewComment,
    setDeleteComment,
    setLikedComment,
    setLikedVideo,
    videos
  } = useFetchVideo(videoId as string)

  return (
    <main className='body-font font-avenir'>
      <Suspense fallback={<div>Loading...</div>}>
        <VideoPlayer singleVideo={singleVideo}/>
        <VideoInformation singleVideo={singleVideo} setLikedVideo={setLikedVideo}/>
        <AddComment videoId={singleVideo?.id} setNewComment={setNewComment}/>
        <CommentsCard singleVideo={singleVideo} setDeleteComment={setDeleteComment} setLikedComment={setLikedComment}/>
        <NextVideos videoId={singleVideo?.id} videos={videos}/>
      </Suspense>
    </main>
  )
}
