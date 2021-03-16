import icons from 'url:../../img/icons.svg';
import View from './View.js';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successful uploaded :)';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  _renderForm() {
    console.log(this._parentElement);
    const markup = this._generateMarkup();
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    this.toggleWindow.call(this);
  }

  toggleWindow() {
    console.log('toggle');
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this._renderForm.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {
    return `
      <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="Pizza Extravaganza" required name="title" type="text" />
          <label>URL</label>
          <input value="xyz.com" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" required name="image" type="text" />
          <label>Publisher</label>
          <input value="Pawan" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="20" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="2" required name="servings" type="number" />
      </div>
      <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input value="0.5,kg,flour" type="text" required name="ingredient-1" placeholder="Format: 'Quantity,Unit,Description'" />
          <label>Ingredient 2</label>
          <input value="1,,Mashroom" type="text" name="ingredient-2" placeholder="Format: 'Quantity,Unit,Description'" />
          <label>Ingredient 3</label>
          <input value=",,salt" type="text" name="ingredient-3" placeholder="Format: 'Quantity,Unit,Description'" />
          <label>Ingredient 4</label>
          <input type="text" name="ingredient-4" placeholder="Format: 'Quantity,Unit,Description'" />
          <label>Ingredient 5</label>
          <input type="text" name="ingredient-5" placeholder="Format: 'Quantity,Unit,Description'" />
          <label>Ingredient 6</label>
          <input type="text" name="ingredient-6" placeholder="Format: 'Quantity,Unit,Description'" />
      </div>

      <button class="btn upload__btn">
          <svg>
              <use href="src/img/icons.svg#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
      </button>
    `;
  }
}

export default new AddRecipeView();

/*
<div class="upload__column">
    <h3 class="upload__heading">Recipe data</h3>
    <label>Title</label>
    <input value="TEST123" required name="title" type="text" />
    <label>URL</label>
    <input value="TEST123" required name="sourceUrl" type="text" />
    <label>Image URL</label>
    <input value="TEST123" required name="image" type="text" />
    <label>Publisher</label>
    <input value="TEST123" required name="publisher" type="text" />
    <label>Prep time</label>
    <input value="23" required name="cookingTime" type="number" />
    <label>Servings</label>
    <input value="23" required name="servings" type="number" />
</div>
<div class="upload__column">
    <h3 class="upload__heading">Ingredients</h3>
    <label>Ingredient 1</label>
    <input value="0.5,kg,Rice" type="text" required name="ingredient-1" placeholder="Format: 'Quantity,Unit,Description'" />
    <label>Ingredient 2</label>
    <input value="1,,Avocado" type="text" name="ingredient-2" placeholder="Format: 'Quantity,Unit,Description'" />
    <label>Ingredient 3</label>
    <input value=",,salt" type="text" name="ingredient-3" placeholder="Format: 'Quantity,Unit,Description'" />
    <label>Ingredient 4</label>
    <input type="text" name="ingredient-4" placeholder="Format: 'Quantity,Unit,Description'" />
    <label>Ingredient 5</label>
    <input type="text" name="ingredient-5" placeholder="Format: 'Quantity,Unit,Description'" />
    <label>Ingredient 6</label>
    <input type="text" name="ingredient-6" placeholder="Format: 'Quantity,Unit,Description'" />
</div>

<button class="btn upload__btn">
    <svg>
        <use href="src/img/icons.svg#icon-upload-cloud"></use>
    </svg>
    <span>Upload</span>
</button>
*/
