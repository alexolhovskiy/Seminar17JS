console.log(data);

const newData = JSON.parse(data);
console.log(newData);

const divItems = document.querySelector('.down__items');

newData.forEach(element => {
    divItems.insertAdjacentHTML('beforeEnd',
        `<div class="item">
            <a href="#" class="item__link">
                <img class="item__link_img" src=${element.img} alt="item1">
                <div class="item__link_text">
                    <p class="item__link_text_1">${element.header}</p>
                    <p class="item__link_text_2">$${element.price}</p>
                </div>
            </a>
            <div class="item__box">
                <a href="single_page.html?id=${element.id}" class="item__box_add">
                    <img class="item__box_add_img" src="img/forma_1_copy_1287.png" alt="basket">
                    <p class="item__box_add_text">Add to cart</p>
                </a>
            </div>
        </div>`
    )
});