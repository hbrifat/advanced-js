const students = [
  {id: 21, name: "Abu bakr"},
  {id: 31, name: "Umar"},
  {id: 41, name: "Usman"},
  {id: 51, name: "Ali"}
];

const nameArray = [];

for (let i = 0; i < students.length; i++) {
  const elements = students[i];
  const {name} = elements;
  nameArray.push(name);
}

console.log(nameArray);

//another way...

const nameArray2 = students.map(s => s.name);
console.log(nameArray2);

//map
const ids = students.map(s => s.id);
console.log(ids);


//filter
const bigger = students.filter(s => s.id > 31);
console.log(bigger);