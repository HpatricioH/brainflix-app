import { dateFormatter } from '../../utils/dateFormatter'
import { type Videos } from '../../utils/models.d'
import { deleteComments } from '../../services/deleteComments'
import deleteIcon from '../../assets/icons/icon-delete.svg'
import likeIcon from '../../assets/icons/likes.svg'
import { likeComment } from '../../services/likeComment'
interface VideoPlayerProps {
  singleVideo: Videos | null
  setDeleteComment: (value: boolean) => void
  setLikedComment: (value: boolean) => void
}

export const CommentsCard = ({ singleVideo, setDeleteComment, setLikedComment }: VideoPlayerProps) => {
  const sortedComments = singleVideo?.comments?.sort((a: any, b: any) => b.timestamp - a.timestamp)

  const handleClick = async (id: string) => {
    try {
      await deleteComments({ videoId: singleVideo?.id, commentId: id })
      setDeleteComment(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleLike = async (id: string) => {
    try {
      await likeComment({ videoId: singleVideo?.id, commentId: id })
      setLikedComment(true)
    } catch (error) {
      console.log(error)
    }
  }

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
            <div className='flex gap-5 justify-end'>
              <img src={likeIcon} alt='delete icon' className='w-[1rem]' onClick={ () => { void handleLike(comment.id) }}/>
              <p>{comment.likes}</p>
              <img src={deleteIcon} alt='delete icon' className='w-[0.80rem]' onClick={ () => { void handleClick(comment.id) }}/>
            </div>
          </div>
        </div>
       )
     })}
    </section>
  )
}
