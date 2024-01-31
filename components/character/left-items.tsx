import { type Gear } from "@/types/wow-character"
import { WowItem } from "../wow/wow-item"

interface Props {
  character: Gear
  tiers?: { [key: string]: any }
}

export const LeftItems = ({ character, tiers }: Props) => {
  return (
    <div className="flex flex-col items-center gap-1 z-10">
      <WowItem item={character.items.head} tiers={tiers} placeholderIcon="head" />
      <WowItem item={character.items.neck} tiers={tiers} placeholderIcon="neck" />
      <WowItem item={character.items.shoulder} tiers={tiers} placeholderIcon="shoulder" />
      <WowItem item={character.items.back} tiers={tiers} placeholderIcon="chest" />
      <WowItem item={character.items.chest} tiers={tiers} placeholderIcon="chest" />
      <WowItem item={character.items.shirt} tiers={tiers} placeholderIcon="shirt" />
      <WowItem item={character.items.tabard} tiers={tiers} placeholderIcon="tabard" />
      <WowItem item={character.items.wrist} tiers={tiers} placeholderIcon="wrists" />
    </div>
  )
}