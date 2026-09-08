/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
   // Stores the final flattened array
    const result = [];

    /**
     * Recursively processes each element in the current array.
     *
     * @param {any[]} items - The current array being processed
     * @param {number} depth - Depth of the current array
     */
    function dfs(items, depth) {
        for (const item of items) {
            // If the item is an array and we have not reached
            // the maximum allowed flattening depth, flatten it
            if (Array.isArray(item) && depth < n) {
                dfs(item, depth + 1);
            } else {
                // Add numbers or arrays that should remain unchanged
                result.push(item);
            }
        }
    }

    // The outermost array starts at depth 0
    dfs(arr, 0);

    return result;
};