
// const mongoose = require('mongoose')
// const app = require('./app')
// const port = 5000


// // Connect to MongoDB

// async function connectToDB() {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/productDB");
//     console.log("✅ Database Connected Successfully🧑🏻‍💻");

//     app.listen(port, () => {
//       console.log(`✅ Server is running on port ${port} 🚀`);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// connectToDB();



// -------------------------------------

// index.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const categoryRoutes = require('./app/routes/categoryRoutes');
const productRoutes = require('./app/routes/productRoutes');
const app = express();
const port = 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/productDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Routes
app.use('/categories', categoryRoutes);
app.use('/categories', productRoutes);



