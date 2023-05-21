//finding max number in series(math)
const p = require("lodash")
let praba = p.max([12,56,87,10,5])
console.log(praba);



//adding numbers
let rose = p.sum([4,8,56,8,09,-53])
console.log(rose);



// the last number divisible by 2 should have reminder 1
var users = ([3, 24, 5, 6]);
let prab= p.findLast(users, function(n) {
  return n % 2 == 1;
});
console.log(prab);



//function binding
  var obj = { 
    Name: "Prabavathi", 
    Address: "Tamilnadu" 
}; 
    
var fun = function (bind) { 
    return 'I am ' + this.Name 
        + '\nFrom ' + this.Address 
};
    
var bind = p.bind(fun, obj); 

console.log(bind());



//checking for an array
var val = "hello"
console.log("The Value is Array : "
    +p.isArray(val));
