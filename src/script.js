let shop=document.getElementById(`shop`);
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
    },
    {
        id:"kfgdsytrak",
        name: "red shirrt",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",  
        price:48,
        img:"images/image3.png"
    }
]

let bascket=JSON.parse(localStorage.getItem("data"))||[];
let generateShop=()=>{
  return(
     shop.innerHTML=shopItem.map((x)=>{
        let {id,name,desc,price,img}=x;
        let search=bascket.find((x)=>x.id===id)||[];
        return` <div id="product-id-${id}" class="item">
            <img src="${img}" width="219" height="220" alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="buttons">
                        <i class="bi bi-plus" onclick="increment(${id})"></i>
                         <div id=${id} class="quantity">${search.item === undefined ? 0: search.item}</div>
                        <i class="bi bi-dash" onclick="decrement(${id})"></i>
                    </div>
                </div>
            </div>
        </div>`;
     }).join("")
);
}
generateShop();
let increment=(id)=>{
    let selectedItem=id;
    let search=bascket.find((x)=>x.id===selectedItem.id);
    if(search==undefined){
        bascket.push(
            {
                id:selectedItem.id,
                item:1
            }
        )
    }else{
        search.item+=1;
    }
   update(selectedItem.id);
   localStorage.setItem("data",JSON.stringify(bascket));
}
let decrement=(id)=>{
    let selectedItem=id;
    let search=bascket.find((x)=>x.id===selectedItem.id);
    if(search===undefined)return;
    else if(search.item===0){
        return;
    }else{
        search.item-=1;
    }
    update(selectedItem.id);
    bascket=bascket.filter((x)=>x.item!==0);
   localStorage.setItem("data",JSON.stringify(bascket));
}
let update=(id)=>{
    let search=bascket.find((x)=>x.id===id);
    document.getElementById(`${id}`).innerHTML=search.item;
    calculation();
}
let calculation=()=>{
     let cartAmount=document.getElementById(`cartAmount`);
     cartAmount.innerHTML=bascket.map((x)=>x.item).reduce((x,y)=>x+y,0);
}
calculation();










































































