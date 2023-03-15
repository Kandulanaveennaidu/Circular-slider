import React, { useState } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';

function App() {
  const [grossEarnings, setGrossEarnings] = useState(2500);
  const [miscFees, setMiscFees] = useState(0.09);
  const [traderEarnings, setTraderEarnings] = useState(0.32);
  const [dalalEarnings, setDalalEarnings] = useState(0.49);

  const handleGrossEarningsChange = (value) => {
    setGrossEarnings(value);
  };

  const handleMiscFeesChange = (value) => {
    setMiscFees(value / 100);
  };

  const handleTraderEarningsChange = (value) => {
    setTraderEarnings(value / 100);
  };

  const handleDalalEarningsChange = (value) => {
    setDalalEarnings(value / 100);
  };

  const dalalEarningsAmount = grossEarnings * dalalEarnings;
  const traderEarningsAmount = grossEarnings * traderEarnings;
  const miscFeesAmount = grossEarnings * miscFees;
  const referralEarningsAmount = grossEarnings * 0.1;

  return (
    <div>
      <h1>My Circular Slider</h1>
      <p>Gross Earnings: {grossEarnings}</p>
      <CircularSlider
        min={0}
        max={5000}
        dataIndex={grossEarnings}
        onChange={handleGrossEarningsChange}
      />

      <p>Misc. Fees: {miscFees * 100}% (Rs{miscFeesAmount})</p>
      <CircularSlider
        min={0}
        max={20}
        dataIndex={miscFees * 100}
        onChange={handleMiscFeesChange}
      />

      <p>Trader Earnings: {traderEarnings * 100}% (Rs{traderEarningsAmount})</p>
      <CircularSlider
        min={0}
        max={100}
        dataIndex={traderEarnings * 100}
        onChange={handleTraderEarningsChange}
      />

      <p>Dalal Earnings: {dalalEarnings * 100}% (Rs{dalalEarningsAmount})</p>
      <CircularSlider
        min={0}
        max={100}
        dataIndex={dalalEarnings * 100}
        onChange={handleDalalEarningsChange}
      />

      <p>Referral Earnings: 10% (Rs{referralEarningsAmount})</p>
    </div>
  );
}

export default App;
