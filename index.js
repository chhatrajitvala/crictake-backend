const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  // Simulate registration success
  res.status(200).json({ message: 'User registered successfully', user: { name, email } });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Simulate login success
  res.status(200).json({ message: 'Login successful', user: { email } });
});

app.get('/', (req, res) => {
  res.send('Crictake backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
