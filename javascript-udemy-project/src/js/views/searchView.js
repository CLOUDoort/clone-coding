class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    const { value } = this.#parentEl.querySelector('.search__field');
    this.#clearInput();
    return value;
  }

  #clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
