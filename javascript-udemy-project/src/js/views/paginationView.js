import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      handler(+btn.dataset.goto);
    });
  }

  _generateMarkup() {
    const current = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1, there are another pages
    if (current === 1 && numPages > 1) {
      return this._generateMarkupNext(current + 1);
    }

    // Other page
    if (current < numPages) {
      return this._generateMarkupPrev(current - 1).concat(
        this._generateMarkupNext(current + 1)
      );
    }

    // Last page
    if (current === numPages && numPages > 1) {
      return this._generateMarkupPrev(current - 1);
    }

    // Page 1, there are no another pages
    return ``;
  }

  _generateMarkupPrev(page) {
    return `
      <button class="btn--inline pagination__btn--prev" data-goto='${page}'>
        <svg class="search__icon">
          <use href="${icons}.svg#icon-arrow-left"></use>
        </svg>
        <span>Page ${page}</span>
      </button>
    `;
  }

  _generateMarkupNext(page) {
    return `
      <button class="btn--inline pagination__btn--next" data-goto='${page}'>
        <span>Page ${page}</span>
        <svg class="search__icon">
          <use href="${icons}.svg#icon-arrow-right"></use>
        </svg>
      </button>
    `;
  }
}

export default new PaginationView();
