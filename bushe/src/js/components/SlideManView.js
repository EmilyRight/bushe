import MOBILE from '../constants/dimensions';
import imageSourcesList from '../constants/imageSourcesList';
import { html } from '../helpers/utils';

// class SlideManView {
//   constructor() {
//     this.id = 'man';
//     this.tooltipIconsList = null;
//     this.tooltipList = null;
//     this.popupList = null;
//     this.delay = null;
//     this.renderedSlide = null;
//     this.animatedContent = null;
//     this.popupAnimation = null;
//   }

//   setElements({
//     animatedContent, popupList, tooltipIconsList, tooltipList, renderedSlide,
//   }) {
//     this.tooltipIconsList = tooltipIconsList;
//     this.tooltipList = tooltipList;
//     this.popupList = popupList;
//     this.delay = null;
//     this.animatedContent = animatedContent;
//     this.renderedSlide = renderedSlide;
//   }

//   addEventListeners() {
//     console.log(
//       this.tooltipIconsList,
//       this.tooltipList,
//       this.popupList,
//       this.delay,
//       this.renderedSlide,
//       this.animatedContent,
//       this.popupAnimation,
//     );
//     this.animatedContent.addEventListener('animationend', () => {
//       this.showPopup();
//     });
//     this.tooltipIconsList.forEach((icon) => {
//       icon.addEventListener('click', this.showTooltip.bind(this, icon));
//     });
//   }

//   removeEventListeners() {
//     console.log('remove');
//     this.animatedContent.removeEventListener('animationend', this.showPopup.bind(this));
//     this.tooltipIconsList.forEach((icon) => {
//       icon.removeEventListener('click', this.showTooltip.bind(this, icon));
//     });
//   }

//   showTooltip(icon) {
//     this.tooltipList.forEach((tooltip) => {
//       if (tooltip.id === icon.dataset.tooltip) {
//         console.log('hey', tooltip.classList);
//         if (!tooltip.classList.contains('opened')) {
//           tooltip.classList.add('opened');
//         } else {
//           tooltip.classList.remove('opened');
//         }
//       }
//     });
//   }

//   showPopup() {
//     this.popupList.forEach((popup) => {
//       this.popupAnimation = this.createAnimation(popup);
//       if (this.renderedSlide.classList.contains('swiper-slide-active')) {
//         popup.classList.add('opened');
//         // this.popupAnimation.ready.then(() => this.popupAnimation.play());
//       } else {
//         popup.classList.remove('opened');
//       }
//     });
//   }

//   createAnimation(element) {
//     const animation = new KeyframeEffect(
//       element,
//       [
//         { opacity: 0, offset: 0 },

//         { opacity: 1, offset: 1 },
//       ],
//       {
//         duration: 1500,
//         fill: 'forwards',
//         easing: 'linear',
//         iterations: 1,
//         direction: 'normal',
//       }, // keyframe options
//     );
//     return new Animation(animation, document.timeline);
//   }

//   render() {
//     return html`
//     <div class="slide__content">
//       <div class="slide__images-list images">
//         <div class="images__item main-image">
//           <div class="main-image__box">
//             <img
//               src=${imageSourcesList.manSrc}
//               alt=""
//               class="main-image__man"
//             />
//             <div class="main-image__popup text-popup">
//               <a
//                 href="https://spb.tele2.ru/minutes-management/bushe"
//                 class="js-gtm-event link text-popup__link"
//                 target="_blank"
//                 data-event="conv_present"
//                 >Подарил кофе</a
//               >
//               гостю в очереди. Это просто: надо всего-то показать
//               QR-код бариста. Сейчас еще маме код на кофе в
//               мессенджере перешлю. Здорово, когда можно спонтанно
//               делиться теплом!
//             </div>
//             <div
//               class="js-gtm-event main-image__tooltip-block tooltip-block man-tooltip tooltip-icon"
//               data-tooltip="smartphone"
//               data-event="smartphone"
//             >
//               <img
//                 src=${imageSourcesList.manHand}
//                 alt=""
//                 class="tooltip-block__icon hand-image"
//               />
//               <img
//                 src=${imageSourcesList.manPhone}
//                 alt=""
//                 class="tooltip-block__icon phone-image"
//               />
//               <div
//                 class="tooltip-block__image-light image-light"
//               ></div>

//               <div
//                 class="tooltip-block__tooltip tooltip"
//                 id="smartphone"
//               >
//                 <div class="tooltip__text">
//                   <ul class="tooltip-list">
//                     <li class="tooltip-list__item">
//                       Подвешенный кофе
//                     </li>
//                   </ul>
//                 </div>
//                 <div class="tooltip__close-icon tooltip-icon">
//                   <span class="close"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     `;
//   }
// }

class SlideManView {
  #htmlComponent = document.createDocumentFragment();

  constructor() {
    this.id = 'man';
    this.#htmlComponent.append(this.createElement());
    this.viewWidth = document.documentElement.clientWidth;
    this.renderedSlide = this.#htmlComponent.querySelector(`.${this.id}`);
    this.animatedContent = this.#htmlComponent.querySelector('.slide__content');
    this.popupList = Array.from(this.#htmlComponent.querySelectorAll('.text-popup'));
    this.tooltipIconsList = Array.from(this.#htmlComponent.querySelectorAll('.tooltip-icon'));
    this.tooltipList = Array.from(this.#htmlComponent.querySelectorAll('.tooltip'));
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
    console.log('man', type);
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
    return wrapper;
  }
}
export default SlideManView;
