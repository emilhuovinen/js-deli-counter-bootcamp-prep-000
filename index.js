
var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeli, name) {
katzDeli.push(`${name}`);

return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);

}

function nowServing(katzDeliLine) {
let  i = 0;
  while (i < katzDeliLine.length) {
    
  if (katzDeliLine.length === 0){
 return "There is nobody waiting to be served!"
  
} else {
  return `Currently serving ${katzDeliLine.shift()}`
  }
 
}
  
}