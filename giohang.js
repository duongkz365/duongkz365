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
                        <button class="every_product-quantity-l">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" value="${listcart[i].productQuantity}" class="every_product-quantity-value">
                        <button class="every_product-quantity-r">
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
console.log(renderCart("duongkz365"));
