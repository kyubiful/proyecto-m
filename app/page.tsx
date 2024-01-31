import DpsOne from "@/components/characters/dps-one"
import DpsTwo from "@/components/characters/dps-two"
import DpsThree from "@/components/characters/dps-three"
import Healer from "@/components/characters/healer"
import Tank from "@/components/characters/tank"
import { Suspense } from "react"
import { CharacterSkeleton } from "@/components/character-skeleton/character-skeleton"
import ListKeys from "@/components/keys/list-keys"
import { KeysSkeleton } from "@/components/keys-skeleton/keys-skeleton"

export default async function Home() {

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-10 pt-10 md:pb-10 animate-fade-in">
      <div className="max-w-[1350px] w-full flex flex-col gap-5">
        <section className="flex flex-col gap-5 w-full items-center">
          <h2 className="text-white text-3xl">Characters</h2>
          <div className="flex gap-10 w-full flex-wrap justify-center">
            <Suspense fallback={<CharacterSkeleton />}>
              <DpsOne />
            </Suspense>
            <Suspense fallback={<CharacterSkeleton />}>
              <DpsTwo />
            </Suspense>
            <Suspense fallback={<CharacterSkeleton />}>
              <Tank />
            </Suspense>
            <Suspense fallback={<CharacterSkeleton />}>
              <Healer />
            </Suspense>
            <Suspense fallback={<CharacterSkeleton />}>
              <DpsThree />
            </Suspense>
          </div>
        </section>
        <section className="flex flex-col gap-5 w-full items-center">
          <p className="text-3xl text-white">Dungeons</p>
          <Suspense fallback={<KeysSkeleton />}>
            <ListKeys />
          </Suspense>
        </section>
      </div>
    </main>
  )
}
