import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
const Hero = () => {
    useGSAP(()=>{
        const heroTextSplit= new SplitText('.title',{
            type: 'chars, words'
        })
        const paragraphTextSplit= new SplitText('.subtitle',{
            type: 'lines'
        })
        let tl = gsap.timeline();
        heroTextSplit.chars.forEach((element) => 
            element.classList.add("text-gradient")
        );
        tl.from(heroTextSplit.chars, {
            yPercent: 100,
            stagger: 0.06,
            ease: 'expo.out',
            duration: 1
        })
        .from(paragraphTextSplit.lines, {
            yPercent: 100,
            stagger: 0.06,
            opacity: 0,
            ease: 'expo.out',
            duration: 1
        }, "-=0.8");
        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                scrub: true,
                start: 'top top',
                end: 'bottom top'
            }
        })
        .to('.right-leaf', {
            y: 200
        }, 0)
        .to('.left-leaf', {
            y: -200
        }, 0);

    },[])
  return (
   <>
  <section id="hero" className="noisy">
		<h1 className="title">MOJITO</h1>
		
		<img
		 src="/images/hero-left-leaf.png"
		 alt="left-leaf"
		 className="left-leaf"
		/>
		<img
		 src="/images/hero-right-leaf.png"
		 alt="right-leaf"
		 className="right-leaf"
		/>
		
		<div className="body">
		 {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}
		 
		 <div className="content">
			<div className="space-y-5 hidden md:block">
			 <p>Cool. Crisp. Classic.</p>
			 <p className="subtitle">
				Sip the Spirit <br /> of Summer
			 </p>
			</div>
			
			<div className="view-cocktails">
			 <p className="subtitle">
				Every cocktail on our menu is a blend of premium ingredients,
				creative flair, and timeless recipes — designed to delight your
				senses.
			 </p>
			 <a href="#cocktails">View cocktails</a>
			</div>
		 </div>
		</div>
	 </section>
   </>
  )
}

export default Hero
