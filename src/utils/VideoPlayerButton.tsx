export const VideoPlayerButton = (image: string, alt: string) => {
  return (
    <button  type="button">
      <img src={image} alt={alt}/>
    </button>
  )
}
