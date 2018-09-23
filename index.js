
var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeli, name) {
katzDeli.push(`${name}`);

return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);

}

function nowServing(katzDeliLine) {
 let firstInLine = katzDeli[0];
 
 if (firstInLine === 0){
 return "There is nobody waiting to be served!"
  
} else {
  return katzDeli[0]
}}