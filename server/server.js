const express = require('express');
const cors = require('cors');

const app = express();

// Angular (4200) and Express(3000) are different origins, so without cors() the browser blocks Angular's requests to this API.
app.use(cors());


app.use(express.json());

app.get('/', (req, res) => {            // test route to confirm the server is alive
  res.send('API running');
});

app.use('/api/auth', require('./routes/auth'));   // POST /api/auth -> routes/auth.js

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
