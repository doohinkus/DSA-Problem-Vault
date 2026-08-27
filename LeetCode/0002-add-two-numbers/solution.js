    while (l1 || l2 || carry) {

    let carry = 0;
    let tail = dummy;
    const dummy = { val: 0, next: null };
var addTwoNumbers = function(l1, l2) {

 */
        const sum = (l1 ? l1.val : 0) +
                    (l2 ? l2.val : 0) +
                    carry;

        carry = Math.floor(sum / 10);

        tail.next = {
            val: sum % 10,
            next: null
        };

        tail = tail.next;
