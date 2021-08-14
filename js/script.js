let url = 'https://my-json-server.typicode.com/ivan-ilic/msg-typicode/products';

fetch(url)
.then(res => res.json())
.then(data => addElements(data))
.catch(err => { throw err });

function addElements(data){
  loadData(data);
  for (let i of data) {
    i.quantity = 0;

    let div = document.createElement("div");
    div.className = "storeItem";
  
    let divImg = document.createElement("div");
    divImg.id = "image"+i.id;
    divImg.className = "storeImgCon"
    div.appendChild(divImg);
    let x = '#image'+i.id+'{background-image: url(\"'+i.imageUrl+'\");}';
    document.getElementById("styleNew").innerHTML += x;
  
    let divName = document.createElement("div");
    divName.innerHTML = i.name;
    divName.className = "storeItemName";
    div.appendChild(divName);
  
    let divPrice = document.createElement("div");
    divPrice.innerHTML = '$'+i.price;
    divPrice.className = "storeItemPrice";
    div.appendChild(divPrice);
  
    let divAdd = document.createElement("div");
    divAdd.innerHTML = "Add to Cart";
    divAdd.className = "storeAdd";
    divAdd.id = `product${i.id}`;
    //divAdd.onclick = "addToCart("+i.id+")";
    div.appendChild(divAdd);
  
    document.getElementById("storeItems").appendChild(div);
  }
  document.querySelectorAll(".storeAdd").forEach(item => {
    item.addEventListener("click", event => {
      addToCart(item.id);
    })
  })
}

function goTo(name){
  var element = document.getElementById(name);
  element.scrollIntoView();
}




