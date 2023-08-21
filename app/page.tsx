import Navbar from "@/components/layout/Navbar"
import style from './page.module.css'
import Player from "@/components/player/Player"

export default function Page() {
  

  return (
    <main>
      <Navbar />
      <div className={style.center}>
        <h1>SoundPlayer</h1>
        <h3>Best music player in the world!</h3>
      </div>
      <Player />
    </main>
  )
}
