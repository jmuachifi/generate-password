//index.js
// module.exports = router;
// var express = require('express');
// var router = express.Router();
// // router.get('/', function(req, res, next) {
// //   res.render('index', { title: 'Password Generator 2.0' });
// // });

// // // Function to generate a random password
// function generatePassword(length = 12) {
//     const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
//     let password = '';
//     for (let i = 0; i < length; i++) {
//         password += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return password;
// }

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   // Generate a random password
//   const generatedPassword = generatePassword(); 
  
//   // Render the index.ejs template with the generated password
//   res.render('index', { password: generatedPassword, title: 'Password Generator 2.0' });
//   //res.render('index', { title: 'Password Generator 2.0' });
// });

// module.exports = router;
// index.js

var express = require('express');
var router = express.Router();

// Function to generate a random password
function generatePassword(length = 12) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

// POST route for generating a password
// router.post('/generate', function(req, res, next) {
//     const { length } = req.body;
//     const generatedPassword = generatePassword(length);
//     res.json({ password: generatedPassword });
// });
/* POST generate password */
router.post('/generate', function(req, res, next) {
  // Generate a random password
  const generatedPassword = generatePassword(req.body.length); 
  
  // Render the index.ejs template with the generated password
  res.render('index', { password: generatedPassword, title: 'Password Generator 2.0' });
});

// GET route for rendering the index page
router.get('/', function(req, res, next) {
    const generatedPassword = generatePassword();
    res.render('index', { password: generatedPassword, title: 'Password Generator 2.0' });
});

module.exports = router;


