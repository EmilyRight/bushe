import LoaderView from './LoaderView';
import SliderView from './SliderView';
import TeaserView from './TeaserView';
import Swiper from '../vendor/swiper.min';
import options from '../constants/swiperOptions';

class Page {
  constructor(element) {
    this.viewWidth = document.documentElement.clientWidth;
    this.element = element;
    this.nextBtn = null;
    this.swiper = null;
    this.controls = null;
    this.sliderNextButton = null;
    this.activeSlide = null;

    this.teaser = new TeaserView();
    this.slider = new SliderView();
    this.loader = new LoaderView();
  }

  init() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.element.innerHTML = String(this.teaser.render());
  }

  addEventListeners() {
    this.nextBtn = document.querySelector('.teaser-more');
    this.nextBtn.addEventListener('click', this.showMainScreen.bind(this));
  }

  renderSlider() {
    this.element.innerHTML = String(this.slider.render());
    const elementsSlide1 = this.defineElements('couple');
    const elementsSlide2 = this.defineElements('man');
    const elementsSlide3 = this.defineElements('girl');
    this.slider.setElementsForSlide3(elementsSlide3);
    this.controls = document.querySelector('.swiper-controls');
  }

  defineElements(className) {
    const renderedSlide = document.querySelector(`.${className}`);
    const animatedContent = renderedSlide.querySelector('.slide__content');
    const popup = renderedSlide.querySelector('.text-popup');
    const tooltipIconsList = Array.from(renderedSlide.querySelectorAll('.tooltip-icon'));
    const tooltip = renderedSlide.querySelector('.tooltip');
    return {
      animatedContent, popup, tooltipIconsList, tooltip, renderedSlide,
    };
  }

  showMainScreen() {
    this.renderSlider();
    const loader = document.querySelector('.loader');
    const hiddenList = document.querySelectorAll('.hidden');

    loader.addEventListener('animationend', () => {
      hiddenList.forEach((element) => {
        element.classList.remove('hidden');
        this.controls.classList.add('displayed');
        element.classList.add('visible');
      });
      if (this.viewWidth < 992) {
        this.createSlider();
        let currentSlide = document.querySelector('.swiper-slide-active');
        this.activeSlide = currentSlide.querySelector('.slide__content');
        this.animateActiveSlide();
        this.swiper.on('slideChangeTransitionEnd', () => {
          currentSlide = document.querySelector('.swiper-slide-active');
          this.activeSlide = currentSlide.querySelector('.slide__content');
          this.slider.addEventListeners();
          this.animateActiveSlide();
        });
      }
    });
  }

  createSlider() {
    this.swiper = new Swiper('.swiper-container', options);
    if (this.viewWidth < 992) {
      this.swiper.init();
    } else {
      this.destroySlider();
    }
  }

  animateActiveSlide() {
    if (this.viewWidth < 992) {
      this.activeSlide.classList.add('animated');
    }
  }

  destroySlider() {
    this.swiper.destroy();
  }
}

export default Page;
