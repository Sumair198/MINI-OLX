var div2 = document.getElementById('mul-products')
var allCarts = [];


var getmul = localStorage.getItem('mul')
if(getmul !== null)
{
    allCarts = JSON.parse(getmul)
    var shopping = document.getElementById('mybadge')
    shopping.innerHTML = allCarts.length
}

var carts = localStorage.getItem('Items')
var z = JSON.parse(carts)






div2.innerHTML += `<div class="card" style="width: 18rem;">
<img src="${z.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${z.name}</h5>
  <p class="card-text">${z.price}</p>
  <a href="#" onclick= 'add()' class="btn btn-primary">ADD-TO-CART</a>
</div>
</div>`

function add()
{
    allCarts.push(z)
    localStorage.setItem('mul',JSON.stringify(allCarts))
    var shopping = document.getElementById('mybadge')
    shopping.innerHTML = allCarts.length
}



