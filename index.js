//Logica de tarjetas
const id1 = document.getElementById("item-1");
const toggle = () => id1.classList.toggle("image-1");

const id2 = document.getElementById("item-3");
const toggle2 = () => id2.classList.toggle("image-2");

const id3 = document.getElementById("item-2");
const toggle3 = () => id3.classList.toggle("image-3");

const id4 = document.getElementById("item-5");
const toggle4 = () => id4.classList.toggle("image-2");

const id5 = document.getElementById("item-4");
const toggle5 = () => id5.classList.toggle("image-1");

const id6 = document.getElementById("item-6");
const toggle6 = () => id6.classList.toggle("image-3");

function doSomething(id, toggle) {
  console.log(id);
  const action = () => alert("Hello");

  id1.removeEventListener("click", action);
}

if (id1.addEventListener("click", toggle)) {
  doSomething(id1, toggle);
}

if (id2.addEventListener("click", toggle2)) {
  doSomething(id2, toggle2);
}

if (id3.addEventListener("click", toggle3)) {
  doSomething(id3, toggle3);
}

if (id4.addEventListener("click", toggle4)) {
  doSomething(id4, toggle4);
}

if (id5.addEventListener("click", toggle5)) {
  doSomething(id5, toggle5);
}

if (id6.addEventListener("click", toggle6)) {
  doSomething(id6, toggle6);
}
