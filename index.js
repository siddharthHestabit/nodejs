const express = require('express');
const app = express();
require('dotenv').config();


app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on ${process.env.APP_URL || 'http:localhost'}:${process.env.PORT || 5000}`);
});
