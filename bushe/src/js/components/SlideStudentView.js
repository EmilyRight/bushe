import MOBILE from '../constants/dimensions';
import imageSourcesList from '../constants/imageSourcesList';
import linksList from '../constants/linksList';

class SlideStudentView {
  #htmlComponent = document.createDocumentFragment();

  constructor(viewWidth) {
    this.id = 'girl';
    this.viewWidth = viewWidth;
    this.#htmlComponent.append(this.createElement());

    this.renderedSlide = this.#htmlComponent.querySelector(`.${this.id}`);
    this.animatedContent = this.#htmlComponent.querySelector('.slide__content');
    this.popupList = Array.from(this.#htmlComponent.querySelectorAll('.text-popup'));
    this.tooltipIconsList = Array.from(this.#htmlComponent.querySelectorAll('.tooltip-icon'));
    this.tooltipList = Array.from(this.#htmlComponent.querySelectorAll('.tooltip'));
    this.animatedContent.addEventListener('animationend', () => {
      this.showPopup();
    });
    this.tooltipIconsList.forEach((icon) => {
      icon.addEventListener('click', () => this.showTooltip(icon));
    });
    document.addEventListener('isPrevios', () => {
      this.hidePopup();
    });
    document.addEventListener('popUpManIsShown', () => {
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

  showPopup() {
    this.popupList.forEach((popup, index) => {
      this.popupAnimation = this.createAnimation(popup, index);
      popup.classList.add('opened');
      this.popupAnimation.ready.then(() => this.popupAnimation.play());
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
    return this.#htmlComponent;
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
              src=${imageSourcesList.studentSrc}
              alt=""
              class="main-image__girl"
            />
          </div>
          <div
            class="image-box image-box_absolute images__coffee-img"
          >
            <img
              src=${imageSourcesList.studentCoffee}
              alt=""
              class="images__coffee coffee-image"
            />
          </div>
          <div
            class="image-box image-box_absolute images__hand-img"
          >
            <img
              src=${imageSourcesList.studentHand}
              alt=""
              class="images__hand hand-image"
            />
          </div>
        </div>
        <div class="slide-content__popup text-popup">
          Ух&nbsp;ты,
          <a
            href=${linksList.internet}
            class="js-gtm-event link text-popup__link"
            target="_blank"
            >до&nbsp;1500 минут</a
          >
          на&nbsp;кофе! Это&nbsp;же шесть чашек&nbsp;&mdash;
          и&nbsp;себе можно взять, и&nbsp;друзей угостить. Есть кофе
          на&nbsp;альтернативном молоке? Беру!
        </div>
        <div
          class="slide-content__tooltip-block tooltip-block girl-tooltip"
        >
          <div
          class="js-gtm-event tooltip-block__tooltip-icon tooltip-icon"
          data-tooltip="girl"
          data-event="cup-girl"></div>
          <div class="tooltip-block__tooltip tooltip" id="girl">
            <div class="tooltip__text">
              <ul class="tooltip__list tooltip-list">
                <li class="tooltip-list__item">
                  Капучино на&nbsp;альтернативном молоке 220&nbsp;мл
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
      </div>
    </div>

    `;
    return wrapper;
  }
}
export default SlideStudentView;
