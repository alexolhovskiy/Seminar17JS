
console.log("Hi");
console.log(document.cookie);

function getCookie(name) {
    let arr = document.cookie.split('; ');
    for (var i = 0; i < arr.length; i++) {
        let subarr = arr[i].split('=');
        if (subarr[0] == name) {
            return subarr[1];
        }
    }
    return 0;
}

let arr = 0;
let products = getCookie('products');
if (products != 0) {
    arr = JSON.parse(products);
}

const newData = JSON.parse(data);

const grid = document.querySelector('.grid');
if (arr.length > 0) {
    arr.forEach((element,index) => {
        console.log("foreach");
        grid.insertAdjacentHTML('beforeEnd',
            `<div class="product">
                <a href="single_page.html" class="product-img">
                    <img src=${newData[element.id].img} alt="buy" />
                </a>

                <div class="characteristic">
                    <p class="text1">${newData[element.id].header}</p>
                    <p class="text2">Color:   <span class="text3">${element.color}</span></p>
                    <p class="text2">Size:   <span class="text3">${element.size}</span></p>
                </div>
                <div>
                    <p class="text1">$${newData[element.id].price}</p>
                </div>
                <div>
                    <p class="text1">${element.quantity}</p>
                </div>
                <div>
                    <p class="text1">FREE</p>
                </div>
                <div>
                    <p class="text1">$${newData[element.id].price * element.quantity}</p>
                </div>

                <div class="cross_delete" >
                    <img src="img/__2890.png" data-index=${index} />
                </div>
            </div>`
        )
    });
}


grid.addEventListener("click", (e) => {
    let index = +e.target.getAttribute('data-index');
    console.log(index);
    arr.splice(index, 1);
    document.cookie = "products =" + JSON. stringify(arr);
    location.reload();
});
