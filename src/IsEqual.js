// @flow

function IsEqual(a: Array<mixed>, b: Array<mixed>): boolean {
  if (a.length != b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(IsEqual([], []) === true);
console.log(IsEqual([1], [1]) === true);
console.log(IsEqual([3, 4, 5], [3, 4, 5]) === true);
console.log(IsEqual([3, 4, 5], [3, 4, 6]) === false);
console.log(IsEqual([3, 4, 5], [3, 4]) === false);
console.log(IsEqual([3], ["3"]) === false);
