// @flow

export default function IsEqual(a: Array<mixed>, b: Array<mixed>): boolean {
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
