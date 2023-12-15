import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const lineAnimation = gsap.fromTo(
  '.scroll-fill',
  { y: -300 },
  { y: 400, ease: 'none', duration: 1, stagger: 0.7 }
);

ScrollTrigger.create({
  trigger: '.main-container',
  start: 'top 300',
  end: 'bottom 300',
  markers: false,
  animation: lineAnimation,
  scrub: true,
});
