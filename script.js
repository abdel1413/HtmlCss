

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.querySelector('.design').classList.toggle('dark');
});


document.querySelector('.saturation-btn').addEventListener('click', () => {
  document.querySelector('.saturation-container').classList.toggle('dark');
});


//get clustered card to generate an html
const clusteredCardContainer = document.querySelector(".clustered-card-container")

clusteredCardContainer.innerHTML = `
<div class="card">
<h2>Clustered card <span style="color:red">(Not Advised)</span></h2>
<p style='color: red'>Too much information</p>
  <img src="https://placehold.co/150x150" alt="Example Product Image">
  <h2><strong><em>Product Name: Ultimate Edition</em></strong></h2>
  <p>
    This is a great product that you will love! It has many features and benefits that will make your life easier and more enjoyable. Whether you're at home or on the go, this product is perfect for all situations. Don’t miss out on this incredible offer, buy now and experience the difference!
  </p>
  <button>Buy Now</button>
  <button>Learn More</button>
  <button>Add to Wishlist</button>
  <p><strong>Only 3 left in stock!</strong></p>
  <p><em>Rated 4.8 stars by 2,391 customers</em></p>
</div>`

//get the user-friendly card
const idealCard = document.querySelector(".ideal-card")
idealCard.innerHTML = `<div class="card">
<h2> keep the card simple</h2>
  <img src="https://placehold.co/150x150" alt="Example Product Image">
  <h2>Product Name</h2>
  <button>Buy Now</button>
</div>`