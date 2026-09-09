/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Stack stores opening brackets
    const stack = [];

    // Map each closing bracket to its matching opening bracket
    const matchingBracket = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of s) {
        // If the character is an opening bracket, push it onto the stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            // For a closing bracket, get the most recent opening bracket
            const lastOpeningBracket = stack.pop();

            // The brackets are invalid if:
            // 1. There is no matching opening bracket
            // 2. The opening bracket does not match the closing bracket
            if (lastOpeningBracket !== matchingBracket[char]) {
                return false;
            }
        }
    }

    // The string is valid only if no opening brackets remain unmatched
    return stack.length === 0;
};