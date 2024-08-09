//Logica de tarjetas

function doSomething() {
  const item1 = document.getElementById("item-1");

  console.log(item1);
  const action = () => alert("Hello");
  const toggle = () => item1.classList.toggle("image-1");

  item1.addEventListener("click", toggle);
  item1.removeEventListener("click", action);
}

doSomething();

function doSomething2() {
  const item1 = document.getElementById("item-5");

  console.log(item1);
  const action = () => alert("Hello");
  const toggle = () => item1.classList.toggle("image-1");

  item1.addEventListener("click", toggle);
  item1.removeEventListener("click", action);
}

doSomething2();

function doSomething3() {
  const item1 = document.getElementById("item-4");

  console.log(item1);
  const action = () => alert("Hello");
  const toggle = () => item1.classList.toggle("image-2");

  item1.addEventListener("click", toggle);
  item1.removeEventListener("click", action);
}

doSomething3();

function doSomething4() {
  const item1 = document.getElementById("item-3");

  console.log(item1);
  const action = () => alert("Hello");
  const toggle = () => item1.classList.toggle("image-2");

  item1.addEventListener("click", toggle);
  item1.removeEventListener("click", action);
}

doSomething4();

function doSomething5() {
  const item1 = document.getElementById("item-2");

  console.log(item1);
  const action = () => alert("Hello");
  const toggle = () => item1.classList.toggle("image-3");

  item1.addEventListener("click", toggle);
  item1.removeEventListener("click", action);
}

doSomething5();

function doSomething6() {
  const item1 = document.getElementById("item-6");

  console.log(item1);
  const action = () => alert("Hello");
  const toggle = () => item1.classList.toggle("image-3");

  item1.addEventListener("click", toggle);
  item1.removeEventListener("click", action);
}

doSomething6();
