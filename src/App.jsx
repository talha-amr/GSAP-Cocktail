import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {

  return (
    <>
      <div className="flex-center h-[100vh]">
      <div className="text-3xl text-indigo-300 ">hello gsap</div>
      </div>
    </>
  )
}

export default App
