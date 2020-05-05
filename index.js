const express = require('express')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000; 
const output_dir = path.resolve(__dirname, 'public');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting static folder 

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(output_dir, 'index.html'));
});

app.use(express.static(path.join(__dirname, 'public')))



app.listen(PORT, () => console.log('Sever Started'))

