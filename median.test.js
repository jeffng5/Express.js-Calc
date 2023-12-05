const { median } = require("./median");

test('median should return median'), function () {
  let middle_num = mean(2, 3, 7);
  expect(median).toEqual(3);
};


test('median of even number array'), function(){
    let middle_num_even = mean(2,3,7,9);
    expect(median).toEqual(5)

}