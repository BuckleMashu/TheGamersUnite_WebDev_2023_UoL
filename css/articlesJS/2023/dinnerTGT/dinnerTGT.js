//to display different table
let x = 0;
showRecipe(x);

function currentRecipe(n) {
  showRecipe(x = n);
}

function showRecipe(n) {
  let page = document.getElementsByClassName("dish");
  let dot = document.getElementsByClassName("dot");
    console.log(page);
  if (n > page.length) {x = 0}
  if (n < 0) {x = page.length}

  for (let i = 0; i < page.length; i++) {
    page[i].style.display = "none";
    dot[i].style.border = "none"
  }

  dot[x].style.border = "solid"
  page[x].style.display = "block";

}