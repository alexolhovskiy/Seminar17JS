
//document.location.href       http://domain.ru/saytostroy/?page=4#top
//document.location.protocol   http:
//document.location.host       domain.ru
//document.location.pathname / saytostroy /
const id = (+document.location.search.split('=')[1])-1;
console.log(id);
//document.location.hash       #top

const newData = JSON.parse(data);
console.log(newData[id]);


const main_product = document.querySelector('.main_products');


main_product.insertAdjacentHTML('beforeEnd',
    `
        <div class="to_left">
            <img src="img/__2494.png" alt="to_left"/>
        </div>
        <img src=${newData[id].img} class="main_photo" alt="photo" />
        <!--<div class="main_photo"></div>-->

        <div class="to_right">
            <img src="img/__2499.png" alt="to_right"/>
        </div>



        <!--Product description-->

        <section class="description-box">
            <div class="description">

                <p class="des_text1">${newData[id].collection}</p>

                <div class="common_boarder">
                    <div class="des_border">
                        <div class="des_border_middle"></div>
                    </div>
                </div>


                <p class="des_text2">${newData[id].header}</p>

                <div class="text_block">
                    <div class="text3_block">
                        <p class="des_text3">Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.</p>
                    </div>
                </div>


                <div class="material_design">
                    <p class="des_text4">MATERIAL: <span class="des_text5">${newData[id].material}</span></p>
                    <p class="des_text4">DESIGNER: <span class="des_text5">${newData[id].designer}</span></p>
                </div>

                <p class="des_text6">$${newData[id].price}</p>

                <div class="common_boarder">
                    <div class="down_boarder"></div>
                </div>

                <div class="down_griad">



                    <div class="down_griad_1">

                        <p class="des_text7">CHOOSE COLOR</p>
                        <div class="color_container down_griad_1_input">
                            <div class="down_griad_1_input_box">
                                <div class="down_griad_1_input_box_quad"></div>
                            </div>
                            <input class="input_color" type="text" placeholder="Red" />
                            <img src="img/__2565.png" alt="bird" />
                            <div class="color_list"></div>

                        </div>


                    </div>

                    <div class="down_griad_2">
                        <p class="des_text7">CHOOSE SIZE</p>
                        <div class="size_container size_input">
                            <input class="input_size" type="text" min="5" max="10" placeholder="  XXL" />
                            <div class="size_list"></div>
                        </div>
                    </div>


                    <div class="down_griad3">
                        <p class="des_text7">QUANTITY</p>
                        <input class="input_quantity" type="number" placeholder=" 1" />
                    </div>

                    <div class="down_griad4">

                        <form name="buyForm" method="post" action="ShoppingCart.html">
                            <button type="submit" class="grid_button">
                                <svg class="svg_basket" width="26" height="24" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.9521 23.2662H21.8397C21.2306 23.2662 20.7188 22.7666 20.6746 22.1289C20.6302 21.4602 21.1187 20.8781 21.7637 20.8341C21.7891 20.8324 21.8156 20.8315 21.8417 20.8315C22.4587 20.8315 22.9755 21.3214 23.0213 21.9482C23.0331 22.1967 22.9926 22.5509 22.7371 22.8434L22.7312 22.8502L22.7254 22.8571C22.5287 23.0907 22.2619 23.2316 21.9521 23.2662ZM8.22003 23.2599C7.56946 23.2599 7.04022 22.7169 7.04022 22.0496C7.04022 21.3827 7.56946 20.8401 8.22003 20.8401C8.87061 20.8401 9.39984 21.3827 9.39984 22.0496C9.39984 22.7169 8.87061 23.2599 8.22003 23.2599Z" fill="white" />
                                    <path d="M21.8765 22.2662C21.9215 22.2549 21.9428 22.2339 21.9605 22.2129C21.9683 22.2037 21.9761 22.1946 21.9839 22.1855C22.0204 22.1438 22.0237 22.0553 22.0229 22.0105C22.0097 21.9044 21.9189 21.8315 21.8417 21.8315C21.838 21.8315 21.8341 21.8317 21.8317 21.8318C21.7536 21.8372 21.6658 21.9409 21.6724 22.0625C21.6818 22.1793 21.7679 22.2662 21.8397 22.2662H21.8765ZM8.22003 22.2599C8.31921 22.2599 8.39984 22.1655 8.39984 22.0496C8.39984 21.9341 8.31921 21.8401 8.22003 21.8401C8.12091 21.8401 8.04022 21.9341 8.04022 22.0496C8.04022 22.1655 8.12091 22.2599 8.22003 22.2599ZM21.9999 24.2662C21.9522 24.2662 21.8883 24.2662 21.8397 24.2662C20.7021 24.2662 19.7571 23.3545 19.677 22.198C19.5969 20.9929 20.4942 19.9183 21.6957 19.8364C21.7446 19.8331 21.7933 19.8315 21.8417 19.8315C22.9804 19.8315 23.9418 20.7324 24.0195 21.8884C24.051 22.4915 23.8746 23.0612 23.4903 23.5012C23.106 23.9575 22.5768 24.2177 21.9999 24.2662ZM8.22003 24.2599C7.01581 24.2599 6.04022 23.2709 6.04022 22.0496C6.04022 20.8291 7.01581 19.8401 8.22003 19.8401C9.42419 19.8401 10.3998 20.8291 10.3998 22.0496C10.3998 23.2709 9.42419 24.2599 8.22003 24.2599ZM21.1989 17.3938H9.13354C8.70062 17.3938 8.31635 17.1005 8.2038 16.6775L4.27802 2.24768H1.52222C0.993896 2.24768 0.561035 1.80859 0.561035 1.27039C0.561035 0.733032 0.993896 0.292969 1.52222 0.292969H4.99982C5.43182 0.292969 5.8161 0.586304 5.92859 1.01025L9.85443 15.4391H20.5581L24.1149 7.13379H12.2583C11.7291 7.13379 11.2962 6.69373 11.2962 6.15649C11.2962 5.61914 11.7291 5.17908 12.2583 5.17908H25.5891C25.9095 5.17908 26.2146 5.34192 26.3901 5.61914C26.5665 5.89539 26.5989 6.23743 26.4702 6.547L22.08 16.807C21.9198 17.1653 21.5832 17.3938 21.1989 17.3938Z" fill="white" />
                                    <path d="M21.8765 22.2662C21.9215 22.2549 21.9428 22.2339 21.9605 22.2129C21.9683 22.2037 21.9761 22.1946 21.9839 22.1855C22.0204 22.1438 22.0237 22.0553 22.0229 22.0105C22.0097 21.9044 21.9189 21.8315 21.8417 21.8315C21.838 21.8315 21.8341 21.8317 21.8317 21.8318C21.7536 21.8372 21.6658 21.9409 21.6724 22.0625C21.6818 22.1793 21.7679 22.2662 21.8397 22.2662H21.8765ZM8.22003 22.2599C8.31921 22.2599 8.39984 22.1655 8.39984 22.0496C8.39984 21.9341 8.31921 21.8401 8.22003 21.8401C8.12091 21.8401 8.04022 21.9341 8.04022 22.0496C8.04022 22.1655 8.12091 22.2599 8.22003 22.2599ZM21.9999 24.2662C21.9522 24.2662 21.8883 24.2662 21.8397 24.2662C20.7021 24.2662 19.7571 23.3545 19.677 22.198C19.5969 20.9929 20.4942 19.9183 21.6957 19.8364C21.7446 19.8331 21.7933 19.8315 21.8417 19.8315C22.9804 19.8315 23.9418 20.7324 24.0195 21.8884C24.051 22.4915 23.8746 23.0612 23.4903 23.5012C23.106 23.9575 22.5768 24.2177 21.9999 24.2662ZM8.22003 24.2599C7.01581 24.2599 6.04022 23.2709 6.04022 22.0496C6.04022 20.8291 7.01581 19.8401 8.22003 19.8401C9.42419 19.8401 10.3998 20.8291 10.3998 22.0496C10.3998 23.2709 9.42419 24.2599 8.22003 24.2599ZM21.1989 17.3938H9.13354C8.70062 17.3938 8.31635 17.1005 8.2038 16.6775L4.27802 2.24768H1.52222C0.993896 2.24768 0.561035 1.80859 0.561035 1.27039C0.561035 0.733032 0.993896 0.292969 1.52222 0.292969H4.99982C5.43182 0.292969 5.8161 0.586304 5.92859 1.01025L9.85443 15.4391H20.5581L24.1149 7.13379H12.2583C11.7291 7.13379 11.2962 6.69373 11.2962 6.15649C11.2962 5.61914 11.7291 5.17908 12.2583 5.17908H25.5891C25.9095 5.17908 26.2146 5.34192 26.3901 5.61914C26.5665 5.89539 26.5989 6.23743 26.4702 6.547L22.08 16.807C21.9198 17.1653 21.5832 17.3938 21.1989 17.3938Z" fill="white" />
                                </svg>

                                <div class="text_grid_button">
                                    <p>Add to Cart</p>
                                </div>
                            </button>
                        </form>


                    </div>

                </div>

            </div>
        </section>

    `
);


