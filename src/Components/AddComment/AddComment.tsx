import { Button } from '../../utils/Button'
import userPhoto from '../../assets/images/Mohan-muruge.webp'
import addCommentIcon from '../../assets/icons/add_comment.svg'

export const AddComment = () => {
  // TODO: Add functionality to add comment

  return (
    <section className='p-[1rem] flex gap-[0.55rem] border-b border-[#AFAFAF]'>
      <div className='mt-[0.5rem]'>
        <img src={userPhoto} alt="user picture" className='rounded-[50%] w-[2.25rem] h-[2.25rem] object-cover object-left' />
      </div>
      <form className='flex flex-col w-full gap-3'>
        <label className='text-[#AFAFAF] uppercase font-bold text-[0.85rem] tracking-wide'>joint the conversation</label>
        <textarea placeholder="Add a Comment" className='resize-none rounded-[0.25rem] border-[0.063rem] h-[6rem] p-[0.30rem] focus:outline-none focus:border-[#0065AD]' />
        <Button image={addCommentIcon}>Comment</Button>
      </form>
    </section>
  )
}
