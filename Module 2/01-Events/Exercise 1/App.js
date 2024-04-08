import React from 'react';

import VisuallyHidden from './VisuallyHidden';

function ClickBallGame() {
  return (
    <div className="wrapper">
      <button
        className="ball"
        onClick={()=>window.alert("You won!")}
      >
        <VisuallyHidden>
          Ball
        </VisuallyHidden>
      </button>
    </div>
  );
}

export default ClickBallGame;