function addProduct(imageSrc, title, description, price, elementID) {
  var container = document.getElementById(elementID);

  var productDiv = document.createElement("div");
  productDiv.classList.add("product");

  var imgDiv = document.createElement("div");
  imgDiv.classList.add("product-image-container");
  productDiv.appendChild(imgDiv);

  var image = document.createElement("img");
  image.src = imageSrc;
  imgDiv.appendChild(image);

  var productInfoBox = document.createElement("div");
  productInfoBox.classList.add("product-info-box");
  productInfoBox.textContent = "INDISPONIBLE";
  imgDiv.appendChild(productInfoBox);

  var zoomDiv = document.createElement("div");
  zoomDiv.classList.add("zoom-icon");
  imgDiv.appendChild(zoomDiv);

  var zoomImg = document.createElement("img");
  zoomImg.src = "loupe.png";
  zoomDiv.appendChild(zoomImg);

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
