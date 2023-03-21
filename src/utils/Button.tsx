import { Props } from './models.d'
import { useNavigate } from 'react-router-dom'

export const Button = ({ children, image, link }: Props) => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate(link as string)
  }
  
  return (
    <div className='w-full' onClick={handleClick}>
      <button className="h-[2.5rem] bg-[#0095FF] font-bold text-[#FFF] w-full rounded-[0.25rem] relative uppercase">{children}
      <img src={image} alt="button icon" className='absolute top-2 left-[0.5rem]'/>
      </button>
    </div>
  )
}
