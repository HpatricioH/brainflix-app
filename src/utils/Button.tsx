import { Props } from "./models.d"

export const Button = ({children}: Props) => {
  return (
    <button className="h-[2.5rem] bg-[#0095FF] font-bold text-[#FFF] w-full rounded-[0.25rem] relative uppercase">{children}</button>
  )
}
