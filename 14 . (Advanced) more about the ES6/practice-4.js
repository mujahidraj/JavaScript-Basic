const people = [
  {name: 'Jane', age: 55},
  {name: 'Jahangir', age: 60},
  {name: 'Helen', age: 70}
];

const ageSum = people.reduce((initialAge, person) => initialAge + person.age , 0);

console.log(ageSum);