const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Branching
// /q0form is a virutal page which in on page question0 on the form action

router.post('/q0form', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

// case_name is the variable     case-start is the name in the govukRadios on page question0

  let case_start = req.session.data['case-start']

  if (case_start === 'before') {
    res.redirect('/question1')
  } else {
    res.redirect('/results')
  }
})
