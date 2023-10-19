import LoaderView from './LoaderView';
import SliderView from './SliderView';
import TeaserView from './TeaserView';
import Swiper from '../vendor/swiper.min';
import options from '../constants/swiperOptions';
import SlideCoupleView from './SlideCoupleView';
import SlideManView from './SlideManView';
import SlideStudentView from './SlideStudentView';
import videoTeaser from '../helpers/videoTeaser';
import ModalView from './ModalView';
import MOBILE from '../constants/dimensions';

class Page {
  slider;

  slidesArray;

  constructor(element) {
    this.viewWidth = document.documentElement.clientWidth;
    this.element = element;
    this.nextBtn = null;
    this.swiper = null;
    this.modalIcon = null;
    this.modal = null;
    this.controls = null;
    this.sliderNextButton = null;
    this.activeSlide = null;
    this.activeSlideContent = null;
  }

  init() {
    this.showMainScreen();
    this.addEventListeners();
  }

  renderSlider() {
    this.slidesArray = [
      new SlideCoupleView(this.viewWidth),
      new SlideManView(this.viewWidth),
      new SlideStudentView(this.viewWidth),
      new ModalView(this.viewWidth),
    ];
    this.slider = new SliderView(this.slidesArray);
    this.element.innerHTML = String(this.slider.render());
    this.controls = document.querySelector('.swiper-controls');
  }

  addEventListeners() {
    this.modalIcon.addEventListener('click', () => {
      this.openModal();
    });
    window.addEventListener('resize', () => {
      this.showMainScreen();
    });
  }

  showMainScreen() {
    this.renderSlider();
    const wrapper = document.querySelector('.swiper-wrapper');
    this.slidesArray.forEach((slide) => {
      wrapper.append(slide.render());
    });
    const loader = document.querySelector('.loader');

    const hiddenList = document.querySelectorAll('.hidden');
    this.modalIcon = document.querySelector('.modal-icon');
    this.modal = document.querySelector('.modal');
    loader.addEventListener('animationend', () => {
      loader.remove();
      hiddenList.forEach((element) => {
        element.classList.remove('hidden');
        this.controls.classList.add('displayed');
        element.classList.add('visible');
      });
      if (this.viewWidth < MOBILE) {
        this.renderForMobile();
      } else {
        this.modal.classList.add('modal-hidden');
        this.handleDesktopScreen();
      }
    });
  }

  /**
 * @param {string} type
 * @param {any} [detail]
 * @return {boolean}
 */
  notify(type, detail = null) {
    const cancelable = true;
    const bubbles = true;
    const event = new CustomEvent(type, { detail, cancelable, bubbles });
    return document.dispatchEvent(event);
  }

  renderForMobile() {
    this.createSlider();
    this.activeSlide = document.querySelector('.swiper-slide-active');
    const fixedText = document.querySelector('.fixed-text_mobile');

    this.handleActiveSlide();

    this.animateActiveSlide();
    this.swiper.on('slideNextTransitionEnd', () => {
      this.notify('isPrevios');
      this.handleActiveSlide();
      this.animateActiveSlide();
      if (this.activeSlide.id === 'modal') {
        fixedText.style.display = 'none';
      } else {
        fixedText.style.display = 'block';
      }
    });
    this.swiper.on('slideChangeTransitionEnd', () => {
      this.notify('isPrevios');
    });
  }

  hidePopups() {
    const popupList = this.activeSlide.querySelectorAll('.main-image__popup');
    if (popupList) {
      popupList.forEach((popup) => {
        popup.classList.remove('opened');
      });
    }
  }

  handleActiveSlide() {
    this.activeSlide = document.querySelector('.swiper-slide-active');
    this.activeSlideContent = this.activeSlide.querySelector('.slide__content');
  }

  createSlider() {
    this.swiper = new Swiper('.swiper-container', options);
    if (this.viewWidth < MOBILE) {
      this.swiper.init();
    } else {
      this.destroySlider();
    }
  }

  handleDesktopScreen() {
    const slides = document.querySelectorAll('.slide_hidden');
    for (let i = 0; i < slides.length - 1; i++) {
      slides[0].classList.remove('slide_hidden');
      slides[0].classList.add('slide_visible');
      const activeSlideContent = slides[0].querySelector('.slide__content');
      activeSlideContent.classList.add('animated');
    }
  }

  animateActiveSlide() {
    this.activeSlide.classList.remove('slide_hidden');
    this.activeSlide.classList.add('slide_visible');
    this.activeSlideContent?.classList.add('animated');
  }

  openModal() {
    this.modalIcon.classList.remove('animated');
    this.modal.classList.remove('modal-hidden');
    this.modal.classList.remove('slide_hidden');
  }

  destroySlider() {
    this.swiper.destroy();
  }
}

export default Page;
