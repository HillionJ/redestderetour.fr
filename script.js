// Fonction pour ajouter un produit au catalogue
function addProduct(imageSrc, title, description, price, elementID) {
  var container = document.getElementById(elementID);

  var productDiv = document.createElement("div");
  productDiv.classList.add("product");

  var image = document.createElement("img");
  image.src = imageSrc;
  productDiv.appendChild(image);

  var productTitle = document.createElement("div");
  productTitle.classList.add("product-title");
  productTitle.textContent = title;
  productDiv.appendChild(productTitle);

  var productDescription = document.createElement("div");
  productDescription.classList.add("product-description");
  productDescription.textContent = description;
  productDiv.appendChild(productDescription);

  var productPrice = document.createElement("div");
  productPrice.classList.add("product-price");
  productPrice.textContent = price;
  productDiv.appendChild(productPrice);

  container.appendChild(productDiv);
}
