import MOBILE from '../constants/dimensions';
import imageSourcesList from '../constants/imageSourcesList';

class SlideManView {
  constructor(viewWidth) {
    this.htmlComponent = document.createDocumentFragment();
    this.id = 'man';
    this.htmlComponent.append(this.createElement());
    this.viewWidth = viewWidth;
    this.renderedSlide = this.htmlComponent.querySelector(`.${this.id}`);
    this.animatedContent = this.htmlComponent.querySelector('.slide__content');
    this.popupList = Array.from(this.htmlComponent.querySelectorAll('.text-popup'));
    this.tooltipIconsList = Array.from(this.htmlComponent.querySelectorAll('.tooltip-icon'));
    this.tooltipList = Array.from(this.htmlComponent.querySelectorAll('.tooltip'));
    this.animatedContent.addEventListener('animationend', () => {
      this.showPopup();
      setTimeout(() => {
        this.notify('popUpManIsShown');
      }, 1000);
    });
    this.tooltipIconsList.forEach((icon) => {
      icon.addEventListener('click', () => this.showTooltip(icon));
    });
    document.addEventListener('isPrevios', () => {
      this.hidePopup();
    });
    document.addEventListener('popUpCoupleiShown', () => {
      if (this.viewWidth > MOBILE) {
        this.animateSelf();
      }
    });
  }

  animateSelf() {
    this.renderedSlide.classList.remove('slide_hidden');
    this.renderedSlide.classList.add('slide_visible');
    this.animatedContent?.classList.add('animated');
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

  render() {
    return this.htmlComponent;
  }

  createElement() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('swiper-slide');
    wrapper.classList.add('slide');
    wrapper.classList.add(`${this.id}`);
    wrapper.classList.add('slide_hidden');
    wrapper.setAttribute('id', `${this.id}`);
    wrapper.innerHTML = `

      <div class="slide__content slide-content">
        <div class="slide-content__wrapper js-set-size">
          <div class="slide-content__img-box images">
            <div class="image-box images__main-img">
              <img
                src=${imageSourcesList.manSrc}
                alt=""
                class="images__main man"
              />
            </div>
            <div
              class="image-box image-box_absolute images__phone-img"
            >
              <img
                src=${imageSourcesList.manPhone}
                alt=""
                class="images__phone phone-image"
              />
            </div>
            <div class="image-box image-box_absolute images__dog-img">
              <img
                src=${imageSourcesList.manDogTail}
                alt=""
                class="images__dog dog-image"
              />
            </div>
            <div
              class="image-box image-box_absolute images__hand-img"
            >
              <img
                src=${imageSourcesList.manHand}
                alt=""
                class="images__hand hand-image"
              />
            </div>
          </div>
          <div class="slide-content__popup text-popup">
            <a
              href="https://spb.tele2.ru/minutes-management/bushe"
              class="js-gtm-event link text-popup__link"
              target="_blank"
              data-event="conv_present"
              >Подарил кофе</a
            >
            гостю в очереди. Это просто: надо всего-то показать QR-код
            бариста. Сейчас еще маме код на кофе в мессенджере
            перешлю. Здорово, когда можно спонтанно делиться теплом!
          </div>
          <div
            class="slide-content__tooltip-block tooltip-block man-tooltip"
          >
            <div
              class="js-gtm-event tooltip-block__tooltip-icon tooltip-icon"
              data-tooltip="smartphone"
              data-event="smartphone"></div>
            <div
              class="tooltip-block__tooltip tooltip"
              id="smartphone"
            >
              <div class="tooltip__text">
                <ul class="tooltip-list">
                  <li class="tooltip-list__item">Подвешенный кофе</li>
                </ul>
              </div>
              <div class="tooltip__close-icon tooltip-icon" data-tooltip="smartphone">
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
export default SlideManView;
