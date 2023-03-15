import { Props } from './models.d'

export const Button = ({ children, image }: Props) => {
  return (
    <button className="h-[2.5rem] bg-[#0095FF] font-bold text-[#FFF] w-full rounded-[0.25rem] relative uppercase">{children}
    <img src={image} alt="button icon" className='absolute top-2 left-[0.5rem]'/>
    </button>
  )
}
