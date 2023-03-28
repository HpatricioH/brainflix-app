import { Videos } from '../../utils/models.d'
import play from '../../assets/icons/play.svg'
import fullScreen from '../../assets/icons/fullscreen.svg'
import volumeUp from '../../assets/icons/volume_up.svg'
import { VideoPlayerButton } from '../../utils/VideoPlayerButton'

interface VideoPlayerProps {
  singleVideo: Videos | null;
}

export const VideoPlayer = ({ singleVideo }:VideoPlayerProps) => {
  return (
    <section className="relative">
        <video poster={singleVideo?.image} className='object-cover aspect-video '>
          <source src={`${singleVideo?.video}`}></source>
        </video>
      <div className="absolute flex w-full bottom-4 justify-center align-baseline gap-2">
        <div className="flex items-center bg-[#000]/[.8] py-[0.2rem] px-[0.8rem] rounded-[0.25rem]">
          <VideoPlayerButton image={play} alt={'play button'} />
        </div>
        <div className="flex items-center bg-[#000]/[.8] py-[0.2rem] px-[0.8rem] rounded-[0.25rem]">
          <progress
            className="pt-[0.30rem] bg-[#AFAFAF] appearance-none h-1 rounded-full text-center place-self-center"
            value='0'
          >
          </progress>
        </div>
        <div className="flex items-center bg-[#000]/[.8] py-[0.2rem] px-[0.5rem] rounded-[0.25rem] gap-2">
          <VideoPlayerButton image={fullScreen} alt={'fullscreen button'} />
          <VideoPlayerButton image={volumeUp} alt={'volume button'} />
        </div>
      </div>
    </section>
  )
}
