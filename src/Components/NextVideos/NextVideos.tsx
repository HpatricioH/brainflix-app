import { Link } from 'react-router-dom'
import { type id } from '../../utils/models.d'

export const NextVideos = ({ videoId, videos }: id) => {
  const filterVideo = videos?.filter((video) => video.id !== videoId)

  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <section className='px-4 mt-6'>
      <h2 className='font-semibold mb-4 text-[#AFAFAF]'>Next Videos</h2>
      <ul>
        {filterVideo?.map((video) => {
          return (
            <li key={video.id} className='mb-[1rem]'>
              <Link to={`/videos/${video.id}`} onClick={handleClick} className='flex gap-3'>
                <div className='max-w-[7.10rem] max-h-[4.50rem] rounded-[0.25rem]'>
                  <img src={video.image} alt='video thumbnail' className='object-cover w-full h-full rounded-[0.25rem]' />
                </div>
                <div className='flex flex-col'>
                  <p className='leading-snug'>
                    <span className='line-clamp-2 pr-2'>
                      {video.title}
                    </span>
                    <span >
                      {video.channel}
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          )
        })
        }
      </ul>
    </section>
  )
}
