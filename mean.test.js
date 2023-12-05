const { mean } = require("./mean");

test('mean should return mean', function () {
  let avg = mean(2, 3, 7);
  expect(avg).toEqual(4);
});