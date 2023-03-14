import { dateFormatter } from '../../utils/dateFormatter'
import { Videos } from '../../utils/models.d'
import views from '../../assets/icons/views.svg'
import likes from '../../assets/icons/likes.svg'

interface VideoPlayerProps {
  singleVideo: Videos | null
}

export const VideoInformation = ({ singleVideo }:VideoPlayerProps) => {
  console.log(singleVideo)
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
        <img src={likes} alt="likes icon" />
        <p>{singleVideo?.likes}</p>
      </div>
      <p className='pb-[1.25rem]'>{singleVideo?.description}</p>
      <p className='font-bold'>{singleVideo?.comments.length} Comments</p>
    </section>
  )
}
