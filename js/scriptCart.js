let allData;
let modalVisible = false;
let num = 0;

function loadData(data){
    allData = data;
}

function addToCart(id){
    num += 1;
    if(num === 1){
        document.getElementById("cartNum").className = "cartNumVisible";
        document.getElementById("cartImg").addEventListener("click", showHideModal);
    }
    document.getElementById("cartNum").innerHTML = num;
    let x = id.slice(7, 8);
    addProduct(x);
}

function addProduct(id){
    for(let i of allData){
        if(i.id == id){
            i.quantity += 1;
            if(modalVisible == true){
              showModal();
            }
            return;
        }
    }
}

function showHideModal(){
    if(modalVisible == false){
        modalVisible = true;
        showModal();
    }
    else{
        modalVisible = false;
        hideModal();
    }
}

function hideModal(){
    document.getElementById("cartModal").innerHTML = "";
}

function showModal(){
    if(document.getElementById("cartModal").innerHTML != ""){
        document.getElementById("cartModal").innerHTML = "";
    }
    let total = 0;
    for(let i of allData){
        if(i.quantity != 0){
            total += (i.quantity*i.price);
            let oneProduct = document.createElement("div");
            oneProduct = createModalElement(i);
            document.getElementById("cartModal").appendChild(oneProduct);
        }
    }

    document.querySelectorAll(".cartRemove").forEach(item => {
        item.addEventListener("click", event => {
          removeFromCart(item.id);
        })
    })

    let line = document.createElement("hr");
    line.id = "totalLine";
    document.getElementById("cartModal").appendChild(line);

    let divTotal = document.createElement("div");
    divTotal.id = "divTotal";

    let divTotalWord = document.createElement("div");
    divTotalWord.innerHTML = "Total:";
    divTotalWord.id = "divTotalWord";
    divTotal.appendChild(divTotalWord);

    let divTotalPrice = document.createElement("div");
    divTotalPrice.innerHTML = `$${total}`;
    divTotalPrice.id = "divTotalPrice";
    divTotal.appendChild(divTotalPrice);

    document.getElementById("cartModal").appendChild(divTotal);
}

function createModalElement(product){
    let div = document.createElement("div");
    div.className = "cartItem";
  
    let divImg = document.createElement("div");
    divImg.className = "cartImgCon";
    let image = document.createElement("img");
    //console.log(product);
    image.src = product.imageUrl;
    image.width = "75";
    divImg.appendChild(image);
    div.appendChild(divImg);

    let divRemove = document.createElement("div");
    divRemove.innerHTML = "<b>Remove</b>";
    divRemove.className = "cartRemove";
    divRemove.id = `cartProduct${product.id}`;
    div.appendChild(divRemove);
  
    let divName = document.createElement("div");
    divName.innerHTML = product.name;
    divName.className = "cartItemName";
    div.appendChild(divName);
  
    let divNumPrice = document.createElement("div");
    divNumPrice.innerHTML = `(${product.quantity})\t<b>$${product.price}</b>`;
    divNumPrice.className = "cartItemPrice";
    div.appendChild(divNumPrice);

    return div;
}

function removeFromCart(id){
    num -= 1;
    if(num === 0){
        document.getElementById("cartNum").className = "cartNumHidden";
        document.getElementById("cartImg").removeEventListener("click", showHideModal);
    }
    document.getElementById("cartNum").innerHTML = num;
    let x = id.slice(11, 12);
    removeProduct(x);
}

function removeProduct(id){
    for(let i of allData){
        if(i.id == id){
            i.quantity -= 1;
            if(num === 0){
                hideModal();
                modalVisible = false;
            }
            else{
                showModal();
            }
            return;
        }
    }
}