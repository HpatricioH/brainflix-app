import brainflixLogo from '../../assets/icons/brainflix-logo.svg'
import search from '../../assets/icons/search.svg'
import userLogo from '../../assets/images/Mohan-muruge.webp'
import upload from '../../assets/icons/upload.svg'
import { Button } from '../../utils/Button'

export const Header = () => {
  return (
    <header className='flex flex-col gap-4 p-[1rem]'>
      <img src={brainflixLogo} alt="brainflix logo" className='h-[1.563rem] w-[7.5rem] self-center'/>
      <div className='relative'>
        <input type="text" placeholder='Search' className='h-[2.5rem] w-full border rounded-[0.25rem] pl-8 bg-[#FAFAFA]'/>
        <img src={search} alt="search icon" className="absolute top-3 left-2"/>
      </div>
      <div className='flex gap-5'>
        <Button>
          Upload
          <img src={upload} alt="upload icon" className='absolute top-2 left-[0.5rem]'/>
        </Button>
        <img src={userLogo} alt="user logo" className="rounded-[50%] w-[2.25rem] h-[2.25rem] object-cover object-left"/>
      </div>
    </header>
  )
}
