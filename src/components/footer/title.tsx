interface TitleProps {
  title: string
}
export function Title({ title }: TitleProps) {
  return <h1 className="text-[1.3rem] font-medium text-textColor">{title}</h1>
}
