const Loan = require('../models/loanModels');
const APIFeatures = require('../utilities/loanDbContext');
// const loans = require('/Users/harrychang/My Drive (cchan180@asu.edu)/IFT 458/4. Project 458/Project-M7A2/dev-data/data/loans.json')
// const url = require('url')
// const fs  = require('fs')



// ///Read data from file
// const tempLoan = require('./data/loan.json')
// // Load replace module
// const replaceTemplate = require('./utilities/replaceTemplateLoan')
// // read HTML template
// const templateHTMLLoan = fs.readFileSync(
//     `${__dirname}/views/allLoanList.pug`,
//     `utf-8`
// )





// exports.getAllLoans =   async (req, res) => {
//     let loans = [
//         [
//             {
//               "Name": "dxs sthapit",
//               "loanType": "Student",
//               "Amount": "2000",
//               "interestRate": 0.01,
//               "loanTermYears": "11"
//             },
//             {
//               "Name": "Lourdes Browning",
//               "loanType": "Auto",
//               "Amount": "1000",
//               "interestRate": 0.02,
//               "loanTermYears": "12"
//             },
//             {
//               "Name": "Sophie Louise Hart",
//               "loanType": "Student",
//               "Amount": "1000",
//               "interestRate": 0.03,
//               "loanTermYears": "13"
//             },
//             {
//               "Name": "Ayla Cornell",
//               "loanType": "Mortgage",
//               "Amount": "1000",
//               "interestRate": 0.03,
//               "loanTermYears": "14"
//             },
//             {
//               "Name": "Leo Gillespie",
//               "loanType": "Auto",
//               "Amount": "1500",
//               "interestRate": 0.03,
//               "loanTermYears": "15"
//             },
//             {
//               "Name": "Jennifer Hardy",
//               "loanType": "Auto",
//               "Amount": "2500",
//               "interestRate": 0.03,
//               "loanTermYears": "16"
//             },
//             {
//               "Name": "Kate Morrison",
//               "loanType": "Credit",
//               "Amount": "2500",
//               "interestRate": 0.03,
//               "loanTermYears": "10"
//             },
//             {
//               "Name": "Eliana Stout",
//               "loanType": "Credit",
//               "Amount": "1000",
//               "interestRate": 0.03,
//               "loanTermYears": "8"
//             },
//             {
//               "Name": "Cristian Vega",
//               "loanType": "Credit",
//               "Amount": "1000",
//               "interestRate": 0.03,
//               "loanTermYears": "10"
//             },
//             {
//               "Name": "Steve T. Scaife",
//               "loanType": "Mortgage",
//               "Amount": "2500",
//               "interestRate": 0.03,
//               "loanTermYears": "3"
//             }
//           ]
//     ]

//     res.render('index'), {
//         title: 'loans',
//         loans: loans
//     }
// };


exports.getAllLoans =   async (req, res) => {
    try {
    // EXECUTE QUERY
    const features = new APIFeatures(Loan.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    const loans = await features.query;

    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: loans.length,
        data: {
            loans
        }
    });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
};

exports.getLoan = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        // Loan.findOne({ _id: req.params.id })

        res.status(200).json({
        status: 'success',
        data: {
            tour
        }
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
};

exports.createLoan = async  (req, res) => {
    try {
        // const newLoan = new Loan({})
        // newLoan.save()

        const newLoan = await Loan.create(req.body);

        res.status(201).json({
        status: 'success',
        data: {
            loan: newLoan
        }
        });
    } catch (err) {
        res.status(400).json({
        status: 'fail',
        message: err
        });
    }
};

exports.updateLoan = async (req, res) => {
    try {
        const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
        });

        res.status(200).json({
        status: 'success',
        data: {
            loan
        }
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
};

exports.deleteLoan = async (req, res) => {
    try {
        await Loan.findByIdAndDelete(req.params.id);

        res.status(204).json({
        status: 'success',
        data: null
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
};