const express = require('express');
const registrasiRoutes = require('./src/routes/registrasiRoutes');
const { envConfig } = require('./src/config/envConfig');

const app = express();
const port = envConfig.PORT; // Use the PORT from envConfig

app.use(express.json());

// Define a basic GET route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use('/registrasi', registrasiRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`);
});
