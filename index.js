const express = require('express');
const apiRoutes = require('./src/routes/apiRoutes');
const { envConfig } = require('./src/config/envConfig');

const app = express();
const port = envConfig.PORT; // Use the PORT from envConfig

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`);
});
