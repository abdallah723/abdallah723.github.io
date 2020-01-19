// function generate (){
  

//   var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "@", "%", "+", "\\", "/", "'", "!","#", "$","^","?",":", ",", ")", "(", "}", "{","]","[","~","-","_",".", "a","b","c","d" , "e","f","g","h","i","j","k","l","m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z", "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z" ]

//   var password = "";
//     var array = ""
//   for (var i = 0; i < 25; i++){
//       password = password + characters(Math.floor(Math.random() * Math.floor(values.length -1)));

//       document.getElementById("textarea").value = password;
//   }
//   function copyPassword(){
//       document.getElementById("password").Selecto();
//       document.execCommand("copy");
//       alert("Password Copied");
      
//   }
//   document.getElementById("generateButton").addEventListener("click", function (copy){
//       copy.preventDefault();
//       generate();
//   })

// var upper = arrayLowtoHigh(65,85);
// var LowerCase = arrayLowtoHigh(97,122)
// var numbers = arrayLowtoHigh(48,57)
// var symbols = arrayLowtoHigh (33,47).concat(arrayLowtoHigh(58,64).concat(91,96).concat(arrayLowtoHigh(123,126)))

// function generatePassword (){
//     String.fromCharCode(65)
//     var array = []

//     function arrayLowtoHigh (low, high) {
//         for(let i = low; i<= high; i++); {
//         array.push = (i)
//     }
//     }
//     return array
// }

var generatedPassword = document.getElementById("password");


var randomPass = {
    lower: generateLower,
    upper: generateUpper,
    number: generateNumber,
    symbols: generateSymbols
};


function generateLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function generateUpper (){
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function generateNumber (){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function generateSymbols (){
    var symbols =  "@,%,+,\\,/,',!,#,$,^,?,:,,,),(,},{,],[,~,-,_,."
    return symbols[Math.floor(Math.random()* symbols.length)]
}