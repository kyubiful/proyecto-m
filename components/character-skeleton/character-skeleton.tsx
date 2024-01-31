import { IconSkeleton } from "./icon-skeleton"
import { TextSkeleton } from "./text-skeleton"

export const CharacterSkeleton = () => {
  return (
    <div className="max-w-[238px] w-full relative flex flex-col gap-2">
      <div className="relative w-full flex flex-col justify-center items-between bg-black/50 p-2 rounded gap-2">
        <div className="flex justify-center">
          <TextSkeleton />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col items-center gap-1">
            <IconSkeleton />
            <IconSkeleton />
            <IconSkeleton />
            <IconSkeleton />
            <IconSkeleton />
            <IconSkeleton />
            <IconSkeleton />
            <IconSkeleton />
          </div>
          <div className="flex flex-col items-center gap-1">
            <IconSkeleton />
            <IconSkeleton />
            <IconSkeleton />
            <IconSkeleton />
            <IconSkeleton />
            <IconSkeleton />
            <IconSkeleton />
            <IconSkeleton />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-row align-center gap-1">
            <IconSkeleton />
            <IconSkeleton />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <TextSkeleton className="h-6 w-20 bg-black/50" />
        <TextSkeleton className="bg-black/50" />
      </div>
    </div>
  )
}