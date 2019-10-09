
var isPalindrome = function(x) {
    var nums = x.toString().split('');
    nums.reverse();
    return nums.join('') == x;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(120));
console.log(isPalindrome(10));