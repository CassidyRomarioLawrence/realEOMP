let myProducts = JSON.parse(localStorage.getItem('items')) ?
    JSON.parse(localStorage.setItem('items')) :
    [
        {
            id: 1,
            image: "../assets/Tee1Back.png",
            description: {
                productName: "Men Bear Cartoon Graphic Tee",
                productSize: "XS, S, M, L, XL, XXL",
                productColor: "Light Grey",
                price: 135
            }
        },
        {
            id: 2,
            image: "../assets/Tee2Front.png",
            description: {
                productName: "Men Letter & Drink Print Tee",
                productSize: "XS, S, M, L, XL, XXL",
                productColor: "Black",
                price: 128
            }
        },
        {
            id: 3,
            image: "../assets/Pants2Front.png",
            description: {
                productName: "Men Plaid Slant Pocket Tailored Pants",
                productSize: "XS, S, M, L, XL, XXL",
                productColor: "Navy Blue",
                price: 286
            }
        },
        {
            id: 4,
            image: "../assets/Tee4Front.png",
            description: {
                productName: "Men Astronaut & Letter Graphic Tee",
                productSize: "XS, S, M, L, XL, XXL",
                productColor: "Apricot",
                price: 148
            }
        },
        {
            id: 5,
            image: "../assets/Sweats1Front.png",
            description: {
                productName: "Letter Graphic Drawstring Sweatpants",
                productSize: "XS, S, M, L, XL, XXL",
                productColor: "Black and White",
                price: 225
            }
        },
        {
            id: 6,
            image: "../assets/Pants3Front.png",
            description: {
                productName: "Men Flap Pocket Drawstring Waist Pants",
                productSize: "XS, S, M, L, XL, XXL",
                productColor: "Khaki",
                price: 286
            }
        },
        {
            id: 7,
            image: "../assets/Tee3Front.png",
            description: {
                productName: "Men Reflective Bear & Slogan Graphic Tee",
                productSize: "XS, S, M, L, XL, XXL",
                productColor: "Black",
                price: 146
            }
        },
        {
            id: 8,
            image: "../assets/Pants4Front.png",
            description: {
                productName: "Men Plaid Print Drawstring Waist Pants",
                productSize: "XS, S, M, L, XL, XXL",
                productColor: "Grey",
                price: 195
            }
        },
        {
            id: 9,
            image: "../assets/Tee5Front.png",
            description: {
                productName: "Men Bear Print Round Neck Tee",
                productSize: "XS, S, M, L, XL, XXL",
                productColor: "Black",
                price: 120
            }
        },
        {
            id: 10,
            image: "../assets/Shorts1Front.png",
            description: {
                productName: "Men Drawstring Waist Straight Leg Shorts",
                productSize: "XS, S, M, L, XL, XXL",
                productColor: "Apricot",
                price: 263
            }
        },
        {
            id: 11,
            image: "../assets/Shorts2Front.png",
            description: {
                productName: "Letter Embroidery Flap Pocket Shorts",
                productSize: "XS, S, M, L, XL, XXL",
                productColor: "Black",
                price: 280
            }
        },
        {
            id: 12,
            image: "../assets/Pants5front.png",
            description: {
                productName: "Drawstring Waist Gingham Pants",
                productSize: "XS, S, M, L, XL, XXL",
                productColor: "Black and White",
                price: 310
            }
        },
    ];

function displayed() {
    myProducts.forEach((items) => {
        document.querySelector('#prod').innerHTML += `
        <div class="card p-2 mx-3" style="width: 18rem;">
  <img src="${items.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${items.description.productName}</h5>
    <p class="card-text">Sizes: ${items.description.productSize}</p>
    <p class="card-text">Color: ${items.description.productColor}</p>
    <p class="card-text">Price: R${items.description.price}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>`
    })
}

displayed()