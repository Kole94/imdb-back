var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/Movies', function (err) {
   if (err) throw err;
   console.log('Successfully connected to the database');
});
