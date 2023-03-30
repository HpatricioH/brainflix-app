import { Button } from '../../utils/Button'
import userPhoto from '../../assets/images/Mohan-muruge.webp'
import addCommentIcon from '../../assets/icons/add_comment.svg'
import { type id } from '../../utils/models.d'
import React, { useState } from 'react'
import { addComment } from '../../services/addComment'

export const AddComment = ({ videoId, setNewComment }: id | any) => {
  const [formValidation, setFormValidation] = useState(false)
  const [messageError, setMessageError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const { comment } = Object.fromEntries(
      new FormData(e.currentTarget)
    )

    if (comment) {
      await addComment({ videoId, comment })
      setNewComment(true)
      form.reset()
    } else {
      setFormValidation(true)
      setMessageError('Please fill the comment field')
    }
  }

  return (
    <section className='p-[1rem] flex gap-[0.55rem] border-b border-[#AFAFAF]'>
      <div className='mt-[0.5rem]'>
        <img src={userPhoto} alt='user picture' className='rounded-[50%] w-[2.25rem] h-[2.25rem] object-cover object-left' />
      </div>
      <form className='flex flex-col w-full gap-3' onSubmit={() => handleSubmit}>
        <label className='text-[#AFAFAF] uppercase font-bold text-[0.85rem] tracking-wide'>joint the conversation</label>
        <textarea
          placeholder='Add a Comment'
          className={formValidation
            ? 'resize-none rounded-[0.25rem] border-[0.063rem] h-[6rem] p-[0.30rem] border-[red] focus:outline-none focus:border-[#0065AD]'
            : 'resize-none rounded-[0.25rem] border-[0.063rem] h-[6rem] p-[0.30rem] focus:outline-none focus:border-[#0065AD]'}
          name='comment'
          id='comment'/>
        {formValidation && <p className='text-red-500'>{messageError}</p>}
        <Button icon={addCommentIcon}>Comment</Button>
      </form>
    </section>
  )
}
