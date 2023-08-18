import Navbar from "@/components/Navbar"
import style from './page.module.css'

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className={style.center}>
        <h1>SoundPlayer</h1>
        <h3>Best music player in the world!</h3>
      </div>
    </main>
  )
}
