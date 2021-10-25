




var listcart = [
    {
        productID: "1",
        productOfUser: "kydinh",
        productQuantity: 2,
        checked: "false",
    },
    {
        productID: "2",
        productOfUser: "kydinh",
        productQuantity: 2,
        checked: "false",
    },
    {
        productID: "3",
        productOfUser: "kydinh",
        productQuantity: 6,
        checked: "false",
    },
    {
        productID: "4",
        productOfUser: "kydinh",
        productQuantity: 2,
        checked: "false",
    },
    {
        productID: "5",
        productOfUser: "kienbui",
        productQuantity: 2,
        checked: "false",
    },
    {
        productID: "6",
        productOfUser: "kienbui",
        productQuantity: 2,
        checked: "false",
    },
    {
        productID: "7",
        productOfUser: "kienbui",
        productQuantity: 2,
        checked: "false",
    },
    {
        productID: "8",
        productOfUser: "kienbui",
        productQuantity: 2,
        checked: "false",
    },
    {
        productID: "9",
        productOfUser: "kienphan",
        productQuantity: 2,
        checked: "false",
    },
    {
        productID: "10",
        productOfUser: "kienphan",
        productQuantity: 2,
        checked: "false",
    },
    {
        productID: "11",
        productOfUser: "kienphan",
        productQuantity: 2,
        checked: "false",
    },
    {
        productID: "12",
        productOfUser: "kienphan",
        productQuantity: 2,
        checked: "false",
    },
    {
        productID: "13",
        productOfUser: "thanh nguyen",
        productQuantity: 2,
        checked: "false",
    },
    {
        productID: "14",
        productOfUser: "thanh nguyen",
        productQuantity: 2,
        checked: "false",
    },
    {
        productID: "15",
        productOfUser: "thanh nguyen",
        productQuantity: 2,
        checked: "false",
    },
    {
        productID: "16",
        productOfUser: "thanh nguyen",
        productQuantity: 2,
        checked: "false",
    },
];

var allproduct = [
    {   productID: "1",
        productUser: "duongkz365",
        productName: "Cây Bút biết nói",
        price: 1600,
        description: "",
        imgBase64: "./imgs/avt_01.jpg",
        quantity: 0,
        discountCode: "",
        infomation: "",
    },
    {   productID: "2",
        productUser: "duongkz365",
        productName: "Cây Bút biết cười",
        price: 2400,
        description: "",
        imgBase64: "./imgs/avt_01.jpg",
        quantity: 0,
        discountCode: "",
        infomation: "",
    },
    {   productID: "3",
        productUser: "duongkz365s",
        productName: "Cây Bút Biết Khóc",
        price: 6000,
        description: "",
        imgBase64: "./imgs/avt_01.jpg",
        quantity: 0,
        discountCode: "",
        infomation: "",
    }
];
var username = 'kydinh';



$(".contaner_every-product-list").html(renderCart(username));
$(".container_pay").html(renderPay(username));

function increase(id){
    listcart.forEach(function(e){
        if(e.productID == id){
            e.productQuantity++;
        }
    })
    $(".contaner_every-product-list").html(renderCart(username));
    $(".container_pay").html(renderPay(username));
    
}

function reduce(id){
    listcart.forEach(function(e){
        if(e.productID == id){
            e.productQuantity--;
            if(e.productQuantity == -1){
                alert("Số lượng không thể nhỏ hơn 0");
                e.productQuantity = 0;
            }
        }
    })
    $(".contaner_every-product-list").html(renderCart(username));
    $(".container_pay").html(renderPay(username));
}
function changeValue (id){
    
    
    listcart.forEach(function(e){
        console.log(id);
        if(e.productID == id){
           e.productQuantity =  $(`#cart_${id}`).val();
        }
    })
    $(".contaner_every-product-list").html(renderCart(username));
    $(".container_pay").html(renderPay(username));
    
}
var ids = `#cart_1`;
console.log(`#$($(ids))`);

function renderPay(username){

    var price = 0;
    for(var i = 0;i<listcart.length;i++){
        if(listcart[i].productOfUser == username){
            for(var j = 0;j<allproduct.length;j++){
                if(listcart[i].productID == allproduct[j].productID){
                    price = price + listcart[i].productQuantity* allproduct[j].price;
                }
            }
        }
    }
    
    var html = `<div class="grid wide container_pay-flex">
    <div class="container_pay-description">
        Tổng giá tiền (<span>10</span> Sản Phẩm ):
        <span>${price} </span>VND
    </div>
    <a href="#" class="container_pay-btn">Mua Hàng</a>
</div>`;
    return html;
}


function renderCart (username){
var html = "";
for(var i = 0;i<listcart.length;i++){
    if(listcart[i].productOfUser == username){
        

        for(var j = 0;j<allproduct.length;j++){
            if(listcart[i].productID== allproduct[j].productID){
                html = html + `<li class="container_every-product-item">
                <div class="row">
                    <div class="column column__pc-4 every_name-flex">
                        <div class="every_product-checkbox">
                            <i class="fas fa-check"></i>
                        </div>
                        <img src="${allproduct[j].imgBase64}" alt="" class="every_product-img">
                        <h3 class="every_product-name">
                            ${allproduct[j].productName}
                        </h3>
                    </div>
                    <div class="column column__pc-2 every_name-flex every_name-color" id="every_products-unitPrice">
                        ${allproduct[j].price}
                    </div>
                    <div class="column column__pc-2 every_quantity-btn every_name-flex">
                        <button class="every_product-quantity-l" onclick = "reduce('${listcart[i].productID}')">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" value="${listcart[i].productQuantity}" class="every_product-quantity-value" id = "cart_${listcart[i].productID}" oninput ="changeValue ('${listcart[i].productID}')">
                        <button class="every_product-quantity-r" onclick = "increase('${listcart[i].productID}')">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="column column__pc-2 every_name-flex every_name-color">
                        ${listcart[i].productQuantity* allproduct[j].price}
                    </div>
                    <div class="column column__pc-2 every_name-flex every_name-color">
                        Xóa
                    </div>
                </div>
            </li>`
            }
        }



    }
}
return html;
}



/*
                                <li class="container_every-product-item">
                                    <div class="row">
                                        <div class="column column__pc-4 every_name-flex">
                                            <div class="every_product-checkbox">
                                                <i class="fas fa-check"></i>
                                            </div>
                                            <img src="./imgs/avt_01.jpg" alt="" class="every_product-img">
                                            <h3 class="every_product-name">
                                                Phấn viết bảng không khói không dấu vết
                                            </h3>
                                        </div>
                                        <div class="column column__pc-2 every_name-flex every_name-color" id="every_products-unitPrice">
                                            12000
                                        </div>
                                        <div class="column column__pc-2 every_quantity-btn every_name-flex">
                                            <button class="every_product-quantity-l">
                                                <i class="fas fa-minus"></i>
                                            </button>
                                            <input type="number" value="2" class="every_product-quantity-value">
                                            <button class="every_product-quantity-r">
                                                <i class="fas fa-plus"></i>
                                            </button>
                                        </div>
                                        <div class="column column__pc-2 every_name-flex every_name-color">
                                            56000
                                        </div>
                                        <div class="column column__pc-2 every_name-flex every_name-color">
                                            Xóa
                                        </div>
                                    </div>
                                </li>
*/
