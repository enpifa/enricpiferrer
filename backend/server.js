const express = require('express')
const path = require('path')
const app = express();
const cors = require('cors');

// app.use(express.static(path.join(__dirname, 'build')))
app.use(cors);
app.use(express.json());
app.get('/ping', (req, res) => {
  return res.send('pong')
})

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

app.listen(8080, () => console.log('Server running...'));