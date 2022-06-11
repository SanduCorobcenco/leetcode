var lengthOfLongestSubstringTwoDistinct = function(s) {
    let chars = new Map();
    let start = 0;
    let end = 0;
    let maxLength = 0;
    
    while(end < s.length){
        let character = s.charAt(end);
        if(!chars.has(character)){
            chars.set(character, 1);
        } else {
            chars.set(character, chars.get(character) + 1)
        }
        
    while(chars.size > 2) {
        let toRemove = s.charAt(start);
        let count = chars.get(toRemove);
        if(count === 1){
            chars.delete(toRemove);
        } else {
            chars.set(toRemove, count - 1);
        }
        
        ++start;
        
    }  
        maxLength = Math.max(maxLength, end - start + 1);
        end++;
    }
    return maxLength;
};