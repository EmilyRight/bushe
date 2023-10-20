import imageSourcesList from '../constants/imageSourcesList';
import { html } from '../helpers/utils';

class LoaderView {
  render() {
    return html`
    <div class="loader" id="loader">
      <div class="loader__image-area">
        <div class="loader__coffee">
          <img src=${imageSourcesList.loaderSrc} alt="" />
        </div>
      </div>
    </div>
    `;
  }
}

export default LoaderView;
