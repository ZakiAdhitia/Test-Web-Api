const express = require('express');
const cors = require('cors');

const configRoutes = require('./routes/configRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/config', configRoutes);
app.use('/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('API berjalan di Railway!');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
