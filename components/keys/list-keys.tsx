import { type MythicPlusBestRun, type WowCharacter } from "@/types/wow-character"
import { Key } from "./key"

const mythicPlus: MythicPlusBestRun[] = [
  {
    affixes: [],
    short_name: 'WM',
    dungeon: 'Waycrest Manor',
    score: 0,
  },
  {
    affixes: [],
    short_name: 'AD',
    dungeon: 'Atal\'Dazar',
    score: 0,

  },
  {
    affixes: [],
    short_name: 'BRH',
    score: 0,
    dungeon: 'Black Rook Hold'
  },
  {
    affixes: [],
    short_name: 'DHT',
    score: 0,
    dungeon: 'Darkheart Thicket'
  },
  {
    affixes: [],
    short_name: 'EB',
    score: 0,
    dungeon: 'The Everbloom'
  },
  {
    affixes: [],
    short_name: 'FALL',
    score: 0,
    dungeon: 'DOTI: Galakrond\'s Fall'
  },
  {
    affixes: [],
    short_name: 'RISE',
    score: 0,
    dungeon: 'DOTI: Murozond\'s Rise'
  },
  {
    affixes: [],
    short_name: 'TOTT',
    score: 0,
    dungeon: 'Throne of the Tides'
  }
]

const ListKeys = async () => {
  const response = await fetch("https://raider.io/api/v1/characters/profile?region=eu&realm=uldum&name=peruana&fields=mythic_plus_best_runs,mythic_plus_alternate_runs", { cache: "no-cache" })

  const character: WowCharacter = await response.json()

  console.log(character)

  const tyrannical: MythicPlusBestRun[] = [...mythicPlus]
  const fortified: MythicPlusBestRun[] = [...mythicPlus]

  character.mythic_plus_best_runs.forEach((d: MythicPlusBestRun) => {
    if (d.affixes?.find(element => element.name === 'Tyrannical')) {
      const index = tyrannical.findIndex(element => element.short_name === d.short_name)
      if (index !== -1) {
        tyrannical[index] = d
      }
      return
    }
    const index = fortified.findIndex(element => element.short_name === d.short_name)
    if (index !== -1) {
      fortified[index] = d
    }
  })

  character.mythic_plus_alternate_runs.forEach((d: MythicPlusBestRun) => {
    if (d.affixes?.find(element => element.name === 'Tyrannical')) {
      const index = tyrannical.findIndex(element => element.short_name === d.short_name)
      if (index !== -1) {
        tyrannical[index] = d
      }
      return
    }
    const index = fortified.findIndex(element => element.short_name === d.short_name)
    if (index !== -1) {
      fortified[index] = d
    }
  })

  return (
    <section className="flex flex-col justify-center items-center gap-4 bg-black/50 rounded p-6">
      <div className="flex gap-4 flex-wrap justify-center items-center">
        <p className="text-white text-2xl w-28">Tyrannical</p>
        <div className="flex gap-4 flex-wrap justify-center items-center">
          {
            tyrannical?.map((dungeon: MythicPlusBestRun) => <Key dungeon={dungeon} key={dungeon.short_name} />)
          }
        </div>
      </div>
      <div className="flex gap-4 flex-wrap justify-center items-center">
        <p className="text-white text-2xl w-28">Fortified</p>
        <div className="flex gap-4 flex-wrap justify-center items-center">
          {
            fortified?.map((dungeon: MythicPlusBestRun) => <Key dungeon={dungeon} key={dungeon.short_name} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ListKeys