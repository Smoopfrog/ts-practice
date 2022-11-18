// const person: {
  // name: string;
  // age: number;
// } = {
const person = {
  name: "Jeff",
  age: 28,
  hobbies: ['Sports', 'Cooking']
};

let favouriteActivities: string[];
favouriteActivities = ['Games']

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}