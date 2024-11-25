 
 function calculator(kosu, azaytu, kobeytu, bolu) {

//  kosu = a+b;
//  azaytu =a-b;
//  kobeytu =a*b;
//  bolu = a/b;

    let num1 = +prompt("Enter first number")
    let num2 = +prompt("Enter second number")

    if (num1 <0|| num2<0 || num1=="" || num2 == ""){
        alert ("Қате енгізу!")
    } else if ( kosu)
        return num1+num2
    else if ( azaytu)
        return num1-num2
    else if ( kobeytu)
        return num1 *num2
    else if ( bolu)
        return num1/num2

 alert("Қосындысы:"+ kosu + "Азайтындысы:" +azaytu + "Көбейтінді:" + kobeytu + "Бөлінді:"+ bolu);
    }

    function kosu ()
    return
    

calculator( )

// function market(){
//     i =1;
    
    

//     let shygynSany = +prompt(i + "Қанша зат аласыз?") 
//     let num = +prompt(i + "Сумма?") 

//     if (num>=5000 && num <=10000 ){
//         return num - (num*0,1)
        
//     }
//     alert( total+ "Сізге 10% жеңілдік қарастырылды")
 

//     if (num>=10000 && num <=20000 ){
//         return num - (num*0,2)
//     }
//     alert( total+ "Сізге 20% жеңілдік қарастырылды")

//     if (num>=20000){
//         return num - (num*0,3)

//         alert( total+ "Сізге 30% жеңілдік қарастырылды")
    
//     }
//         i++;
//     }

// market()

function changeNumber (){

let num1 =+ prompt(" Enter first number")
let num2 =+ prompt(" Enter second number")

console.log (num1, num2)
console.log (num2, num1)

}
changeNumber()




