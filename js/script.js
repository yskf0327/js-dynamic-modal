import { puppyArray } from './puppyArray.js';
const gridContainer = document.querySelector('.grid-container');
const modal = document.querySelector('.modal');
const modalImg = document.createElement('img');
const modalMsg = document.createElement('p');

puppyArray.forEach(puppy => {
	const gridItem = document.createElement('li');
	gridItem.classList.add('grid-item');

	const gridInner = document.createElement('a');
	gridInner.setAttribute('href', '#');
	// gridInner.setAttribute('data-msg', puppy.msg);

	const gridImg = document.createElement('img');
	gridImg.setAttribute('src', 'img/' + puppy.image);
	gridImg.setAttribute('alt', puppy.alt);

	gridInner.append(gridImg);
	gridItem.append(gridInner);
	gridContainer.append(gridItem);

	gridInner.addEventListener('click', (e) => {
		e.preventDefault();
		modalImg.setAttribute('src', 'img/' + puppy.image);
		modalImg.setAttribute('alt', puppy.alt);
		modalMsg.innerText = puppy.msg;
		modal.children[0].append(modalImg);
		modal.children[0].append(modalMsg);

		modal.showModal();
		document.documentElement.style.overflow = 'hidden';
	});

	modal.addEventListener('click', (e) => {
		if (e.target.closest('.modal-content') === null) {
			modal.close();
			document.documentElement.style.overflow = 'auto';
		}
	})
});

// loading
window.addEventListener('load', () => {
	const loadingScreen = document.querySelector('.l-loading');
	const fadeOut = [
		{
			opacity: 1
		},
		{
			opacity: 0
		}
	];
	const fadeOutTiming = {
		duration: 300,
		easing: 'linear',
		fill: 'forwards'
	}
	setTimeout(() => {
		setTimeout(() => {
			loadingScreen.style.zIndex = -1;
		}, 1000);
		loadingScreen.animate(fadeOut, fadeOutTiming);
	}, 2000);
});