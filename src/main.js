import './style.css'
// import { imageGallery } from './imageService.js'

class Searchform {
  constructor() {
    this.form = document.getElementById('searchForm');
    this.input = document.getElementById('searchInput');
    this.errorElement = document.getElementById('searchError');
    this.gallery = new ImageGallery('grid-container');

    this.initializeEventListeners();
  }

  initializeEventListeners() {
    this.form.addEventListener('submit', () => this.handleSubmit(this));
    this.input.addEventListener('input', () => this.handleInput(this));
  }
     

  async handleSubmit(e) {
    e.preventDefault();

    const query = this.input.value.trim();

    if(!this.validateQuery(query)) {
      return;
    }

    try {
      this.hideError();
      await this.gallery.searchImages(query);
    } catch (error) {
      this.showError('An error occurred while fetching images. Please try again later.');
    }
}

handleInput() {
const query = this.input.value.trim();
this.validateQuery(query);
 }

 validateQuery(query) {
  if (query.length < 3) {
    this.showError('Please enter at least 3 characters.');
    return false;
  }

  if(query.length > 50) {
    this.showError('Please enter no more than 50 characters.');
    return false;
  }
}
}
