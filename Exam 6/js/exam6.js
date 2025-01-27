
let eShop ={
    name:"Azhar",
    phoneNumber:"87012777893",
    products:[
    {
        productName: "Apple",
        category: "Fruits",
        price: 1800,
        stock : 15,

    },
    {
        productName: "Tomato",
        category: "Vegetable",
        price: 1000,
        stock : 35,  
    },
    {
        productName: "potato",
        category: "Vegetable",
        price: 3500,
        stock : 40,  
    },
    {
        productName: "onion",
        category: "Vegetable",
        price: 2000,
        stock : 25,  
    },
    {
        productName: "Mango",
        category: "Fruits",
        price: 1500,
        stock : 15,

    },
],




// listProductNames:function(){
//     let onimder =[]
//     for (let element of this.products){
//         onimder.push(element.productName)
//     }
//     alert( onimder.join('\n'));
   
// },
// }
// console.log("Функция шақырылмай тұр", eShop);

// listProductNames()

// 2 tapsirma

//  let changeShopName= function(){
//  let newname =prompt("Enter a new name for the shop")
//     if((newname ==" "|| newname == null|| newname == undefined)){
 
//     eShop.name= eShop.name

// }else{
//     eShop.name = newname
// }
// }
// changeShopName()
// console.log(eShop);

//Ex3
// let changePhoneNumber= function(){
//     let number = +prompt("Enter a new phone number for the shop")
//      if (number){
//         eShop.phoneNumber = number

//      }
//      else if (number ==""){
//         eShop.phoneNumber = eShop.phoneNumber

//      }

// }
// changePhoneNumber()
// console.log(eShop);

// // 4 Ex
// let list = []

// let listProductNames= function(){
//     eShop.products.forEach(function(name){
//         list.push(name.productName)
//     })
// }
// listProductNames()
// alert(`List of products: ${list}`)

}

// ex5

// let addProduct = function(){
    
//     let aty = prompt("Enter a product name")
//     let baga=+prompt("Enter the price")
//     let sany =+prompt("Enter the stock number")
//     let cat=prompt("Enter category name")
// if (aty || baga || sany || cat){
//     eShop.products.push({productName:aty, category: cat, price: baga, stock: sany})
    
// }


// }


//  addProduct()
//  console.log(eShop.products)

//  //Ex6


 let applyDiscountToCategory= function(){

    let category = prompt("Enter category name")
    let apply = prompt("To apply for discount enter +")
    
    if (category= eShop.products.category)
        apply= "+"

    
    eShop.products.category.price -(category.price*10)/100;
    
}

   applyDiscountToCategory()
   console.log(eShop.category.price)

 
 
 