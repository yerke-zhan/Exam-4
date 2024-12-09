
let eShop ={
    name:"Azhar",
    phoneNumber:87012777893,
    products:[
    {
        productName: "Apple",
        category: "Fruits",
        price: 1800,
        stock : 5,

    },
    {
        productName: "Tomato",
        category: "Vegetable",
        price: 1000,
        stock : 5,  
    },
    {
        productName: "potato",
        category: "Vegetable",
        price: 3500,
        stock : 4,  
    },
    {
        productName: "onion",
        category: "Vegetable",
        price: 2000,
        stock : 4,  
    },
    {
        productName: "Mango",
        category: "Fruits",
        price: 1500,
        stock : 5,

    },
]

}
//  let changeShopName= function(){
//  let newname =prompt("Enter a new name for the shop")
//     if(newname){
//         eShop.name = newname
//     }
// }
// changeShopName()
// console.log(eShop);

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
// 3 Ex
let list = []

let listProductNames= function(){
    eShop.products.forEach(function(name){
        list.push(name.productName)
    })
}
listProductNames()
alert(`List of products: ${list}`)



let addProduct = function(){
    
    let aty = prompt("Enter a product name")
    let baga=+prompt("Enter the price")
    let sany =+prompt("Enter the stock number")
    let cat=prompt("Enter category name")
if (aty || baga || sany || cat){
    eShop.products.push({productName:aty, category: cat, price: baga, stock: sany})
    
}




}
 addProduct()
 console.log(eShop.products)

 let applyDiscountToCategory= function(){

    let categ = prompt("")
 }