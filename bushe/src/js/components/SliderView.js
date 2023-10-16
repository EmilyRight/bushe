import imageSourcesList from '../constants/imageSourcesList';
import { html } from '../helpers/utils';
import LoaderView from './LoaderView';
import SlideCoupleView from './SlideCoupleView';
import SlideManView from './SlideManView';
import SlideStudentView from './SlideStudentView';

class SliderView {
  constructor() {
    this.loader = new LoaderView();
    this.slide1 = new SlideCoupleView();
    this.slide2 = new SlideManView();
    this.slide3 = new SlideStudentView();
  }

  setElementsForSlide1({
    animatedContent, popup, tooltipIconsList, tooltip, renderedSlide,
  }) {
    this.slide1.setElements(animatedContent, popup, tooltipIconsList, tooltip, renderedSlide);
  }

  setElementsForSlide2({
    animatedContent, popup, tooltipIconsList, tooltip, renderedSlide,
  }) {
    this.slide2.setElements(animatedContent, popup, tooltipIconsList, tooltip, renderedSlide);
  }

  setElementsForSlide3({
    animatedContent, popup, tooltipIconsList, tooltip, renderedSlide,
  }) {
    this.slide3.setElements(animatedContent, popup, tooltipIconsList, tooltip, renderedSlide);
  }

  addEventListeners() {
    this.slide3.addEventListeners();
  }

  render() {
    const loader = this.loader.render();
    const slide1 = this.slide1.render();
    const slide2 = this.slide2.render();
    const slide3 = this.slide3.render();
    return html`
    <section class="section-slider">
    <div class="slider">
      ${loader}
      <div class="swiper-container">
        <div class="slider__text fixed-text hidden">
          <h3 class="fixed-text__title">
            1&nbsp;чашка&nbsp;&mdash; 250 минут
          </h3>
          <p class="fixed-text__text">
            Провести время с&nbsp;близкими<br />
            за&nbsp;чашкой кофе&nbsp;&mdash; бесценно. Меняем минуты
            Tele2&nbsp;на кофе в&nbsp;буше до&nbsp;3&nbsp;декабря
            2023&nbsp;г.
          </p>
        </div>
        <div class="swiper-wrapper__background"> </div>
        <div class="swiper-wrapper hidden">

          <div class="swiper-slide slide couple">
            ${slide1}
          </div>
          <div class="swiper-slide slide man">
            ${slide2}
          </div>
          <div class="swiper-slide slide girl">
            ${slide3}
          </div>
        </div>
        <div class="swiper-controls">
          <div
            class="swiper-button-next js-gtm-event"
            data-event="pointer-right"
          >
            <img src=${imageSourcesList.arrowSrc} alt="" />
          </div>
          <div
            class="swiper-button-prev js-gtm-event"
            data-event="pointer-left"
          >
            <img src=${imageSourcesList.arrowSrc} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
    `;
  }
}

export default SliderView;
