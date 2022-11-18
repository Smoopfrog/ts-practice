// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   // const person = {
//   name: "Jeff",
//   age: 28,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

//Enums increment automatically, can be set to whatever, and will increment if after a number is set
enum Role {ADMIN = 'Admin', READ_ONLY = 100, AUTHOR = 200};

const person = {
  name: "Jeff",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin"];

let favouriteActivities: string[];
favouriteActivities = ["Games"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('Is author')
}