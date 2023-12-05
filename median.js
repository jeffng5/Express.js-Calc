const express = require('express');
const app = express()
app.use(express.json())


app.get('/median', function median (req,res) {
function median(numbers){
for (let element in numbers) (element.isInteger == False)
    throw new ExpressError(`${element}`, 'Not Found!', 404)
debugger
    if (numbers.length % 2 == 0){
       i =  numbers.length/2
    let median = numbers[i] + numbers[i+1]/2
    return res.send({
        operation: 'median',
        value : median        
    })
}
    }
})

module.exports ={median}
app.listen(3000, function () {
    console.log('App on port 3000');
  })