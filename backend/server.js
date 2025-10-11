const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/message', (req, res) => {
    res.json({ message: "Hello from Backend!" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
