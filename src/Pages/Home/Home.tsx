import { VideoPlayer } from "../../Components/VideoPlayer/VideoPlayer"
import { useFetchVideo } from "../../hooks/useFetchVideo"


export const Home = () => {
  const {videos} = useFetchVideo()

  console.log(videos);

  return (
    <main>
      <VideoPlayer/>
    </main>
  )
}
