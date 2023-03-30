import { dateFormatter } from '../../utils/dateFormatter'
import { type Videos } from '../../utils/models.d'
import views from '../../assets/icons/views.svg'
import likes from '../../assets/icons/likes.svg'
import { likeVideo } from '../../services/likeVideo'

interface VideoPlayerProps {
  singleVideo: Videos | null
  setLikedVideo: (value: boolean) => void
}

export const VideoInformation = ({ singleVideo, setLikedVideo }: VideoPlayerProps) => {
  const handleLikeVideo = async () => {
    await likeVideo({ videoId: singleVideo?.id })
    setLikedVideo(true)
  }

  return (
    <section className='px-[1rem]'>
      <h1 className='font-extrabold text-[1.5rem] pt-[1.5rem] pb-[0.5rem]'>{singleVideo?.title}</h1>
      <div className='flex gap-5'>
        <p className='font-semibold'>{singleVideo?.channel}</p>
        <p className='text-[#AFAFAF]'>{dateFormatter(Number(singleVideo?.timestamp))}</p>
      </div>
      <div className='flex gap-3 py-[1rem]'>
        <img src={views} alt="views icon" />
        <p>{singleVideo?.views}</p>
        <img src={likes} alt="likes icon" onClick={() => { void handleLikeVideo() }}/>
        <p>{singleVideo?.likes}</p>
      </div>
      <p className='pb-[1.25rem]'>{singleVideo?.description}</p>
      <p className='font-bold'>{singleVideo?.comments.length} Comments</p>
    </section>
  )
}
