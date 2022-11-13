const User = require('../models/userModel')
const axios = require('axios')

exports.home = async (req, res) => {
  res.status(200).render('overview', {
    title: `Over View`
  });
};

//loan
exports.getLoan = async (req, res) => {
  const queryLoan = await axios.get('http://localhost:3000/api/v1/loans')
  console.log(queryLoan.data.loans)
  res.status(200).render('allLoanList', {
    title: `Get Loan List`,
    "loans":queryLoan.data.loans
  });
};

exports.getCourse = async (req, res) => {
  res.status(200).render('Course', {
    title: `Get Course`
  });
};

exports.createNewCourse = async (req, res) => {
  res.status(200).render('newCourse', {
    title: `Create New Course`
  });
};

exports.getSignUpForm = (req, res) => {
  res.status(200).render('newUser', {
    title: 'Sign up New User'
  });
};
exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log in to your account'
  });
};

// exports.getLoginUser = (req, res) => {
//   const {email, password} = req.body;
//   res.status(200).render('login', {
//     title: 'Log in to your account'
//   });
// };
exports.getAll