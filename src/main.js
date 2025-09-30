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
        hideLoader();
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(data.hits);

      const images = document.querySelectorAll('.gallery-image');
      let loadedCount = 0;

      images.forEach(img => {
        if (img.complete) {
          loadedCount++;
          if (loadedCount === images.length) hideLoader();
        } else {
          img.addEventListener('load', () => {
            loadedCount++;
            if (loadedCount === images.length) hideLoader();
          });
          img.addEventListener('error', () => {
            loadedCount++;
            if (loadedCount === images.length) hideLoader();
          });
        }
      });
    })
    .catch(error => {
      iziToast.show({ message: error.message, backgroundColor: 'red' });
      hideLoader();
    })
    .finally(() => {
      search.reset();
    });
}

iziToast.settings({
  position: 'center',
  backgroundColor: 'magenta',
  messageSize: '20',
  timeout: 3000,
});
