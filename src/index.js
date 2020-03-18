module.exports = function toReadable (number) {
   let howToRead = {

    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand",

   };

   let pm = ('' + number).split('').reverse();
   let readable = [];


   if (pm[0] == 0 && pm.length == 1){

    return "zero";
   }
  
   for( let i = 0; i < pm.length; i++){
    
    if ( pm[i] == 0){

        readable[i] = "";       
    }

    switch(i){
        case 0: 
            if ( pm[i + 1] == 1){

                readable[i] = howToRead[10 + +(pm[i])]; 
                continue;

            }

            readable[i] = howToRead[pm[i]];
            continue;

        case 1:
            if ( pm[i] == 1){

                readable[i] = " "; 
                continue;

            }

            readable[i] = howToRead[pm[i] * 10]; 
            continue; 

        case 2: 
        readable[i] = howToRead[pm[i]] + " " +  howToRead[100];
        
    }
   }
return readable.reverse().join(' ').replace(/ +/g, ' ').trim();
}
