import { format } from 'date-fns';

const refs = {
  form: document.querySelector('.header-search-form'),
  input: document.querySelector('.header-search-input'),
  submitButton: document.querySelector('.header-button-makesearch'),
  openInputButton: document.querySelector('.header-button-opensearch'),
  withoutNewsContainer: document.querySelector('.container__error'),
  newsList: document.querySelector('.wrapper__list'),
};
const { form, input, submitButton, openInputButton, withoutNewsContainer, newsList } = refs;

export default function MakeStartMarkup(array) {
  // const favStorage = JSON.parse(localStorage.getItem('favorites'));
  // console.log(favStorage);
  const markUp = array
    .map((data) => {
      const subTitle = data.abstract.slice(0, 100) + `...`;
      const title = data.title.slice(0, 60) + `...`;
      const date = data.published_date.toString().slice(0, 10).replace(`-`, '/').replace(`-`, '/');

      let imageAddress;
      let imageStartAddress;
      let btnText = 'Add to favourite';

      if (data.multimedia.length === 0) {
        imageAddress =
          'https://cdn.pixabay.com/photo/2019/04/29/16/11/new-4166472_960_720.png';
      } else if (data.multimedia.length > 0) {
        imageStartAddress = 'https://static01.nyt.com/';
        imageAddress = data.multimedia[1].url;
      }
      // console.log(data.uri);
      // favStorage.map((el) => {
      //   if (data.uri === el.id) {
      //     btnText = 'Remove from favourite';
      //   }
      // });

      return `<li class = "card-item" data-id = "${data.uri}">
    <div class="card-wrapper">
      <div class="card-thumb">
        <img class="card-image" src = "${imageAddress}" alt = "${data.byline}">
        <p class="card-news-category">${data.section}</p>

        <p class="card-text-read">Already read
        <svg width="18" height="18" class="check-icon"><use href="../images/symbol-defs.svg#icon-check"</svg></p>
        <button id="${data.uri}" class="favourite-button" type="button" data-action="favourite-button">${btnText}</button>
      </div>
      <h3 class="card-news-title">${title}</h3>
      <p class="card-news-description">${subTitle}</p>
      <div class="card-info-container">

        <p class="card-datetime">${date}</p>
        <a class="card-link" href="${data.url}" target="_blank" rel="noopener noreferrer nofollow">Read more</a>

      </div>
    </div>
</li>`;
    })
    .join('');

  newsList.innerHTML = markUp;
}
