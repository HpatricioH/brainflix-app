// import { VideoPlayer } from "../../Components/VideoPlayer/VideoPlayer"
import { useParams } from 'react-router-dom'
import { useSingleVideo } from '../../hooks/useSingleVideo'
import { lazy, Suspense } from 'react'
import { VideoInformation } from '../../Components/VideoInformation/VideoInformation'

const VideoPlayer = lazy(() =>
  import('../../Components/VideoPlayer/VideoPlayer')
    .then(({ VideoPlayer }) => ({ default: VideoPlayer }))
)

export const Home = () => {
  const { videoId } = useParams<{ videoId: string }>()
  const singleVideo = useSingleVideo(videoId as string)

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <VideoPlayer singleVideo={singleVideo}/>
        <VideoInformation singleVideo={singleVideo}/>
      </Suspense>
    </main>
  )
}
