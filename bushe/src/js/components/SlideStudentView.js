import imageSourcesList from '../constants/imageSourcesList';
import linksList from '../constants/linksList';
import { html } from '../helpers/utils';

class SlideStudentView {
  constructor() {
    this.tooltipIconsList = null;
    this.tooltip = null;
    this.popup = null;
    this.delay = null;
    this.renderedSlide = null;
    this.animatedContent = null;
    this.popupAnimation = null;
  }

  setElements(animatedContent, popup, tooltipIconsList, tooltip, renderedSlide) {
    this.tooltipIconsList = tooltipIconsList;
    this.tooltip = tooltip;
    this.popup = popup;
    this.delay = null;
    this.animatedContent = animatedContent;
    this.renderedSlide = renderedSlide;
  }

  addEventListeners() {
    this.animatedContent.addEventListener('animationend', () => {
      this.showPopup();
    });
    this.tooltipIconsList.forEach((icon) => {
      icon.addEventListener('click', () => {
        this.tooltip.classList.toggle('opened');
      });
    });
  }

  showPopup() {
    this.popupAnimation = this.createAnimation(this.popup);
    if (this.renderedSlide.classList.contains('swiper-slide-active')) {
      this.popup.classList.add('opened');
      // this.popupAnimation.ready.then(() => this.popupAnimation.play());
    } else {
      this.popup.classList.remove('opened');
    }
  }

  createAnimation(element) {
    const animation = new KeyframeEffect(
      element,
      [
        { opacity: 0, offset: 0 },

        { opacity: 1, offset: 1 },
      ],
      {
        duration: 1500,
        fill: 'forwards',
        easing: 'linear',
        iterations: 1,
        direction: 'normal',
      }, // keyframe options
    );
    return new Animation(animation, document.timeline);
  }

  render() {
    return html`
      <div class="slide__content">
        <div class="slide__images-list images">
          <div class="images__item main-image">
            <div class="main-image__box">
              <img
                src=${imageSourcesList.studentSrc}
                alt=""
                class="main-image__girl"
              />
              <div class="main-image__tooltip-block tooltip-block tooltip-icon"
                data-event="cup-girl"
                data-tooltip="girl">
                <img
                  src=${imageSourcesList.studentCoffee}
                  alt=""
                  class="js-gtm-event popup__link tooltip-block__icon coffee-image"

                />
                <div
                  class="tooltip-block__image-light image-light"
                ></div>
                <div class="tooltip-block__tooltip tooltip" id="girl">
                  <div class="tooltip__text">
                    <ul class="tooltip__list tooltip-list">
                      <li class="tooltip-list__item">
                        Капучино на&nbsp;альтернативном молоке
                        220&nbsp;мл
                      </li>
                    </ul>
                  </div>
                  <div
                    class="tooltip__close-icon tooltip-icon"
                    data-tooltip="girl"
                  >
                    <span class="close"></span>
                  </div>
                </div>
              </div>
              <div class="main-image__popup text-popup">
                Ух&nbsp;ты,
                <a
                  href=${linksList.internet}
                  class="js-gtm-event link text-popup__link"
                  target="_blank"
                  >до&nbsp;1500 минут</a
                >
                на&nbsp;кофе! Это&nbsp;же шесть чашек&nbsp;&mdash;
                и&nbsp;себе можно взять, и&nbsp;друзей угостить. Есть
                кофе на&nbsp;альтернативном молоке? Беру!
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default SlideStudentView;
