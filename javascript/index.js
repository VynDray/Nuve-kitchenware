import { productData } from './productData.js';
import {cartArray} from './cart.js'

let categoryBtn = document.querySelectorAll('.categories button')
let categoryCard = document.querySelectorAll('.categoryy')
categoryBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       categoryBtn.forEach((e)=>{
        e.classList.remove('btnCOLOR')
        btn.classList.add('btnCOLOR')
       })  
       
    })
})

document.querySelector('.year').textContent = new Date() .getFullYear()

let CookwareBtn= document.querySelector('.CookwareBtn')
let allProductsBtn= document.querySelector('.allProductsbtn')
let UtensilsBtn= document.querySelector('.utensilsBtn')
let bakewareBtn= document.querySelector('.bakewareBtn')
let storageBtn= document.querySelector('.storageBtn')
let applianceBtn= document.querySelector('.applianceBtn')
generateHTML()

function AllbuttonFilter(){
    const paragraphSelector = document.querySelectorAll('.categoryy')
    paragraphSelector.forEach(e=>{
        let card = e.closest('.productContainer')
        card.style.display='inline-block' 
    })
}
function categoryBTNfilter(category){
    const paragraphSelector = document.querySelectorAll('.categoryy')
    paragraphSelector.forEach(e=>{
        let card = e.closest('.productContainer')
        
        if(e.textContent===category){
            card.style.display='inline-block' 
        }else{
            card.style.display='none' 
        }
         
    })

}


allProductsBtn.addEventListener('click',()=>{
    AllbuttonFilter()
})

CookwareBtn.addEventListener('click',()=>{
    categoryBTNfilter('Cookware')
})
UtensilsBtn.addEventListener('click',()=>{
    categoryBTNfilter('Utensils')
})
bakewareBtn.addEventListener('click',()=>{
    categoryBTNfilter('Bakeware')
})
storageBtn.addEventListener('click',()=>{
    categoryBTNfilter('Storage')
})
applianceBtn.addEventListener("click",()=>{
    categoryBTNfilter('Appliance')
})

/*==========================Generating product card using js========================================*/
function generateHTML(){
let productAccumulator=''
productData.forEach((productInfo)=>{
    const productCard =`
    <div class="productContainer cookware">
                <div class="product">
                    <span class="discount">${productInfo.discount}% OFF</span>
                    <div class="productImg">
                        <img src="${productInfo.image}" alt="" class='productImage'>
                    </div>
                    <div class="cartProduct">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                        </svg>
                    </div>
                    <div class="ordernow22">
                        <button class="orderBtn">Buy now</button>
                    </div>
                </div>
                <div class="product-dscptn">
                    <p class='categoryy'>${productInfo.product.category}</p>
                    <h3 class='productName'>${productInfo.product.name}</h3>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg> <span class="rate">${(productInfo.rating.number/10).toFixed(1)}</span> (${productInfo.rating.values})
                    </p>
                    <p class="price"><span class="boldPrice">$${(productInfo.price.actualPrice/100).toFixed(2)}</span> <span class="crossedOut">$${(productInfo.price.crosedoutPrice/100).toFixed(2)}</span></p>
                </div>

            </div>
    `
productAccumulator+=productCard
})

document.querySelector('.allProducts').innerHTML=productAccumulator;
}
 let addToCARTbtn = document.querySelectorAll('.cartProduct')

 addToCARTbtn.forEach((button)=>{
    button.addEventListener('click',()=>{
       let container=button.closest('.productContainer') 
       let image =container.querySelector('.productImage').src
       let productName= container.querySelector('.productName').textContent
       let productCategory= container.querySelector('.categoryy').textContent
       let productPrice= container.querySelector('.boldPrice').textContent
       let quantity = 1
       addToCart(image,productName,productCategory,productPrice,quantity)
       console.log('clicked')
    })
 })
function addToCart(image,name,category,price,quantity){
   const item={
    image:image,
    name:name,
    category:category,
    price:price,
    quantity:quantity
   }

   cartArray.push(item)
   localStorage.setItem('cart',JSON.stringify(cartArray))
   console.log(cartArray)

}

document.querySelector('.cart').addEventListener('click',()=>{
    window.location.href='../pages/cart.html'
})


