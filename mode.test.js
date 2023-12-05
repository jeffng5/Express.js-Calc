const { mode } = require("./mode");

test('mode should return freq', function () {
  let mode_of_seq = mode(2, 3, 3, 5, 7);
  expect(mode).toEqual(3);
});