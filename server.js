const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const PORT = 3000;

// Routes
const paymentRoutes = require('./routes/payment');
app.use(paymentRoutes);



app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
});


