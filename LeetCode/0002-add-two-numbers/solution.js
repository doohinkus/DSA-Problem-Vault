
var addTwoNumbers = function(l1, l2) {
    const dummy = { val: 0, next: null };
    let tail = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) +
                    (l2 ? l2.val : 0) +
