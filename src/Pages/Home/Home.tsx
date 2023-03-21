// import { VideoPlayer } from "../../Components/VideoPlayer/VideoPlayer"
import { useParams } from 'react-router-dom'
import { useSingleVideo } from '../../hooks/useSingleVideo'
import { lazy, Suspense } from 'react'
import { VideoInformation } from '../../Components/VideoInformation/VideoInformation'
import { AddComment } from '../../Components/AddComment/AddComment'
import { CommentsCard } from '../../Components/CommentsCard/CommentsCard'
import { NextVideos } from '../../Components/NextVideos/NextVideos'

const VideoPlayer = lazy(async () =>
  await import('../../Components/VideoPlayer/VideoPlayer')
    .then(({ VideoPlayer }) => ({ default: VideoPlayer }))
)

export const Home = () => {
  const { videoId } = useParams<{videoId?: string}>()
  const singleVideo = useSingleVideo(videoId as string)

  return (
    <main className='body-font font-avenir'>
      <Suspense fallback={<div>Loading...</div>}>
        <VideoPlayer singleVideo={singleVideo}/>
        <VideoInformation singleVideo={singleVideo}/>
        <AddComment videoId={singleVideo?.id}/>
        <CommentsCard singleVideo={singleVideo}/>
        <NextVideos videoId={singleVideo?.id}/>
      </Suspense>
    </main>
  )
}
