import imageSourcesList from '../constants/imageSourcesList';
import { html } from '../helpers/utils';
import LoaderView from './LoaderView';

class SliderView {
  constructor(slides) {
    this.loader = new LoaderView();
    this.slides = slides;
    this.activeSlide = null;
  }

  setActiveSlide(id) {
    [this.activeSlide] = this.slides.filter((slide) => slide.id === id);
    this.activeSlide.addEventListeners();
  }

  setElementsForSlides({
    animatedContent, popupList, tooltipIconsList, tooltipList, renderedSlide,
  }) {
    this.slides.forEach((slide) => {
      slide.setElements(animatedContent, popupList, tooltipIconsList, tooltipList, renderedSlide);
    });
  }

  removeEventListeners(id) {
    const inactiveSlide = this.slides.filter((slide) => slide.id === id);
    inactiveSlide[0]?.removeEventListeners();
  }

  render() {
    const loader = this.loader.render();
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
          ${this.slides.map((slide) => html`
            <div class="swiper-slide slide ${slide.id} slide_hidden" id=${slide.id}>
              ${slide.render()}
            </div>
          `)}
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
