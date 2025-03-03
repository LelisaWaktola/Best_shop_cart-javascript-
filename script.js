let  shopItem=[
    {
        id:"ghjkxdjkh",
        name: "white-shirt",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",  
        price:45,
        img:"images/image1.png"
    },
    {
        id:"khffhbxm",
        name: "black shirt",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",  
        price:100,
        img:"images/image2.png"
    },
    {
        id:"kfgdsytrak",
        name: "red shirrt",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",  
        price:48,
        img:"images/image3.png"
    }
]

let shop=document.getElementById('shop');

let generateShop=()=>{
  return(
     shop.innerHTML=shopItem.map((x)=>{
        return` <div class="item">
            <img src="${x.img}" width="220" height="220">
            <div class="details">
                <h3>${x.name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div class="price-quantity">
                    <h2>$ ${x.price}</h2>
                    <div class="buttons">
                        <i class="bi bi-plus"></i>
                         <div class="quantity">0</div>
                        <i class="bi bi-dash"></i>
                    </div>
                </div>
            </div>
        </div>`;
     }).join("")
);
}
generateShop();
