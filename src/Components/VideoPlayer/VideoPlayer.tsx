import { FC } from "react";
import { Videos } from "../../utils/models.d";
import { VideoPlayerButton } from "../../utils/VideoPlayerButton";

interface VideoPlayerProps {
  singleVideo: Videos | null
}

export const VideoPlayer: FC<VideoPlayerProps> = ({singleVideo}) => {
  
  return (
    <section>
      <video poster={singleVideo?.image}>
        <source src={`${singleVideo?.video}`}></source>
      </video>
      <progress 
        className="video-controls__progress-bar"
        value="0"
        min='0'>
        </progress>
        <p className="video-controls__time">0:00 / {singleVideo?.duration}</p>
    </section>
  )
}
