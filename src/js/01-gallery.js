// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const listEl = document.querySelector(".gallery");
const renderList = (arr, container)=>{
	const markup = arr.map((el) =>
	`<li class="gallery__item">
	<a class="gallery__link" href="${el.original}">
	  <img
		class="gallery__image"
		src="${el.preview}"
		data-source="large-image.jpg"
		alt="${el.description}"
	  />
	</a>
  </li>`).join('');


  container.insertAdjacentHTML("beforeend", markup);
}
renderList(galleryItems,  listEl)

const lightbox = new SimpleLightbox('.gallery a', { сaptions: true,
	captionsData: 'alt',
	captionDelay: 250,});

console.log(galleryItems);
