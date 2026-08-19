const express = require("express")
const router =  express.Router()

class User {
    constructor(username, birthdate, age, email, password, valid) {
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email
        this.password = password;
        this.valid = valid
    }
}
    
const users = [
  new User("John-H",  "14-09-1980", 45, "john@example.com",  "password123", false),
  new User("SaraK",   "02-03-1998", 27, "sara@example.com",  "sara2024",    false),
  new User("MiloT",   "23-11-2001", 24, "milo@example.com",  "milo!pass",   false)
];

router.post('/', (req, res) => {
  const { username, password } = req.body;      // pull the submitted credentials out of the JSON body

  if (!username || !password) {                 // reject  if either field is missing
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // look for a user whose username and password match
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.json({ valid: false });          // no match 
  }

  // if match send back the profile fields only. Password left out
  res.json({
    username: user.username,
    birthdate: user.birthdate,
    age: user.age,
    email: user.email,
    valid: true
  });
});

module.exports = router;
