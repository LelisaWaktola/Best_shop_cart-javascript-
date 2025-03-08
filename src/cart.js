let label=document.getElementById("label");
let shoppingCart=document.getElementById("shoping-cart");
let bascket=JSON.parse(localStorage.getItem("data"))||[];

let calculation=()=>{
  let cartIcon=document.getElementById("cartAmount");
  cartIcon.innerHTML=bascket.map((x)=>x.item).reduce((x,y)=>x+y,0) ;    
}

calculation();

let generateCartItem=()=>{
    
    if(bascket.length!==0){
        
        shoppingCart.innerHTML=`
        `
   }else{
        label.innerHTML=`
           <h2>Cart is empty</h2>
           <a href="index.html">
               <button>Home</button>
           </a>
        `
   }
}
generateCartItem();


