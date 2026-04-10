import User from '../models/user.ts';

const users = [
  new User({ id: 1, age: 23, email: "test@gmail.com",  password: "test", name: {first: "John", last: "Doe" }}),
  new User({ id: 2, age: 20, email: "example@gmail.com", password: "example", name: {first: "Jane", last: "Doe" }})
];




