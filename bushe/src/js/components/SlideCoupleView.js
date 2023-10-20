import imageSourcesList from '../constants/imageSourcesList';

class SlideCoupleView {
  constructor(viewWidth) {
    this.htmlComponent = document.createDocumentFragment();
    this.id = 'couple';
    this.htmlComponent.append(this.createElement());
    this.viewWidth = viewWidth;
    this.renderedSlide = this.htmlComponent.querySelector(`.${this.id}`);
    this.animatedContent = this.htmlComponent.querySelector('.slide__content');
    this.popupList = Array.from(this.htmlComponent.querySelectorAll('.text-popup'));
    this.tooltipIconsList = Array.from(this.htmlComponent.querySelectorAll('.tooltip-icon'));
    this.tooltipCloseIconsList = Array.from(this.htmlComponent.querySelectorAll('.tooltip__close-icon'));
    this.tooltipList = Array.from(this.htmlComponent.querySelectorAll('.tooltip'));
    this.animatedContent.addEventListener('animationend', () => {
      this.showPopup();
      setTimeout(() => {
        this.notify('popUpCoupleiShown');
      }, 1000);
    });
    this.tooltipIconsList.forEach((icon) => {
      icon.addEventListener('click', () => this.showTooltip(icon));
    });
    // this.tooltipCloseIconsList.forEach((icon) => {
    //   icon.addEventListener('click', () => this.hideTooltip(icon));
    // });
    document.addEventListener('isPrevios', () => {
      this.hidePopup();
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

  createAnimation(element, delay) {
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
        delay,
        iterations: 1,
        direction: 'normal',
      }, // keyframe options
    );
    return new Animation(animation, document.timeline);
  }

  showPopup() {
    this.popupList.forEach((popup, index) => {
      this.popupAnimation = this.createAnimation(popup, index);
      popup.classList.add('opened');
      this.popupAnimation.ready.then(() => {
        this.popupAnimation.play();
      });
    });
  }

  hidePopup() {
    this.popupList.forEach((popup) => {
      if (this.popupAnimation) {
        this.popupAnimation.cancel();
        popup.classList.remove('opened');
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

  render() {
    return this.htmlComponent;
  }

  createElement() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('swiper-slide');
    wrapper.classList.add('slide');
    wrapper.classList.add('slide_hidden');
    wrapper.classList.add(`${this.id}`);
    wrapper.setAttribute('id', `${this.id}`);
    wrapper.innerHTML = `

    <div class="slide__content slide-content">
      <div class="slide-content__wrapper js-set-size">
        <div class="slide-content__img-box images">
          <div class="image-box images__main-img">
            <img
              src=${imageSourcesList.coupleSrc}
              alt=""
              class="images__main couple"
            />
          </div>
          <div
            class="image-box image-box_absolute images__coffee-img"
          >
            <img
              src=${imageSourcesList.coupleCoffeeSrc}
              alt=""
              class="images__coffee coffee-image"
            />
          </div>
          <div
            class="image-box image-box_absolute images__hand-img"
          >
            <img
              src=${imageSourcesList.coupleHands}
              alt=""
              class="images__hands hand-image"
            />
          </div>
        </div>
        <div class="slide-content__popup man-popup text-popup">
          Гуляли по&nbsp;Питеру, любовались осенним городом, взяли
          с&nbsp;собой
          <a
            href="https://spb.tele2.ru/minutes-management/bushe"
            class="js-gtm-event link text-popup__link"
            target="_blank"
            data-event="conv_bushe"
            >кофе буше за&nbsp;минуты Tele2</a
          >
        </div>
        <div class="slide-content__popup woman-popup text-popup">
          Мне с&nbsp;тобой так&nbsp;тепло
        </div>
        <div class="slide-content__tooltip-block tooltip-block man-tooltip">
          <div
            class="js-gtm-event tooltip-block__tooltip-icon tooltip-icon"
            data-tooltip="pair-man"
            data-event="cup-pair"></div>
          <div class="tooltip-block__tooltip tooltip" id="pair-man">
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
            <div class="tooltip__close-icon tooltip-icon" data-tooltip="pair-man">
              <span class="close"></span>
            </div>
          </div>
        </div>
        <div class="slide-content__tooltip-block tooltip-block woman-tooltip">
        <div
        class="js-gtm-event tooltip-block__tooltip-icon tooltip-icon"
        data-tooltip="pair-woman"
        data-event="cup-pair"></div>
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
            <div class="tooltip__close-icon tooltip-icon" data-tooltip="pair-woman">
              <span class="close"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    `;
    return wrapper;
  }
}

export default SlideCoupleView;
