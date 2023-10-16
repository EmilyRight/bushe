import LoaderView from './LoaderView';
import SliderView from './SliderView';
import TeaserView from './TeaserView';
import Swiper from '../vendor/swiper.min';
import options from '../constants/swiperOptions';
import SlideCoupleView from './SlideCoupleView';
import SlideManView from './SlideManView';
import SlideStudentView from './SlideStudentView';

class Page {
  #teaser;

  #slider;

  #slidesArray;

  constructor(element) {
    this.viewWidth = document.documentElement.clientWidth;
    this.element = element;
    this.nextBtn = null;
    this.swiper = null;
    this.controls = null;
    this.sliderNextButton = null;
    this.activeSlide = null;
    this.activeSlideContent = null;
  }

  init() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.#teaser = new TeaserView();
    this.element.innerHTML = String(this.#teaser.render());
  }

  addEventListeners() {
    this.nextBtn = document.querySelector('.teaser-more');
    this.nextBtn.addEventListener('click', this.showMainScreen.bind(this));
  }

  renderSlider() {
    this.#slidesArray = [
      new SlideCoupleView(),
      new SlideManView(),
      new SlideStudentView(),
    ];
    this.#slider = new SliderView(this.#slidesArray);
    this.element.innerHTML = String(this.#slider.render());
    this.#slidesArray.forEach((slide) => {
      const slideElements = this.defineElements(slide.id);
      slide.setElements(slideElements);
    });

    this.controls = document.querySelector('.swiper-controls');
  }

  defineElements(className) {
    const renderedSlide = document.querySelector(`.${className}`);
    const animatedContent = renderedSlide.querySelector('.slide__content');
    const popupList = Array.from(renderedSlide.querySelectorAll('.text-popup'));
    const tooltipIconsList = Array.from(renderedSlide.querySelectorAll('.tooltip-icon'));
    const tooltipList = Array.from(renderedSlide.querySelectorAll('.tooltip'));
    return {
      animatedContent, popupList, tooltipIconsList, tooltipList, renderedSlide,
    };
  }

  showMainScreen() {
    this.renderSlider();
    const loader = document.querySelector('.loader');
    const hiddenList = document.querySelectorAll('.hidden');

    loader.addEventListener('animationend', () => {
      loader.remove();
      hiddenList.forEach((element) => {
        element.classList.remove('hidden');
        this.controls.classList.add('displayed');
        element.classList.add('visible');
      });
      if (this.viewWidth < 992) {
        this.createSlider();
        this.activeSlide = document.querySelector('.swiper-slide-active');
        this.handleActiveSlide();
        this.swiper.on('slideChangeTransitionEnd', () => {
          this.#slider.removeEventListeners(this.activeSlide.id);
          this.handleActiveSlide();
        });
      }
    });
  }

  handleActiveSlide() {
    this.activeSlide = document.querySelector('.swiper-slide-active');
    this.#slider.setActiveSlide(this.activeSlide.id);
    this.activeSlideContent = this.activeSlide.querySelector('.slide__content');
    this.animateActiveSlide();
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
      this.activeSlide.classList.remove('slide_hidden');
      this.activeSlide.classList.add('slide_visible');
      this.activeSlideContent.classList.add('animated');
    }
  }

  destroySlider() {
    this.swiper.destroy();
  }
}

export default Page;
