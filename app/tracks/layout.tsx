import Navbar from "@/components/layout/Navbar"
import Player from "@/components/player/Player"

export default function PlayerLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <Navbar />
        {children}
        <Player/>
      </section>
    )
  }