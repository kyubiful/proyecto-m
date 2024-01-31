import { cn } from "@/lib/utils"
import { type Item } from "@/types/wow-character"
import Image from "next/image"

type PlaceholderIcon = "head" | "neck" | "shoulder" | "chest" | "shirt" | "tabard" | "wrists" | "hands" | "waist" | "legs" | "feet" | "finger" | "trinket" | "mainhand" | "offhand"

interface Props {
  item: Item,
  placeholderIcon?: PlaceholderIcon
  tiers?: { [key: string]: any }
}

const placeholderIcons: { [index: string]: string } = {
  head: "bg-[url('../public/wow-items/slots/head.jpg')]",
  neck: "bg-[url('../public/wow-items/slots/neck.jpg')]",
  shoulder: "bg-[url('../public/wow-items/slots/shoulder.jpg')]",
  chest: "bg-[url('../public/wow-items/slots/chest.jpg')]",
  shirt: "bg-[url('../public/wow-items/slots/shirt.jpg')]",
  tabard: "bg-[url('../public/wow-items/slots/tabard.jpg')]",
  wrists: "bg-[url('../public/wow-items/slots/wrists.jpg')]",
  hands: "bg-[url('../public/wow-items/slots/hands.jpg')]",
  waist: "bg-[url('../public/wow-items/slots/waist.jpg')]",
  legs: "bg-[url('../public/wow-items/slots/legs.jpg')]",
  feet: "bg-[url('../public/wow-items/slots/feet.jpg')]",
  finger: "bg-[url('../public/wow-items/slots/finger.jpg')]",
  trinket: "bg-[url('../public/wow-items/slots/trinket.jpg')]",
  mainhand: "bg-[url('../public/wow-items/slots/mainhand.jpg')]",
  offhand: "bg-[url('../public/wow-items/slots/offhand.jpg')]"
}

export const WowItem = ({ item, placeholderIcon = 'chest', tiers }: Props) => {
  return (
    <div
      className={cn(placeholderIcons[placeholderIcon], 'bg-cover bg-center bg-no-repeat rounded size-10 flex items-center justify-center')}
    >
      {item &&
        <a
          className="size-11 flex justify-center items-center"
          aria-label={`Item ${item?.name} en Wowhead`}
          href={`https://wowhead.com/item=${item?.item_id}&ilvl=${item?.item_level
            }&gems=${item?.gems.toString().replaceAll(",", ":")}&bonus=${item?.bonuses
              .toString()
              .replaceAll(",", ":")}&pcs=${item?.tier !== '' && item?.tier !== undefined && tiers && tiers[item?.tier].toString().replaceAll(",", ":")}`}
        />
      }
    </div>
  )
}