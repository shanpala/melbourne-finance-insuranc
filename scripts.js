function calculateRepayment() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById('loan-term').value) * 12;

    const monthlyRepayment = (loanAmount * interestRate) / (1 - Math.pow((1 + interestRate), -loanTerm));

    document.getElementById('result').innerHTML = `Monthly Repayment: $${monthlyRepayment.toFixed(2)}`;
}