let flag = true;

let color = document.querySelector(".color_container");
let size = document.querySelector(".size_container");
let colorList = document.querySelector(".color_list");
color.addEventListener("click", (e) => {

    if (flag) {
        const newColors = newData[id].colors; //JSON.parse(colors);
        console.log(newColors);
        newColors.forEach(elem => {
            colorList.insertAdjacentHTML('beforeEnd',
                `<a href="#">
                    <div class="color_input color_input2">

                        <div class="color_box">
                            <div style="background:${elem.color};" data-name=${elem.name} class="box">

                            </div>
                        </div>
                        <input class="input_color" type="text" value=${elem.name} />
            
                    </div>
                </a>`
            )
        })
        flag = false;
    } else {
        console.log("out");
        [...colorList.children].forEach(elem => {
            elem.remove();
        })
        flag = true;
    }

});

colorList.addEventListener("click", (e) => {
    let elem = e.target;
    console.log(elem);
    let elem_c = elem.style.background;
    console.log(elem_c);
    let elem_c_t = elem.getAttribute('data-name');
    console.log(elem_c_t);

    document.querySelector(".down_griad_1_input_box_quad").style.background = elem_c;
    document.querySelector(".input_color").value = elem_c_t;
});


let s_flag = true;
let sizeList = document.querySelector(".size_list");
size.addEventListener("click", (e) => {
    if (s_flag) {
        const newSizes = newData[id].sizes;
        console.log(newSizes);
        newSizes.forEach(elem => {
            sizeList.insertAdjacentHTML('beforeEnd',
                `<a href="#">
                    <div class="size_input  size_input2">
                        <div class="size">
                            <input class="input_size" type="text" min="5" max="10" value="${elem.name}" />
                        </div>
                    </div>
                </a>`
            )
        })
        s_flag = false;
    } else {
        console.log("out");
        [...sizeList.children].forEach(elem => {
            elem.remove();
        })
        s_flag = true;
    }

});

