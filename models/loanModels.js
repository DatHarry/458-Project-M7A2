const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
{
    loanType:{
        type: String,
        trim: true,
        enum: ['Home','Auto','Boat','Life'],
    },
    Name: {
        type: String,
        trim: true
    },
    loanNumber: {
        type: Number
    },
    Amount: {
        type: Number
    },
    interestRate: {
        type: Number
    },
    loanTermYears: {
        type: Number
    },
    startDate: {
        type: String
    },
    CreatedDate: {
        type: Date,
        default: Date.now
    },
    ModifiedDate: {
        type: Date,
        default: Date.now
    },
    IsDeleted: {
        type: Boolean,
        default: false,
        select: true

    },
    
});
const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;