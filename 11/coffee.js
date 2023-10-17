class Coffee {
  #htmlComponent = document.createDocumentFragment();

  constructor() {
    this.#htmlComponent.append(this.#createElement());

    const coffee = this.#htmlComponent.querySelector('.coffee');
    const tooltip = this.#htmlComponent.querySelector('.tooltip');

    coffee.addEventListener('click', () => tooltip.classList.add('visible'));
  }

  render() {
    return this.#htmlComponent;
  }

  #createElement() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
            <label class="coffee">Стакан кофе</label>
            <div class="tooltip">Тултип</div>
    `;
    return wrapper;
  }
}

export { Coffee };
