
let categoryBtn = document.querySelectorAll('.categories button')
let categoryCard = document.querySelectorAll('.productContainer')
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

allProductsBtn.addEventListener('click',()=>{
    categoryCard.forEach(e=>{
        e.style.display='inline-block'
        if(e.classList.contains('none')){
            e.style.display='none'
        }
    })
})

CookwareBtn.addEventListener('click',()=>{
    categoryCard.forEach(e=>{
        
        if(e.classList.contains('cookware')){
            e.style.display ='inline-block'
        }else{
            e.style.display='none'
        }
    })
})
UtensilsBtn.addEventListener('click',()=>{
    categoryCard.forEach(e=>{
         
        if(e.classList.contains('Utensils')){
            e.style.display='inline-block'
            
           
            
        }else{
            e.style.display='none'
        }
    })
})
bakewareBtn.addEventListener('click',()=>{
    categoryCard.forEach(e=>{
        if(e.classList.contains('bakeware')){
            e.style.display='inline-block'
        }else{
            e.style.display='none'
        }
    })
})
storageBtn.addEventListener('click',()=>{
    categoryCard.forEach(e=>{
        if(e.classList.contains('storage')){
            e.style.display='inline-block'
            
        }else{
            e.style.display='none'
        }
    })
})
applianceBtn.addEventListener("click",()=>{
    categoryCard.forEach(e=>{
        if(e.classList.contains('appliance')){
            e.style.display='inline-block'
        }else{
            e.style.display='none'
        }
    })
})
