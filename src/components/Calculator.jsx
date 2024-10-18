import { useState } from "react";

const Calculator = () => {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [mortgageType, setMortgageType] = useState("repayment");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalPayment, setTotalPayment] = useState("");

  const calculateMortgage = () => {
    const principal = parseFloat(mortgageAmount);
    const yearlyRate = parseFloat(rate) / 100;
    const paymentSum = parseInt(term) * 12;
    const monthlyRate = yearlyRate / 12;

    let mortgage = 0;

    if (mortgageType === "repayment") {
      mortgage =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, paymentSum))) /
        (Math.pow(1 + monthlyRate, paymentSum) - 1);
    } else if (mortgageType === "interestOnly") {
      mortgage = principal * monthlyRate;
    }

    setMonthlyPayment(mortgage.toFixed(2));
    setTotalPayment((mortgage * paymentSum).toFixed(2));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateMortgage();
        }}
      >
        <div>
          <label htmlFor="mortgageAmount">Mortgage Amount</label>
          <div>
            <input
              type="number"
              id="mortgageAmount"
              name="mortgageAmount"
              value={mortgageAmount}
              onChange={(e) => setMortgageAmount(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="mortgageTerm">Mortgage Term</label>
          <div>
            <input
              type="number"
              id="mortgageTerm"
              name="mortgageTerm"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="rate">Intererst Rate</label>
          <div>
            <input
              type="number"
              id="rate"
              name="rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
        </div>

        <div className="mortgageType">
          <div>
            <div>
              <input
                type="radio"
                id="repayment"
                name="mortgageType"
                value="repayment"
                checked={mortgageType === "repayment"}
                onChange={(e) => setMortgageType(e.target.value)}
              />
            </div>
            <label htmlFor="rate">Repayment</label>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="interestOnly"
                name="mortgageType"
                value="interestOnly"
                checked={mortgageType === "interestOnly"}
                onChange={(e) => setMortgageType(e.target.value)}
              />
            </div>
            <label htmlFor="interestOnly">Interest Only</label>
          </div>
        </div>

        <button type="sumbit">Calculate Repayments</button>
        {console.log(monthlyPayment)}
        {console.log(totalPayment)}
      </form>
    </div>
  );
};

export default Calculator;
