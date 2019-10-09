
var twoSum = function(nums, target) {
    //2, 7, 11, 15
    //found
    
        //--1
        // 2
        // 7,11,15
        //found
    
        //--2
        //7
        //11,15
        //found
    
        //--3
        //11
        //15
        //found
    
        //--4    
        //15
        //
        //found
    
    //return found
    let first;
    let targetIndex = -1;
    let i=0;
    
    while (nums.length>0)
        {
            first = nums.shift();            
            var targetNumbs = nums.forEach(function (value, index, array){
                console.log(value);
                if (parseInt(value) + parseInt(first) == parseInt(target)){
                    targetIndex = index+1;                    
                }                
            });
            
            if (targetIndex != -1){
                break;
            }
            i++;            
        }
    
    return [i,targetIndex]
        
};

twoSum([2,7,11,15],9);