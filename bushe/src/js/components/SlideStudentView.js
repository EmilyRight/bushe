import imageSourcesList from '../constants/imageSourcesList';
import linksList from '../constants/linksList';
import { html } from '../helpers/utils';

class SlideStudentView {
  constructor() {
    this.id = 'girl';
    this.tooltipIconsList = null;
    this.tooltipList = null;
    this.popupList = null;
    this.delay = null;
    this.renderedSlide = null;
    this.animatedContent = null;
    this.popupAnimation = null;
  }

  setElements({
    animatedContent, popupList, tooltipIconsList, tooltipList, renderedSlide,
  }) {
    this.tooltipIconsList = tooltipIconsList;
    this.tooltipList = tooltipList;
    this.popupList = popupList;
    this.delay = null;
    this.animatedContent = animatedContent;
    this.renderedSlide = renderedSlide;
  }

  addEventListeners() {
    this.animatedContent.addEventListener('animationend', () => {
      this.showPopup();
    });
    this.tooltipIconsList.forEach((icon) => {
      icon.addEventListener('click', this.showTooltip.bind(this, icon));
    });
  }

  removeEventListeners() {
    this.animatedContent.removeEventListener('animationend', this.showPopup.bind(this));
    this.tooltipIconsList.forEach((icon) => {
      icon.removeEventListener('click', this.showTooltip.bind(this, icon));
    });
  }

  showTooltip(icon) {
    this.tooltipList.forEach((tooltip) => {
      if (tooltip.id === icon.dataset.tooltip) {
        if (!tooltip.classList.contains('opened')) {
          tooltip.classList.add('opened');
        } else {
          tooltip.classList.remove('opened');
        }
      }
    });
  }

  showPopup() {
    this.popupList.forEach((popup) => {
      this.popupAnimation = this.createAnimation(popup);
      if (this.renderedSlide.classList.contains('swiper-slide-active')) {
        popup.classList.add('opened');
        // this.popupAnimation.ready.then(() => this.popupAnimation.play());
      } else {
        popup.classList.remove('opened');
      }
    });
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
              <div class="main-image__tooltip-block tooltip-block">
                <img
                  src=${imageSourcesList.studentCoffee}
                  alt=""
                  class="js-gtm-event popup__link tooltip-block__icon coffee-image tooltip-icon"
                  data-event="cup-girl"
                  data-tooltip="girl"

                />
                <div
                  class="tooltip-block__image-light image-light"
                ></div>
                <div class="tooltip-block__tooltip tooltip ${this.id}" id=${this.id}>
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
