import { Router } from 'express';
import users from '../,,/data/users.ts'
const router = Router();

router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;  
  users.forEach((user) => {
    if (email == user.email) {
      if (password == user.password) {
        res.locals.user = user;
        res.locals.userId = id;
        res.json(user);
      } else {
        res.json({error: "Incorrect password"})
      }
    }
  }
})
