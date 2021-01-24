const itemRef = document.querySelectorAll(".item");
console.log(`В списке ${itemRef.length} категории.`);

itemRef.forEach((element) =>
  console.log(
    `Категория: ${element.firstElementChild.textContent}, Количество элементов: ${element.lastElementChild.children.length}`
  )
);

// VAR 2

// const itemRef = document.querySelectorAll(".item");
// console.log(`В списке ${itemRef.length} категории.`);

// itemRef.forEach((element) =>
//   console.log(
//     `Категория: ${element.getElementsByTagName('h2')[0].textContent}, Количество элементов: ${element.getElementsByTagName('li').length}`
//   )
// );