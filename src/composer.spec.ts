import { composer } from "./composer";

test("Rich input", () => {
  expect(composer([1, 2, 3, 12, 13, 14, 123, 145, 155])).toBe(
    "1-3,12-14,123-155"
  );
});

test("Single last number", () => {
  expect(composer([1, 2, 3, 12])).toBe("1-3,12");
});

test("Empty input", () => {
  expect(composer([])).toBe("");
});
