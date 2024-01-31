import { type WowCharacter } from "@/types/wow-character"
import Image from "next/image"
import { LeftItems } from "./left-items"
import { RightItems } from "./right-items"
import { BottomItems } from "./bottom-items"

interface SocialMedia {
  x?: string
  twitch?: string
}

interface Props {
  character: WowCharacter
  socialMedia?: SocialMedia,
  tiers?: { [key: string]: any }
}

export const Character = ({ character, socialMedia, tiers }: Props) => {
  const characterImage = character.thumbnail_url.replace('avatar.jpg', 'main-raw.png')

  return (
    <div className="max-w-[238px] w-full relative flex flex-col gap-2">
      <div className="relative w-full flex flex-col justify-center items-between bg-black/50 p-2 rounded gap-2 overflow-hidden">
        <Image className="absolute scale-[200%]" src={characterImage} alt={character.name} width={1000} height={1000} />
        <h2 className="w-full text-center text-xl text-white">{character.name}</h2>
        <div className="flex justify-between">
          <LeftItems character={character.gear} tiers={tiers} />
          <RightItems character={character.gear} tiers={tiers} />
        </div>
        <div className="flex justify-center">
          <BottomItems character={character.gear} socialMedia={socialMedia} tiers={tiers} />
        </div>
      </div>
      <div className="text-white flex flex-col justify-center items-center">
        <p className="px-2 py-1 border rounded border-gray-400 text-green-400 bg-black/50">{character.mythic_plus_scores_by_season[0]?.scores.all}</p>
        <p>Best Mythic+ Score</p>
      </div>
    </div>
  )
}