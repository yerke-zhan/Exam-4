// let num = +prompt("1 - ден 12 - ге дейін сан енгізіңіз")
//  if( num ==3|| num==4|| num==5){
//     alert("Spring")
//  }
// else if ( num == 6|| num ==7|| num ==8){
//     alert("Summer")
// }
// else if (num ==9||  num==10|| num ==11){
//     alert("Autumn")
// }
// else if (num ==12||num ==1|| num ==2){
//     alert("Winter")
// }
// else 
//     alert (" Бір жыл 12 айдан тұрады 1- ден 12 -ге дейін сан енгіз")


//  let num1 = +prompt( "а санын енгізіңіз")
//  let num2 = +prompt( "b санын енгізіңіз")
 

// if (num1>num2){
//     alert(" a сан b санынан үлкен")
// }
// else if ( num1<num2){
//     alert("а саны b санынан кіші")
// }
// else if ( num1==num2){
//     alert("Сандар тең")
// }
// alert (" Екі санның қосындысы:" + Number(num1+ num2) )


let num1 = +prompt(" Үш сан енгізіңіз: 1 - ші сан?")
let num2 = +prompt(" Үш сан енгізіңіз: 2 - ші сан?")
let num3 = +prompt(" Үш сан енгізіңіз: 3 - ші сан?")
 
let max
let min

if (num1>num2 && num1>num3){
    max=num1
   alert (" Ең үлкен сан:" + max)
}
else if (num2>num1 && num2>num3){
    max=num2
   alert (" Ең үлкен сан:" + max)
}
else if (num3>num1 && num3>num2){
    max=num3
   alert (" Ең үлкен сан:" + max)
}

if ( num1<num2 && num1<num3){
    min = num1
    alert(" Ең кіші сан:" + min)
}
else if ( num2<num1 && num2<num3){
    min = num2
    alert(" Ең кіші сан:" + min)
}
else if ( num3<num2 && num3<num1){
    min = num3
    alert(" Ең кіші сан:" + min)
}


 
alert (" Екі санның айырмасы:" + Number (max - min) )