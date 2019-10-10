
var isPalindrome = function(x) {
    
  if(x<0 || (x % 10 == 0 && x != 0)){
      return false;
  }

  let revertedNumber = 0;
  let buffer = x;
  while(x > revertedNumber){
      revertedNumber = revertedNumber*10 + buffer%10;
      buffer = Math.floor(buffer / 10);
  }

  return x == revertedNumber;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(120));
console.log(isPalindrome(10));