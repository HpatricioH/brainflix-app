import { useState } from 'react'
import { dateFormatter } from '../../utils/dateFormatter'
import { Videos }from '../../utils/models.d'
import deleteIcon from '../../assets/icons/icon-delete.svg'

interface VideoPlayerProps {
  singleVideo: Videos | null
}

export const CommentsCard = ({singleVideo}:VideoPlayerProps) => {

  const sortedComments = singleVideo?.comments?.sort((a:any, b:any) => b.timestamp - a.timestamp)  

  return (
    <section className='px-[1rem]'>
     {sortedComments?.map((comment:any) => {
      return (
        <div className='border-b border-[#AFAFAF] py-[1rem]'>
          <h3>{comment.name}</h3>
          <p>{dateFormatter(comment.timestamp)}</p>
          <p>{comment.comment}</p>
          <img src={deleteIcon} alt='delete icon' />
        </div>
      )
     })}
    </section>
  )
}
