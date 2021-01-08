const { TestScheduler } = require("jest");
const arrChunking = require("./chunckedArray");

test("chunkedArr funtion exists", () => {
  expect(arrChunking).toBeDefined();
});

test("Chunk an array of 10 values with a length of two.", () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const length = 2;
  const result = arrChunking(num, length);

  expect(result).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});
