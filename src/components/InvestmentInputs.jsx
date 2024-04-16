import Input from "./Input";

const InvestmentInputs = ({ investment, onChangeInvestment }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        type="number"
        id="initial"
        label="Initial Investment"
        value={investment.initialInvestment}
        onChange={(e) =>
          onChangeInvestment("initialInvestment", e.target.value)
        }
      />
      <Input
        type="number"
        id="annual"
        label="Annual Investment"
        value={investment.annualInvestment}
        onChange={(e) => onChangeInvestment("annualInvestment", e.target.value)}
      />
      <Input
        type="number"
        id="expected"
        label="Expected Return"
        value={investment.expectedReturn}
        onChange={(e) => onChangeInvestment("expectedReturn", e.target.value)}
      />
      <Input
        type="number"
        id="duration"
        label="Duration"
        value={investment.duration}
        onChange={(e) => onChangeInvestment("duration", e.target.value)}
      />
    </form>
  );
};

export default InvestmentInputs;
