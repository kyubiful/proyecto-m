import { type Gear } from "@/types/wow-character"
import { WowItem } from "../wow/wow-item"
import { XIcon } from "../icons/x"
import { TwitchIcon } from "../icons/twitch"

interface SocialMedia {
  x?: string
  twitch?: string
}

interface Props {
  character: Gear
  socialMedia?: SocialMedia
  tiers?: { [key: string]: any }
}

export const BottomItems = ({ character, socialMedia, tiers }: Props) => {
  return (
    <div className="flex flex-row justify-between items-center gap-1 z-10 w-full">
      {
        socialMedia?.x ?
          <a href={socialMedia.x} aria-label="link to twitter/X" className="size-10 flex justify-center items-center" target='_blank' rel='noreferrer'>
            <XIcon className="hover:text-white text-slate-400 transition-all" width={20} />
          </a> : <div className="size-10" />
      }
      <div className="flex flex-row gap-1">
        <WowItem item={character.items.mainhand} tiers={tiers} placeholderIcon="mainhand" />
        <WowItem item={character.items.offhand} tiers={tiers} placeholderIcon="offhand" />
      </div>
      {
        socialMedia?.twitch ?
          <a href={socialMedia.twitch} aria-label="link to twitch" className="size-10 flex justify-center items-center" target='_blank' rel='noreferrer'>
            <TwitchIcon className="hover:text-white text-slate-400 transition-all" width={20} />
          </a> : <div className="size-10" />
      }
    </div>
  )
}