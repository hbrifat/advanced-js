const numbers = [3, 5, 7, 9, 11, 13];
const squares = [];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const result = element * element;
  squares.push(result);
}

console.log(squares);


//map

const squares2 = numbers.map(function(element){
  return element * element;
})

console.log(squares2);

//filter

const smaller = numbers.filter(function(element){
  return element < 5;
});
console.log(smaller);


//find

const isThere = numbers.find(x => x > 5);
console.log(isThere);