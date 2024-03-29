import { extractTier } from "@/lib/utils"
import { Character } from "../character/character"
import { CharacterSkeleton } from "../character-skeleton/character-skeleton"

const DpsOne = async () => {
  const response = await fetch(
    "https://raider.io/api/v1/characters/profile?region=eu&realm=zuljin&name=apomental&fields=gear,talents,mythic_plus_ranks,mythic_plus_scores_by_season:current", { cache: "no-cache" }
  )
  const character = await response.json()

  if (character.statusCode === 400) {
    return <CharacterSkeleton />
  }

  const tiers = extractTier(character.gear.items)

  const socialMedia = {
    twitch: 'https://www.twitch.tv/apo_wow',
    x: 'https://twitter.com/Apo_wow'
  }

  return (
    <Character character={character} socialMedia={socialMedia} tiers={tiers} />
  )
}

export default DpsOne