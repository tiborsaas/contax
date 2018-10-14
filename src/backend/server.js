const express = require('express');
const app = express();
const port = process.env.PORT || 3003;

app.get('/test', (req, res) => {
    res.json({ 'status': 'ok' });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
