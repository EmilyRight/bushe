import imageSourcesList from '../constants/imageSourcesList';
import { html } from '../helpers/utils';

class SlideCoupleView {
  constructor() {
    this.tooltipIcon = null;
    this.tooltip = null;
    this.popup = null;
    this.delay = null;
    this.renderedSlide = null;
    this.animatedContent = null;
    this.popupAnimation = null;
  }

  setElements(animatedContent, popup, tooltipIcon, tooltip, renderedSlide) {
    this.tooltipIcon = tooltipIcon;
    this.tooltip = tooltip;
    this.popup = popup;
    this.delay = null;
    this.animatedContent = animatedContent;
    this.renderedSlide = renderedSlide;
  }

  render() {
    return html`
    <div class="slide__content">
      <div class="slide__images-list images">
        <div class="images__item main-image">
          <div class="main-image__box">
            <img
              src=${imageSourcesList.coupleSrc}
              alt=""
              class="main-image__couple"
            />
            <div class="main-image__popup man-popup text-popup">
              Гуляли по&nbsp;Питеру, любовались осенним городом,
              взяли с&nbsp;собой
              <a
                href="https://spb.tele2.ru/minutes-management/bushe"
                class="js-gtm-event link text-popup__link"
                target="_blank"
                data-event="conv_bushe"
                >кофе буше за&nbsp;минуты Tele2</a
              >
            </div>
            <div class="main-image__popup woman-popup text-popup">
              Мне с тобой так тепло
            </div>
            <div
              class="js-gtm-event main-image__tooltip-block tooltip-block man-tooltip tooltip-icon"
              data-tooltip="pair-man"
              data-event="cup-pair"
            >
              <img
                src=${imageSourcesList.coupleHandManSrc}
                alt=""
                class="tooltip-block__icon hand-image"
              />
              <img
                src=${imageSourcesList.coupleCoffeeManSrc}
                alt=""
                class="tooltip-block__icon coffee-image"
              />
              <div
                class="tooltip-block__image-light image-light"
              ></div>

              <div
                class="tooltip-block__tooltip tooltip"
                id="pair-man"
              >
                <div class="tooltip__text">
                  <ul class="tooltip-list">
                    <li class="tooltip-list__item">
                      Капучино классический 220&nbsp;мл
                    </li>
                    <li class="tooltip-list__item">
                      Американо 250&nbsp;мл
                    </li>
                  </ul>
                </div>
                <div class="tooltip__close-icon tooltip-icon">
                  <span class="close"></span>
                </div>
              </div>
            </div>
            <div
              class="js-gtm-event main-image__tooltip-block tooltip-block woman-tooltip tooltip-icon"
              data-tooltip="pair-woman"
              data-event="cup-pair"
            >
              <img
                src=${imageSourcesList.coupleCoffeeWomanSrc}
                alt=""
                class="tooltip-block__icon coffee-image"
              />
              <img
                src=${imageSourcesList.coupleHandWomanSrc}
                alt=""
                class="tooltip-block__icon hand-image"
              />
              <div
                class="tooltip-block__image-light image-light"
              ></div>

              <div
                class="tooltip-block__tooltip tooltip"
                id="pair-woman"
              >
                <div class="tooltip__text">
                  <ul class="tooltip-list">
                    <li class="tooltip-list__item">
                      Капучино классический 220&nbsp;мл
                    </li>
                    <li class="tooltip-list__item">
                      Американо 250&nbsp;мл
                    </li>
                  </ul>
                </div>
                <div class="tooltip__close-icon tooltip-icon">
                  <span class="close"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    `;
  }
}

export default SlideCoupleView;
