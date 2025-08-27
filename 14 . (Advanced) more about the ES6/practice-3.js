const instructors = [
  {name: 'Raj', age: 26, position: 'Senior'},
  {name: 'Mayad', age: 25, position: 'Junior'},
  {name: 'Raina', age: 20, position: 'Senior'},
];


const seniorInstructors = instructors.filter(instructor => instructor['position'] === 'Senior').map(instructor => instructor.name);


console.log(seniorInstructors);