import db from './db.ts';


function POST(req, res) {
  db.users.forEach((user) => {
    if (user.email === req.body.email && user.password === req.body.password) {
      res.redirect(`/dashboard/${user.id}`);
    } else { return }
  });
  res.send('<h1>Error: Unauthorized!</h1>');
}

export { POST }
