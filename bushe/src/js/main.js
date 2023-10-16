import detectDevice from './helpers/detectDevice';

import { generateId } from './helpers/utils';
import videoTeaser from './helpers/videoTeaser';
import Page from './components/Page';
import { addAnimationClass, createSlider, handleAnimation } from './helpers/sliderFunctions';

/// /////// DocReady //////////
window.addEventListener('load', () => {
  detectDevice();
  videoTeaser();

  const page = document.querySelector('.page');
  const pageView = new Page(page);
  pageView.init();
});
