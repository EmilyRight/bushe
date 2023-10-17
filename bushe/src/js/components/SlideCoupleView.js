import imageSourcesList from '../constants/imageSourcesList';
import { html } from '../helpers/utils';

// class SlideCoupleView {

//   constructor() {
//     this.id = 'couple';
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
//     this.animatedContent.addEventListener('animationend', () => {
//       this.showPopup();
//     });
//     this.tooltipIconsList.forEach((icon) => {
//       icon.addEventListener('click', () => this.showTooltip(icon));
//     });
//   }

//   removeEventListeners() {
//     this.animatedContent.removeEventListener('animationend', this.showPopup);
//     this.tooltipIconsList.forEach((icon) => {
//       icon.removeEventListener('click', () => this.showTooltip(icon));
//     });
//   }

//   showTooltip(icon) {
//     this.tooltipList.forEach((tooltip) => {
//       if (tooltip.id === icon.dataset.tooltip) {
//         if (!tooltip.classList.contains('opened')) {
//           tooltip.classList.add('opened');
//         } else {
//           tooltip.classList.remove('opened');
//         }
//       }
//     });
//   }

//   showPopup() {
//     this.popupList.forEach((popup, index) => {
//       this.popupAnimation = this.createAnimation(popup, index);
//       if (this.renderedSlide.classList.contains('swiper-slide-active')) {
//         popup.classList.add('opened');
//         this.popupAnimation.ready.then(() => this.popupAnimation.play());
//       } else {
//         popup.classList.remove('opened');
//         this.popupAnimation.finish();
//       }
//     });
//   }

//   createAnimation(element, delay) {
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
//         delay,
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
//               src=${imageSourcesList.coupleSrc}
//               alt=""
//               class="main-image__couple"
//             />
//             <div class="main-image__popup man-popup text-popup">
//               Гуляли по&nbsp;Питеру, любовались осенним городом,
//               взяли с&nbsp;собой
//               <a
//                 href="https://spb.tele2.ru/minutes-management/bushe"
//                 class="js-gtm-event link text-popup__link"
//                 target="_blank"
//                 data-event="conv_bushe"
//                 >кофе буше за&nbsp;минуты Tele2</a
//               >
//             </div>
//             <div class="main-image__popup woman-popup text-popup">
//               Мне с тобой так тепло
//             </div>
//             <div
//               class="js-gtm-event main-image__tooltip-block tooltip-block man-tooltip tooltip-icon"
//               data-tooltip="pair-man"
//               data-event="cup-pair"
//             >
//               <img
//                 src=${imageSourcesList.coupleHandManSrc}
//                 alt=""
//                 class="tooltip-block__icon hand-image"
//               />
//               <img
//                 src=${imageSourcesList.coupleCoffeeManSrc}
//                 alt=""
//                 class="tooltip-block__icon coffee-image"
//               />
//               <div
//                 class="tooltip-block__image-light image-light"
//               ></div>

//               <div
//                 class="tooltip-block__tooltip tooltip"
//                 id="pair-man"
//               >
//                 <div class="tooltip__text">
//                   <ul class="tooltip-list">
//                     <li class="tooltip-list__item">
//                       Капучино классический 220&nbsp;мл
//                     </li>
//                     <li class="tooltip-list__item">
//                       Американо 250&nbsp;мл
//                     </li>
//                   </ul>
//                 </div>
//                 <div class="tooltip__close-icon tooltip-icon">
//                   <span class="close"></span>
//                 </div>
//               </div>
//             </div>
//             <div
//               class="js-gtm-event main-image__tooltip-block tooltip-block woman-tooltip tooltip-icon"
//               data-tooltip="pair-woman"
//               data-event="cup-pair"
//             >
//               <img
//                 src=${imageSourcesList.coupleCoffeeWomanSrc}
//                 alt=""
//                 class="tooltip-block__icon coffee-image"
//               />
//               <img
//                 src=${imageSourcesList.coupleHandWomanSrc}
//                 alt=""
//                 class="tooltip-block__icon hand-image"
//               />
//               <div
//                 class="tooltip-block__image-light image-light"
//               ></div>

//               <div
//                 class="tooltip-block__tooltip tooltip"
//                 id="pair-woman"
//               >
//                 <div class="tooltip__text">
//                   <ul class="tooltip-list">
//                     <li class="tooltip-list__item">
//                       Капучино классический 220&nbsp;мл
//                     </li>
//                     <li class="tooltip-list__item">
//                       Американо 250&nbsp;мл
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

// export default SlideCoupleView;
class SlideCoupleView {
  #htmlComponent = document.createDocumentFragment();

  constructor() {
    this.id = 'couple';
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
      if (this.renderedSlide.classList.contains('swiper-slide-active')) {
        popup.classList.add('opened');
        this.popupAnimation.ready.then(() => this.popupAnimation.play());
      } else {
        popup.classList.remove('opened');
        this.popupAnimation.finish();
      }
    });
  }

  render() {
    return this.#htmlComponent;
  }

  createElement() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('swiper-slide');
    wrapper.classList.add('slide');
    wrapper.classList.add('slide_hidden');
    wrapper.classList.add(`${this.id}`);
    wrapper.setAttribute('id', `${this.id}`);
    wrapper.innerHTML = `

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
    return wrapper;
  }
}

export default SlideCoupleView;
