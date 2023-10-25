import MOBILE from '../constants/dimensions';
import imageSourcesList from '../constants/imageSourcesList';
import linksList from '../constants/linksList';
import SlideView from './SlideView';

class SlideStudentView extends SlideView {
  constructor(viewWidth, id = 'girl') {
    super(viewWidth, 'girl');
    this.viewWidth = viewWidth;
    this.id = id;

    document.addEventListener('manPopupIsShown', () => {
      if (this.viewWidth >= MOBILE) {
        this.animateSelf();
      }
    });
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
                  Капучино&nbsp;на&nbsp;альтернативном молоке&nbsp;220&nbsp;мл
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
