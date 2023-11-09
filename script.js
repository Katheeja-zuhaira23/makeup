
function news() {
  // Get the value of the input field
  // let category = document.getElementsByClassName("category")[0].value;

  let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick`

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

      // let synonym = document.getElementsByClassName("synonym")[0]
      // synonym.innerHTML = `<div class="card">
      //   <div class="card-body">
      //     SYNONYMS: <br><br>${data[0].meanings[0].synonyms}
      //   </div>
      // </div>`
    })

    .catch(error => {
      console.error('error:', error);
    });

}

news()