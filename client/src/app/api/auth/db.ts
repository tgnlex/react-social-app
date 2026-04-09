import User from '@/data/user';

const users = [
  new User({ id: 1, age: 23, email: "example@gmail.com",  password: "test", name: {first: "John", last: "Doe" }}) 
]

const db = { 
  users: users 
  create(data) {
    const user = new User(data);
    if (!user) {
      console.error('[AUTH] Error: Failed to create user!')
      return;
    }
    users.push(user);
    return true;
  },
  find(id) {
    const index = id - 1;
    return users[index];
  },
  remove(id) {
    const index = id
  }
}

export default db;
