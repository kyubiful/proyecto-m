import { type Gear } from "@/types/wow-character"
import { WowItem } from "../wow/wow-item"

interface Props {
  character: Gear
  tiers?: { [key: string]: any }
}

export const RightItems = ({ character, tiers }: Props) => {
  return (
    <div className="flex flex-col items-center gap-1 z-10">
      <WowItem item={character.items.hands} tiers={tiers} placeholderIcon="hands" />
      <WowItem item={character.items.waist} tiers={tiers} placeholderIcon="waist" />
      <WowItem item={character.items.legs} tiers={tiers} placeholderIcon="legs" />
      <WowItem item={character.items.feet} tiers={tiers} placeholderIcon="feet" />
      <WowItem item={character.items.finger1} tiers={tiers} placeholderIcon="finger" />
      <WowItem item={character.items.finger2} tiers={tiers} placeholderIcon="finger" />
      <WowItem item={character.items.trinket1} tiers={tiers} placeholderIcon="trinket" />
      <WowItem item={character.items.trinket2} tiers={tiers} placeholderIcon="trinket" />
    </div>
  )
}