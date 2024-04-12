// Acceptance criteria:

// “Your coin balance”, at the bottom of the page, should update to show the value of numOfCoins.
// Clicking the coin should increment this value by 2 (since it's a $2 coin).



import React from 'react';

import BigCoin from './BigCoin';

function App() {
  const [numOfCoins, setNumOfCoins] = React.useState(0);
  
  return (
    <div className="wrapper">
      <main>
        <BigCoin setNumOfCoins={setNumOfCoins}/>
      </main>
      <footer>
        Your coin balance:
        <strong>{numOfCoins}</strong>
      </footer>
    </div>
  );
}

export default App;