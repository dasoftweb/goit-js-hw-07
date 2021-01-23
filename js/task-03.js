const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// VAR 1

// const galleryRef = document.querySelector("#gallery");

// const createGalleyImage = (src, alt) => {
//   const liHtml = "<li><img src=" + src + " alt=" + alt + "></img></li>";
//   return liHtml;
// };

// const imagesList = images.map((image) =>
//   createGalleyImage(image.url, image.alt)
// );

// galleryRef.insertAdjacentHTML("afterbegin", imagesList.join(""));

// VAR 2

// const galleryRef = document.querySelector("#gallery");

// function createGalleryImage(image) {
//   return `<li><img src="${this.url}" alt="${this.alt}"></img></li>`;
// }

// const imagesList = images.map((image) => createGalleryImage.call(image));

// galleryRef.insertAdjacentHTML("afterbegin", imagesList.join(""));

// VAR 3

// const galleryListRef = document.querySelector("#gallery");

// const createImg = (image) => { 
//     const liHtml = `<li><img src = ${image.url} alt= ${image.alt}></li>`
//     return liHtml;
// }

// const liImg = images.forEach((image) => return createImg(image));

// galleryListRef.insertAdjacentHTML("afterbegin", liImg);