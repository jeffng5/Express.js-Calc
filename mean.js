const express = require('express');
const app = express()
app.use(express.json())

app.get('/mean', function mean(req, res) {
  return res.send({
    operation: 'mean',
    value : avg

   }
   )
}
)
function mean(numbers){
for (let element in a) (element.isInteger == False)
  throw new ExpressError(`${element}`, 'Not Found!', 404)
  debugger
  for (let i =0; i <numbers.length; i++){
      let avg = sum += numbers[i]/numbers.length
       }return avg 
}

module.exports = {mean}

app.listen(3000, function () {
    console.log('App on port 3000');
  })