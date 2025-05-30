const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the views directory (adjust if your .ejs file is elsewhere)
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', {message: 'message from EJS'}) // Renders views/index.ejs
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});