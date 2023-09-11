import Lenis from '@studio-freight/lenis'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { preloadImages } from './utils.js';

let lenis;

const grid = document.querySelector('.columns');

const columns = [...grid.querySelectorAll('.column')];

const items = columns.map((column, pos) => {
	return [...column.querySelectorAll('.column__item')].map(item => ({
		element: item,
		column: pos,
		wrapper: item.querySelector('.column__item-imgwrap'),
		image: item.querySelector('.column__item-img')
	}));
});
// All itemms
const mergedItems = items.flat();

const initSmoothScrolling = () => {

	lenis = new Lenis({
		lerp: 0.15,
		smoothWheel: true 
	});


	lenis.on('scroll', () => ScrollTrigger.update());


	const scrollFn = (time) => {
		lenis.raf(time);
		requestAnimationFrame(scrollFn); 
	};

	requestAnimationFrame(scrollFn);
};

const scroll = () => {
	gsap.to(columns[1], {
		ease: 'none',
		scrollTrigger: {
			trigger: grid,
			start: 'clamp(top bottom)',
			end: 'clamp(bottom top)',
			scrub: true
		},
		yPercent: -20
	});

	mergedItems.forEach(item => {
		if ( item.column === 1 ) return;
		
		gsap.to(item.wrapper, {
			ease: 'none',
			startAt: {transformOrigin: item.column === 0 ? '0% 100%' : '100% 100%'},
			scrollTrigger: {
				trigger: item.element,
				start: 'clamp(top bottom)',
				end: 'clamp(bottom top)',
				scrub: true
			},
			rotation: item.column === 0 ?  -6 : 6,
			xPercent: item.column === 0 ?  -10 : 10
		});
  	});
}

preloadImages('.column__item-img').then(() => {
	initSmoothScrolling();
	scroll();
	document.body.classList.remove('loading');
});