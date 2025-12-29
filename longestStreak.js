// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head) => {
  if (head === null) return 0;
  let current = head;
  let streak = 1;
  let maxStreak = 1;
  let prevVal = null;
  while (current !== null) {
    if (current.val === prevVal) {
      streak++;
    } else {
      streak = 1;
    }

    if (streak > maxStreak) {
      maxStreak = streak;
    }
    prevVal = current.val;
    current = current.next;
  }
  return maxStreak;
};

module.exports = {
  longestStreak,
};
