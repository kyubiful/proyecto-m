import { cn } from "@/lib/utils"
import { MythicPlusBestRun } from "@/types/wow-character"

interface Props {
  dungeon: MythicPlusBestRun
}

const keys: { [index: string]: string } = {
  AD: "bg-[url('../public/dungeons/ad.jpeg')]",
  BRH: "bg-[url('../public/dungeons/brh.jpeg')]",
  DHT: "bg-[url('../public/dungeons/dht.jpg')]",
  EB: "bg-[url('../public/dungeons/eb.jpg')]",
  FALL: "bg-[url('../public/dungeons/fall.jpg')]",
  RISE: "bg-[url('../public/dungeons/rise.jpg')]",
  TOTT: "bg-[url('../public/dungeons/tott.jpg')]",
  WM: "bg-[url('../public/dungeons/wm.jpg')]"
}

export const Key = ({ dungeon }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="group cursor-pointer relative inline-block">
        <div data-tooltip-target="tooltip-default" className={cn(keys[dungeon.short_name], 'size-10 flex items-center justify-center rounded cursor-default')} >
          <p className="text-bold text-white text-xl [text-shadow:1px_1px_0_#000,-1px_1px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000] cursor-default">{dungeon.mythic_level}</p>
        </div>
        <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 -ml-4 mb-2 px-3 pointer-events-none">
          {dungeon.dungeon}
          <svg className="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
        </div>
      </div>
      <div>
        <p className="text-white h-6">{dungeon.score}</p>
      </div>
      <div className="flex w-[78px] h-[26px] justify-between items-center">
        {dungeon.affixes.length !== 0 ? dungeon.affixes.map((affix) => {
          return (
            <div className="size-[26px]" key={affix.id} >
              <a data-wh-icon-size="small" aria-label={`link to wowhead affix ${affix.id}`} href={affix.wowhead_url} />
            </div>
          )
        }) : <><div className="size-[20.5px] bg-gray-500/50 rounded" /><div className="size-[20.5px] bg-gray-500/50 rounded" /><div className="size-[20.5px] bg-gray-500/50 rounded" /></>}
      </div>
    </div>
  )
}