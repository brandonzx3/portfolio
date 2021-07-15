const express = require('express');
const { env } = require('process');
const app = express();
const port = 3000 || env.PORT;

app.use(express.static('client'));

app.listen(port, () => {
    console.log(`app running on port ${port}`);
})