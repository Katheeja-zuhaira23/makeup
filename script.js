
function cosmetic() {
  // Get the value of the input field
  let brand = document.getElementsByClassName("brand")[0].value;
  let category = document.getElementsByClassName("category")[0].value;


  let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${category}`

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

      let makeup = document.getElementsByClassName("makeup")[0]
      makeup.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="https://www.marketing91.com/wp-content/uploads/2018/05/Cosmetic-Brands.jpg" class="card-img-top" alt="weather image">
        <div class="card-body">
          <h5 class="card-title">COSMETIC DETAILS</h5>
          <p class="card-text">BRAND: ${data[0].brand} </p>
          <p class="card-text">CATEGORY: ${data[0].name} </p>
          <p class="card-text">DESCRIPTION: ${data[0].description} </p>
          <p class="card-text">PRICE: $ ${data[0].price} </p>
          <p class="card-text">RATINGS: ${data[0].rating} </p>
          <p class="card-text">: ${data[0].tag_list} </p>

        </div>
      </div>`
    })

    .catch(error => {
      console.error('error:', error);
    });

}
cosmetic()