sizeList.addEventListener("click", (e) => {
    let elem = e.target;
    console.log(elem.value);
    document.querySelector(".input_size").value = elem.value;
});


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



document.buyForm.addEventListener('click', (e) => {

    console.log(" " + id + " "+ document.querySelector(".input_color").value + " "+ document.querySelector(".input_size").value + " " + document.querySelector(".input_quantity").value);

    const obj = {
        id: id,
        color:document.querySelector(".input_color").value,
        size: document.querySelector(".input_size").value,
        quantity: document.querySelector(".input_quantity").value
    }


    let arr=0;
    let products = getCookie('products');
    if (products != 0) {
        arr = JSON.parse(products);
    }
    console.log(arr);

    if (arr.length > 0) {
        let present_obj = arr.find(b => {
            if ((obj.id == b.id) & (obj.color == b.color) & (obj.size == b.size)) {
                return true;
            } else {
                return false;
            }

        });


        if (present_obj != undefined) {
            let temp1 = +present_obj.quantity;
            let temp2 = +obj.quantity;
            present_obj.quantity = temp1 + temp2;
            document.cookie = "products =" + JSON.stringify(arr);
        } else {
            arr.push(obj);
            document.cookie = "products =" + JSON.stringify(arr);
        }
    } else {
        let newArr = new Array();
        newArr.push(obj);
        document.cookie = "products =" + JSON.stringify(newArr);
    }
    
    //document.cookie = "user=Sasha";
    console.log("Console products =" + JSON.stringify(obj));
    //document.cookie = "products =" + JSON.stringify(obj);
    
    //alert(document.cookie);
    console.log(document.cookie);

    window.open('ShoppingCart.html');
    e.preventDefault();

});