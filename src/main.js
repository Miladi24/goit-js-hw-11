import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const search = document.querySelector('form');
search.addEventListener('submit', clickSearch);

function clickSearch(event) {
  event.preventDefault();
  clearGallery();

  const query = event.target.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.show({
      message: 'Please, type some text',
    });
    search.reset();
    return;
  }

  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (!data.hits.length) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.show({ message: error.message, backgroundColor: 'red' });
    })
    .finally(() => {
      hideLoader();   // ❗ тепер гарантовано ховаємо лоадер
      search.reset();
    });
}

iziToast.settings({
  position: 'center',
  backgroundColor: 'magenta',
  messageSize: '20',
  timeout: 3000,
});

