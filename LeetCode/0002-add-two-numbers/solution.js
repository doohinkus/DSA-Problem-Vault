    let tail = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) +
                    (l2 ? l2.val : 0) +
                    carry;

        carry = Math.floor(sum / 10);
