var products = [
    {
        image: 'https://www.pngitem.com/pimgs/m/130-1304747_wallets-png-image-free-download-leather-wallet-png.png',
        name: 'Volet',
        price: 2000
    },
    {
        image: 'https://discountshop-online.com/604-medium_default/apple-iphone-12-pro-max-128-256-512-go.jpg',
        name: 'Iphone Pro Max',
        price: 1200000
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNBFR_tLDICjezixOu9vQ3X7Af93KI1EnPA&usqp=CAU',
        name: 'Airpods',
        price: 2000
    },
    {
        image : 'https://static.wixstatic.com/media/2cd43b_70674f11a01e43f19366ee72aee4b8bb~mv2.png/v1/fill/w_320,h_507,q_90/2cd43b_70674f11a01e43f19366ee72aee4b8bb~mv2.png',
        name : 'Watch',
        price : '800'
    }
]

var mainDiv = document.getElementById('products')

for (var i = 0; i < products.length; i++) {
    mainDiv.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${products[i].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products[i].name}</h5>
    <p class="card-text">${products[i].price}</p>
    <a href="#" onclick ='addtocart("${products[i].name}","${products[i].price}","${products[i].image}")' class="btn btn-primary">BUY</a>
  </div>
</div>`
}
var allCarts = [];
var getdata = localStorage.getItem('mul')
if (getdata !== null) {
    allCarts = JSON.parse(getdata)
    var shopping = document.getElementById('mybadge')
    shopping.innerHTML = allCarts.length
}

function addtocart(name, price, image) {
    var obj =
    {
        name,
        price,
        image,
        
    }

    // allCarts.push(obj)
    localStorage.setItem('Items', JSON.stringify(obj))
    var shopping = document.getElementById('mybadge')
    shopping.innerHTML = allCarts.length




    window.location = 'addcart.html'
}



