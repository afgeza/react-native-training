import IsEqual from "../IsEqual";

it("should expect boolean", () => {
  let a = IsEqual([3], [3]);
  expect(a).toEqual(true);

  let b = IsEqual([4], [5]);
  expect(b).toEqual(false);

  let c = IsEqual([3, 4, 5], [3, 4, 5]);
  expect(c).toEqual(true);

  let d = IsEqual([3, 4, 5], [3, 4, 6]);
  expect(d).toEqual(false);

  let e = IsEqual([3, 4], [3, 4, 5]);
  expect(e).toEqual(false);

  let f = IsEqual([3], ["3"]);
  expect(f).toEqual(false);
});
