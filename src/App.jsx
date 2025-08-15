import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="h-dvh bg-black"></div>
    </>
  )
}

export default App
