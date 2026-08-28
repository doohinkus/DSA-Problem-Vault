/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let uniqueChars = new Set();
   let start = 0, end = 0, maxLength = 0;

   while(end < s.length){
    while(uniqueChars.has(s[end])){
        uniqueChars.delete(s[start]);
        start++;
    }
    uniqueChars.add(s[end]);
    maxLength = Math.max(maxLength, end - start + 1);
    end++;
   }

  return maxLength;
};