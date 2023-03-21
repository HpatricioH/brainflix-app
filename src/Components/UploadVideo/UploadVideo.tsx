import { Button } from '../../utils/Button'
import videoThumbnail from '../../assets/images/upload-image.webp'
import uploadIcon from '../../assets/icons/upload.svg'
import { Link } from 'react-router-dom'


export const UploadVideo = () => {
  return (
    <section className='px-4 border-t-[0.063rem] body-font font-avenir'>
      <h2 className='pt-[0.5rem] text-[1.5rem] font-bold'>Upload Video</h2>
      <h3 className='text-[0.750rem] text-[#AFAFAF] pt-[0.5rem] tracking-[0.04rem] uppercase font-bold'>Video Thumbnail</h3>
      <div>
        <img src={videoThumbnail} alt="video thumbnail" className='w-full rounded-[0.25rem] object-cover'/>
      </div>
      <form className='flex flex-col gap-3 pt-4'>
        <label htmlFor="title" className='text-[0.750rem] text-[#AFAFAF] pt-[0.5rem] tracking-[0.04rem] uppercase font-bold'>
          Title your video
        </label>
        <input type="text" name="title" id="title" placeholder='Add a title to your video' className='rounded-[0.25rem] border-[0.063rem] h-[2.5rem] p-[0.7rem] focus:outline-none focus:border-[#0065AD] bg-[#FAFAFA]'/>
        <label htmlFor="description" className='text-[0.750rem] text-[#AFAFAF] pt-[0.5rem] tracking-[0.04rem] uppercase font-bold'>
          Add a video description
        </label>
        <textarea name="description" id="description" placeholder='Add a description to your video' className='resize-none rounded-[0.25rem] border-[0.063rem] h-[8rem] p-[0.7rem] focus:outline-none focus:border-[#0065AD] bg-[#FAFAFA] mb-3'/>
        <Button icon={uploadIcon} link={'/'}>publish</Button>
        <Link to={'/'}>
          <p className='capitalize text-center text-[#0095FF] text-[1.2rem] font-bold mt-[0.8rem]'>cancel</p>
        </Link>
      </form>
    </section>
  )
}
