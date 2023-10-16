import linksList from '../constants/linksList';
import { html } from '../helpers/utils';

class TeaserView {
  constructor() {
    this.logo = null;
  }

  render() {
    const videoSrc = require('url:../../video/teaser.h264.mp4');
    const logoSrc = require('../../img/logo-white.svg');
    return html`
    <section class="teaser">
    <div class="video-layer">
      <video
        width="100%"
        id="video-teaser"
        preload="auto"
        autoplay
        loop
        muted
        playsinline
      >
        <source src=${videoSrc} />
      </video>
    </div>
    <div class="teaser-heading">
      <div class="container">
        <a
          href=${linksList.tele2}
          class="logo logo--white js-gtm-event"
          data-event="logo"
          data-section="teaser"
        >
          <img src=${logoSrc} />
        </a>
      </div>
    </div>
    <div class="teaser-body">
      <div class="container">
        <div class="teaser-body__text">
          <div class="bigtext">ТЕПЛЫЕ МОМЕНТЫ В&nbsp;ЛЮБИМОМ ГОРОДЕ</div>
          <p class="subtext">Меняем минуты на&nbsp;кофе в&nbsp;буше</p>

          <div class="teaser__button-block teaser-buttons">
            <button
              class="teaser-buttons__more-button teaser-more btn js-go-next js-gtm-event"
              data-event="more"
              data-section="teaser"
            >
              Подробнее
            </button>
            <a
              href=${linksList.exchange}
              class="teaser-buttons__exchange-button link"
              target="_blank"
              data-event="conv_change-start"
              data-section="teaser"
              >К&nbsp;обмену</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
    `;
  }
}

export default TeaserView;
