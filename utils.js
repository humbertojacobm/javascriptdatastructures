
var romanToInt = function(s) {
 //MCMXCIV
  //MILLAR
  // M,     MM,   MMM

  //1000,1000*2, 1000*3
     

  //CENTESIMA
     //C,     CC,   CCC,      CD,     D,   DC     ,  DCC,     DCCC,       CM => CM

     //100, 100*2, 100*3, -(100-500),500, 500+100, 500+100*2, 500+100*3,  -(100-1000)

  // DECIMA
     //X,   XX,   XXX,   XL,  L,  LX,    LXX,     LXXX,      XC => XC
     //10,10*2 , 10*3   10*4, 50, 50+10, 50+10*2  50+10*3    50*10*4
     
  // UNIDAD
    //I , II, III, IV, V, VI, VII,  VIII,  IX => IV
    //1, 1*2, 1*3, 1*4,5, 5+1,5+1*2,5+1*3,5+1*4 

   let nums = s.split('');

   let millarSum = 0;
   let centeneSum = 0;
   let deceneSum = 0;
   let unitSum = 0;

   let c = "C";
   let x = "X";
   let i = "I";

   nums.forEach(function(value,index,array){
      if(value == "M"){
         if(index > 0 && array[index-1] == c){               
            centeneSum = 900;
         }else{
            millarSum += 1000; 
         }                 
      }

      if(value == c){
         if(index > 0 && array[index-1] == x){               
            deceneSum = 90;
         }else{
            centeneSum += 100;         
         }
      }
      if(value == "D")
      {
         if(array[index-1] == c){
            centeneSum += 300;
         }else{
            centeneSum = 500;
         }         
      }

      if(value == x){
         if(index > 0 && array[index-1] == i){               
            unitSum = 9;
         }else{
            deceneSum += 10;         
         }
      }
      if(value == "L")
      {
         if(array[index-1] == x){
            deceneSum += 30;
         }else{
            deceneSum = 50;
         }         
      }

      if(value == i){
         unitSum += 1;         
      }
      if(value == "V")
      {
         if(array[index-1] == i){
            unitSum += 3;
         }else{
            unitSum = 5;
         }         
      }

   });
 
 return millarSum+centeneSum+deceneSum+unitSum;    
};

console.log(romanToInt('MMMCCC'));
console.log(romanToInt('MMMCD'));
console.log(romanToInt('MMMD'));
console.log(romanToInt('MMMDC'));
console.log(romanToInt('MMMDCC'));
console.log(romanToInt('MMMDCCC'));
console.log(romanToInt('MMMCM'));
console.log(romanToInt('MMMCMX'));
console.log(romanToInt('MMMCMXX'));
console.log(romanToInt('MMMCMXXX'));
console.log(romanToInt('MMMCMXL'));
console.log(romanToInt('MMMCML'));
console.log(romanToInt('MMMCMLX'));
console.log(romanToInt('MMMCMLXX'));
console.log(romanToInt('MMMCMLXXX'));
console.log(romanToInt('MMMCMLXC'));
console.log(romanToInt('MMMCMLXCI'));
console.log(romanToInt('MMMCMLXCII'));
console.log(romanToInt('MMMCMLXCIII'));
console.log(romanToInt('MMMCMLXCIV'));
console.log(romanToInt('MMMCMLXCVI'));
console.log(romanToInt('MMMCMLXCVII'));
console.log(romanToInt('MMMCMLXCVIII'));
console.log(romanToInt('MMMCMLXCIX'));