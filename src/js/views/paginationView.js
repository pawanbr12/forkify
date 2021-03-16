import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupBtn('right', curPage);
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupBtn('left', curPage);
    }
    // Other page
    if (curPage > 1 && curPage < numPages) {
      return `${this._generateMarkupBtn(
        'left',
        curPage
      )} ${this._generateMarkupBtn('right', curPage)}`;
    }
    // Page 1, and there are NO other pages
    return '';
  }

  // _generateMarkupBtn to generate left or right button
  _generateMarkupBtn(btnType, curPage) {
    if (btnType === 'left')
      return `
          <button data-goto="${
            curPage - 1
          }" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${curPage - 1}</span>
          </button>`;
    // If btnType is right
    return `
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
  }
}

export default new PaginationView();
