import imageSourcesList from '../constants/imageSourcesList';
import { html } from '../helpers/utils';
import LoaderView from './LoaderView';

class SliderView {
  constructor(slides) {
    this.id = 'main';
    this.loader = new LoaderView();
    this.slides = slides;
    this.activeSlide = null;
  }

  render() {
    const loader = this.loader.render();
    return html`
    <section class="section-slider">
    <div class="slider">
      ${loader}
      <div class="swiper-container">
        <div class="swiper-wrapper__background"> </div>
        <div class="swiper-wrapper hidden">
        <div class="swiper-wrapper__background"> </div>
        <div
          class="swiper-wrapper__modal-icon modal-icon js-gtm-event animated"
          data-event="glass"
          >
          <img src=${imageSourcesList.modalIconSrc} alt="" />
        </div>
          <div class="slider__text fixed-text fixed-text_desktop hidden">
            <h3 class="fixed-text__title">
              1&nbsp;чашка&nbsp;&mdash; 250 минут
            </h3>
            <p class="fixed-text__text">
              Провести время с&nbsp;близкими<br />
              за&nbsp;чашкой кофе&nbsp;&mdash; бесценно. Меняем минуты
              Tele2&nbsp;на&nbsp;кофе в&nbsp;буше
              до&nbsp;3&nbsp;декабря&nbsp;2023&nbsp;г.
            </p>

          </div>
        </div>
        <div class="slider__text fixed-text fixed-text_mobile hidden">
          <h3 class="fixed-text__title">
            1&nbsp;чашка&nbsp;&mdash; 250 минут
          </h3>
          <p class="fixed-text__text">
            Провести время с&nbsp;близкими<br />
            за&nbsp;чашкой кофе&nbsp;&mdash; бесценно. Меняем минуты
            Tele2&nbsp;на кофе в&nbsp;буше
            до&nbsp;3&nbsp;декабря&nbsp;2023&nbsp;г.
          </p>

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
