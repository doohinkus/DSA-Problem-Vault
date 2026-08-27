

    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) +
                    (l2 ? l2.val : 0) +
                    carry;

        carry = Math.floor(sum / 10);

        tail.next = {
            val: sum % 10,
            next: null
        };

        tail = tail.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return holder.next;