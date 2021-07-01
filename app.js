const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];

  const listGallery = document.querySelector('.js-gallery');
  const modalWindow = document.querySelector('.js-lightbox');
  const img = document.querySelector('.lightbox__image');
  const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
  const overlay = document.querySelector('.lightbox__overlay');
  let currentIndex;
  const maxIndexgalleryItems =galleryItems.length -1;
  
  

  
 
  

  const makeImageItemtemplate = itemsCard => {
  

return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="#"
  >
    <img
      class="gallery__image"
      src="${itemsCard.preview}"
      data-source="${itemsCard.original}"
      alt="${itemsCard.description}"
    />
  </a>
</li>`;
};

  const makeImagesItems = galleryItems.map(makeImageItemtemplate).join('');
  listGallery.insertAdjacentHTML('afterbegin', makeImagesItems);


  listGallery.addEventListener('click', onImg);
  closeBtn.addEventListener('click', onCloseModal);
  overlay.addEventListener('click', onCloseModal);
  window.addEventListener('keydown', onCloseModalEsc);
  window.addEventListener('keydown', onImgRight);
  window.addEventListener('keydown', onImgLeft);

function imgSrcGhange (a) {
  img.src = a;
};

function imgAltGhange (a) {
  img.alt = a;
};



  // function onImgLeftRight (e) {
    
  //   e.preventDefault();
  //   console.log(e.key);
  //   console.log(currentIndex);
  //   currentIndex = 2;
  //   console.log(currentIndex);
  //   if (e.key === "ArrowRight") {
     
  //     if(currentIndex = !currentIndex) { 
  //       currentIndex= 0;
        
  //     } else { 
  //       console.log(currentIndex);
  //       currentIndex += 1;
  //       console.log(5);
  //       console.log(currentIndex);
  //     }
    
  //     console.log(currentIndex);
  //     console.log(galleryItems[currentIndex].description);
  //     modalWindow.classList.toggle("is-open");
      
  //     img.src = galleryItems[currentIndex].original;
  //     img.alt = galleryItems[currentIndex].description;
  //     console.log(img);
  //   }

  // }

  function onImgRight (e) {

    if (e.key === "ArrowRight") {
      let targetImg = e.target;
      console.log(targetImg);
      console.log(img.src);
    currentIndex = galleryItems.map(x => x.original).indexOf(img.src);
    currentIndex +=1;
    if(currentIndex > maxIndexgalleryItems) { currentIndex = 0;};
    imgSrcGhange (galleryItems[currentIndex].original);

console.log(currentIndex);}
  }

  function onImgLeft (e) {

    if (e.key === "ArrowLeft") {
      let targetImg = e.target;
      console.log(targetImg);
      console.log(img.src);
    currentIndex = galleryItems.map(x => x.original).indexOf(img.src);
    currentIndex -=1;
    if(currentIndex < 0) { currentIndex = maxIndexgalleryItems;};
    imgSrcGhange (galleryItems[currentIndex].original);

console.log(currentIndex);}
  }


  //     if (e.target.nodeName != 'IMG') {
// return;
//     }
// {
// e.preventDefault();
// const targetImg = e.target;
// // console.log(targetImg.dataset);
// modalWindow.classList.toggle("is-open");
// // console.log(modalWindow);
// // img.src = targetImg.dataset.source;
// imgSrcGhange (targetImg.dataset.source);
// const alt = targetImg.getAttribute( "alt", e.target.dataset.source);
// // img.alt = alt;
// imgAltGhange (alt);

// console.log(img);
// let currentIndex = galleryItems.map(x => x.original).indexOf(targetImg.dataset.source);

// console.log(currentIndex);

// }  

  function onImg (event) {
    
    if (event.target.nodeName != 'IMG') {
return;
    }
{
event.preventDefault();
console.log(event.target.nodeName);
const targetImg = event.target;
// console.log(targetImg.dataset);
modalWindow.classList.toggle("is-open");
// console.log(modalWindow);
// img.src = targetImg.dataset.source;
imgSrcGhange (targetImg.dataset.source);
const alt = targetImg.getAttribute( "alt", event.target.dataset.source);
// img.alt = alt;
imgAltGhange (alt);

console.log(img);
currentIndex = galleryItems.map(x => x.original).indexOf(targetImg.dataset.source);

console.log(currentIndex);
}
 
  }


  function onCloseModal (e) {
    // const targetBtn = e.target;
    modalWindow.classList.toggle("is-open");
    // img.src = "";
    // img.alt = "";
    imgSrcGhange ("");
    imgAltGhange ("");
    // console.log(img);
    console.log(e.target);
  }

  function onCloseModalEsc (e) {
    console.log(e.key);
    if (e.key === "Escape")
    {
      modalWindow.classList.toggle("is-open");
    // img.src = "";
    // img.alt = "";
    imgSrcGhange ("");
    imgAltGhange ("");
    // console.log(img);
    
    };
  }

