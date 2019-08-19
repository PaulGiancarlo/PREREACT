const developer = {
    firstName: 'Paul',
    lastName: 'Diaz',
    developer: true,
    age: 25,
  }
  
  //destructure developer object
  const { firstName, lastName } = developer;
  console.log(firstName); // returns 'Paul'
  console.log(lastName); // returns 'Diaz'
  console.log(developer); // returns the object
  
  //using a new variable:
  const { firstName:name } = developer;
console.log(name); // returns 'Paul'

//also with arrays
const numbers = [1,2,3,4,5];
const [one, two] = numbers; // one = 1, two = 2
console.log(one);
console.log(two);

//also with selected items
const numbers_ = [1,2,3,4,5];
const [one_, two_, , four_] = numbers_; // one = 1, two = 2, four = 4
console.log(numbers_);