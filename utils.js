
var reverse = function(x) {
    
    var nums = x.toString().split('');
    var sign;
    var last;
    var finalNumber = 0;
    if (nums[0] == "-" || nums[0] == "+"){
        sign = nums.shift();
    }    
    nums.reverse();
    if (parseInt(nums[0]) == 0){
        nums.shift();
    }
    finalNumber= parseInt((sign == "-" ? sign : "")+(nums.join('').toString()));
    //return finalNumber>=Number.MIN_SAFE_INTEGER && finalNumber<=Number.MAX_SAFE_INTEGER ? finalNumber : 0;
    return finalNumber>=-1*Math.pow(2,31) && finalNumber<=(Math.pow(2,31)-1) ? finalNumber : 0;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));