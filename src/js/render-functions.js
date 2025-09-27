import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export function createGallery(images) {
  let list = '';
  images
    .map(image => {
      list =
        list +
        `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
      data-user="Uploaded by user: ${image.user}"
    />
  </a>
  <ul class="image-attribute-list">
  <li class="image-attribute-list-item">
  <p>Likes</p>
  <p>${image.likes}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Views</p>
  <p>${image.views}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Comments</p>
  <p>${image.comments}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Downloads</p>
  <p>${image.downloads}</p>
  </li>
  </ul> 
</li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', list);
  modal.refresh();
}

const modal = new SimpleLightbox('.gallery-link', {
  captions: true,
  captionsData: 'data-user',
  captionDelay: 250,
});

export function clearGallery() {
  gallery.innerHTML = '';
}

const loader = document.querySelector('.loader');

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
