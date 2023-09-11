import gsap from "gsap";
var clicker=false
const plus= document.querySelector('.plus')
plus.addEventListener("click",()=>{
  if(clicker){
    gsap.to('.plus',{
      transform: 'rotate(0deg)',
      duration:0.2,
      ease: 'Power1.easeIn',
    })
    gsap.to('#menu',{
      width:'60vw',
      height:'50px',
      duration:0.2,
      ease: 'Power1.easeOut',
    })
    clicker=false
  }
  else{

    gsap.to('.plus',{
      transform: 'rotate(45deg)',
      duration:0.2,
      ease: 'Power1.easeIn',
    })
    gsap.to('#menu',{
      width:'62vw',
      height:'300px',
      duration:0.2,
      ease: 'Power1.easeIn',
    })
    clicker=true
  }
  

})

const t1=gsap.timeline({delay:0.2})
const t2=gsap.timeline({delay:1})
const t3=gsap.timeline({delay:1.4})
t1.fromTo('#menu',{
  yPercent:-100,
  opacity:0
},{
  yPercent:0,
  duration:1.5,
  ease: 'Power1.easeOut',
  opacity:1
})
t2.fromTo('.header',{
  opacity:0,
  duration:1.8,
},{
  duration:1.8,
  opacity:1
})
t3.fromTo('.header2',{
  opacity:0,
  yPercent:100
},{
  yPercent:0,
  duration:1,
  ease: 'Power1.easeOut',
  opacity:1
})

t3.fromTo('#fade',{
  opacity:0,
},{
  duration:2,
  ease: 'Power1.easeOut',
  opacity:1
})
