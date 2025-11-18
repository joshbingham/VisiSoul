const express = require('express');
const app = express();
const port = 3000;

const images = [
  {
    imageUrl: 'https://picsum.photos/400/300?random=1',
    photographer: 'Alice'
  },
  {
    imageUrl: 'https://picsum.photos/400/300?random=2',
    photographer: 'Bob'
  },
  {    
    imageUrl: 'https://picsum.photos/400/300?random=3',
    photographer: 'Charlie'
  }
];

// Allow CORS so that the frontend can access this API
const cors = require('cors');
app.use(cors());

//API endpoint to get a random image
app.get('/api/images', (req, res) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  res.json(images[randomIndex]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

