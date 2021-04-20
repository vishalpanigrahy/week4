// Week 4 Lab

// The provided code goes out to the Internet to get our products data.
// You can visit the provided URL – https://kiei451.com/api/products.json –
// in Chrome to see what the data looks like.

// Write a loop to iterate through the product data; each iteration of the loop
// should add each product to the document, by appending HTML to an existing element on the page
// with the class "products". You can use the existing HTML in the "products" element
// as a template, deleting it when you're finished.

// Write the recipe (algorithm) in the comments, then write the code!

window.addEventListener(`DOMContentLoaded`, async function() {
  let response = await fetch('https://kiei451.com/api/products.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.log(json)
  
  // Recipe:

  // Create a variable for the products data
  let productList = json.products 
  
 
  for(let i=0; i<productList.length; i++){    // Loop through the products data
    let product = productList[i] // Create a variable to store each product in memory
    let htmlList = document.querySelector('.products') // Create a variable for the HTML element we're going to add to
    // Insert HTML into the products element, using the data from each product
    htmlList.insertAdjacentHTML(`beforeend`,`<div class="p-4 w-full md:w-1/2 lg:w-1/3">
        <div class="border h-full p-4 flex flex-col">
          <h2 class="text-lg font-bold mb-4">${product.name}</h2>
          <div class="mb-4"><img src=${product.image}></div>
          <div class="mb-4 text-gray-900">${product.description}</div>
          <div class="mt-auto text-purple-500 text-2xl">${product.price}</div>
        </div>
      </div>`)
  }
})