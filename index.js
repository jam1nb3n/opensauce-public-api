const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const util = require('./lib/util');

// Import routes
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
const commentRoute = require('./routes/comment');
const searchRoute = require('./routes/query');
const permissionsRoute = require('./routes/permissions');
const ingredientRoute = require('./routes/ingredient');

// Imports from .env
dotenv.config();
const port = process.env.PORT;

// Connect to database
mongoose.connect(
	process.env.DB_CONNECT,
	{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
	() => util.log('connected to database')
);


// Hide express is running
app.use((req, res, next) => {
	res.setHeader('X-Powered-By', 'OpenSauce/API');
	next();
});


// Middleware
app.use(express.json());


// Route Middlewares:
app.use('/api/user', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/comment', commentRoute);
app.use('/api/search', searchRoute);
app.use('/api/admin/users/', permissionsRoute);
app.use('/api/ingredient', ingredientRoute);

// sets port to port defined in env and outputs success message to console
app.listen(port, () => util.log(`Server Online on port ${port}`));
