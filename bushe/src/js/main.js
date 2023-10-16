import detectDevice from './helpers/detectDevice';

import { generateId } from './helpers/utils';
import videoTeaser from './helpers/videoTeaser';
import Page from './components/Page';
import { addAnimationClass, createSlider, handleAnimation } from './helpers/sliderFunctions';

/// /////// DocReady //////////
window.addEventListener('load', () => {
  detectDevice(); // videoTeaser();

  const page = document.querySelector('.page');
  const pageView = new Page(page);
  pageView.init();

  // const loader = document.querySelector('.loader');
  // const controls = document.querySelector('.swiper-controls');
  // const hiddenList = document.querySelectorAll('.hidden');
  // console.log(hiddenList);
  // loader.addEventListener('animationend', () => {
  //   hiddenList.forEach((element) => {
  //     element.classList.remove('hidden');
  //     element.classList.add('visible');

  //     controls.classList.add('displayed');
  //     createSlider();
  //   });
  //   addAnimationClass();
  //   handleAnimation();
  // });

  // videoTeaser();
});
