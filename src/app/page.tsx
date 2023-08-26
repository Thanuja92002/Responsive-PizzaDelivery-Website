import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'

export default function Home() {
  return (

    <main>
      <div className="bg-black">
      <Slider/>
      <Featured/>
      <Offer/>
      </div>
    </main>
  )
}

