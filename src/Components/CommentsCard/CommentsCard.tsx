import { dateFormatter } from '../../utils/dateFormatter'
import { type Videos } from '../../utils/models.d'
import deleteIcon from '../../assets/icons/icon-delete.svg'

interface VideoPlayerProps {
  singleVideo: Videos | null
}

export const CommentsCard = ({ singleVideo }: VideoPlayerProps) => {
  const sortedComments = singleVideo?.comments?.sort((a: any, b: any) => b.timestamp - a.timestamp)

  return (
    <section className='px-[1rem]'>
     {sortedComments?.map((comment: any) => {
       return (
        <div className='flex gap-4 border-b border-[#AFAFAF] py-[1rem]' key={comment.id}>
          <div className='bg-[#E1E1E1] rounded-[50%] w-[2.25rem] h-[2.25rem] p-[1rem]'></div>
          <div className='flex flex-col w-full'>
            <div className='flex justify-between'>
              <h3 className='font-semibold'>{comment.name}</h3>
              <p>{dateFormatter(Number(comment.timestamp))}</p>
            </div>
            <p>{comment.comment}</p>
            <img src={deleteIcon} alt='delete icon' className='w-[0.80rem] self-end' />
          </div>
        </div>
       )
     })}
    </section>
  )
}
