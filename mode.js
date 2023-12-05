const express = require('express');
const app = express()
app.use(express.json())



app.get('/mode'), function mode(req,res) {

function mode(a){
for (let element in a) (element.isInteger == False)
throw new ExpressError(`${element}`, 'Not Found!', 404)        
debugger
        let b  = a.slice().sort((x, y) => x - y);
      
        let bestStreak = 1;
        let bestElem = a[0];
        let currentStreak = 1;
        let currentElem = a[0];
      
        for (let i = 1; i < a.length; i++) {
          if (a[i-1] !== a[i]) {
            if (currentStreak > bestStreak) {
              bestStreak = currentStreak;
              bestElem = currentElem;
            }
      
            currentStreak = 0;
            currentElem = a[i];
          }
      
          currentStreak++;
        }
      
        currentStreak > bestStreak ? currentElem : bestElem;
      }
    return res.send({
        operation: 'mode',
        value : currentStreak
    })
    
    
    }


app.listen(3000, function () {
    console.log('App on port 3000');
  })