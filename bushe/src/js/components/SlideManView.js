import imageSourcesList from '../constants/imageSourcesList';
import { html } from '../helpers/utils';

class SlideManView {
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
              src=${imageSourcesList.manSrc}
              alt=""
              class="main-image__man"
            />
            <div class="main-image__popup text-popup">
              <a
                href="https://spb.tele2.ru/minutes-management/bushe"
                class="js-gtm-event link text-popup__link"
                target="_blank"
                data-event="conv_present"
                >Подарил кофе</a
              >
              гостю в очереди. Это просто: надо всего-то показать
              QR-код бариста. Сейчас еще маме код на кофе в
              мессенджере перешлю. Здорово, когда можно спонтанно
              делиться теплом!
            </div>
            <div
              class="js-gtm-event main-image__tooltip-block tooltip-block man-tooltip tooltip-icon"
              data-tooltip="smartphone"
              data-event="smartphone"
            >
              <img
                src=${imageSourcesList.manHand}
                alt=""
                class="tooltip-block__icon hand-image"
              />
              <img
                src=${imageSourcesList.manPhone}
                alt=""
                class="tooltip-block__icon phone-image"
              />
              <div
                class="tooltip-block__image-light image-light"
              ></div>

              <div
                class="tooltip-block__tooltip tooltip"
                id="smartphone"
              >
                <div class="tooltip__text">
                  <ul class="tooltip-list">
                    <li class="tooltip-list__item">
                      Подвешенный кофе
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

export default SlideManView;
