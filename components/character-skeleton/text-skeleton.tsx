import { cn } from "@/lib/utils"

interface Props {
  className?: string
}

export const TextSkeleton = ({ className }: Props) => {
  return (<div className={cn("w-32 h-5 animate-pulse bg-gray-600 rounded my-1", className)} />)
}