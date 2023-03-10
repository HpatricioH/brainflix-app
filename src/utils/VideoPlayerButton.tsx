interface VideoPlayerButtonProps {
  image: string;
  alt: string;
}

export const VideoPlayerButton = ({ image, alt }: VideoPlayerButtonProps) => {
  return (
    <button type="button">
      <img src={image} alt={alt} />
    </button>
  )
}
