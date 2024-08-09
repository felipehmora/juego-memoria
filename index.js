//Logica de tarjetas
const id1 = document.getElementById("item-1");
const toggle = () => id1.classList.toggle("image-1");

const id2 = document.getElementById("item-3");
const toggle2 = () => id2.classList.toggle("image-2");

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
